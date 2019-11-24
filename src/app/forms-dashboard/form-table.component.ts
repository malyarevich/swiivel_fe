import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilsService } from '@app/core/utils.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { CheckService } from '@app/services/check.service';
import { DateService } from '@app/services/date.service';
import { FormService } from '@app/services/form.service';
import { StatusService } from '@app/services/status.service';
import { FormModel } from '@models/data-collection/form.model';
import { UserItem } from '@models/user-item';
import { formStatusOptions } from '@shared/form-status-options';
import { formStatuses } from '@shared/form-statuses';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { get, pick } from 'lodash';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';

@Component({
  selector: 'sw-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTableComponent implements OnInit {
  @ViewChild('link', { static: false }) link: ElementRef;
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  // TABS
  public statusArray = formStatuses;
  public statusArrayOptions = [...this.statusArray];

  public typeArray = [
    { title: 'Registration', value: 'registration' },
    { title: 'Application', value: 'application' },
  ];

  public activeTab = this.statusArray[0];

  // BULK BUTTON
  public bulkOptions = ['Share', 'Export PDF', 'Archive'];

  // TABLE DATA
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  public displayedColumns = ['checkbox', 'name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];
  public params: FormSearchParams = {
    page: 1,
    limit: 10,
  };
  public users: UserItem[] = [];
  public lastPage = 0;
  public rows: FormModel[] = [];

  // POPUP
  public popupTitle = '';
  public popupActionBtnText = '';
  public popupContentArray: { title: string, id?: any }[] = [];
  public canLabelsRemove = false;
  public isPopupOpen = false;
  public showInvite = false;

  public icons = IconsEnum;
  public totalAmount = 0;
  public totalItems: number;
  public showSpinner: boolean;
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };
  public filterForm: FormGroup;
  public sort = ['updated_at', false];
  public currentPage = 1;

  public statusesOptions = formStatusOptions;
  // tslint:disable-next-line:variable-name
  public selectedRows: any = {};
  public _sm: SelectionModel<any> = new SelectionModel(true);
  public pageSelection: { allSelected: boolean, selectedAnyRow: boolean }[] = [];
  public selectedAnyRow = false;

  constructor(
    public dataCollectionService: DataCollectionService,
    public router: Router,
    public statusService: StatusService,
    public checkService: CheckService,
    public dateService: DateService,
    public formService: FormService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public utilsService: UtilsService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    this.filterForm = this.fb.group({
      name: [null],
      type: [null],
      access: [null],
      createdBy: [null],
      updatedAt: null,
      status: [null],
    });

    this.statusArrayOptions.splice(0, 1);
  }

  ngOnInit() {
    this.dataSource.getTotalAmount.subscribe(amount => {
      this.totalAmount = amount;
      this.cdr.detectChanges();
    });

    this.dataSource.getFormsData.subscribe(data => {
      this.rows = data;
    });

    this.dataCollectionService.getUsers().subscribe(users => {
      this.users = users.map(user => {
        return {
          name: user.full_name ? user.full_name : null,
          id: user.id ? user.id : null,
          avatar: user.avatar ? user.avatar : null,
        };
      });
    });

    this.dataSource.formsListMetadata$.subscribe(metadata => {
      if (metadata.page > metadata.last_page) {
        this.params.page = 1;
        this.lastPage = metadata.last_page;
        this.dataSource.loadFormsList(this.params);
      } else {
        this.lastPage = metadata.last_page;
        this.totalItems = metadata.total;
        this.currentPage = metadata.page;
      }
      if (!this.pageSelection[this.params.page - 1]) {
        this.changePageSelection(this.params.page - 1, false);
      }
    });
    this.dataSource.loadFormsList(this.params);
    this.filterForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        if (value.status && !value.status.length) {
          this.activeTab = this.statusArray[0];
        }
        Object.keys(value).forEach(key => (value[key] === null || value[key] === '') && delete value[key]);
        return value;
      })
    ).subscribe(value => {
      this._sm.clear();
      this.selectedRows = {};
      this.pageSelection = [];
      this.selectedAnyRow = false;
      this.params.filter = { ...value };
      this.dataSource.loadFormsList(this.params);
    });
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
    });
  }

  getUserInfo(obj: any) {
    const user = pick(obj, ['full_name', 'role']);
    return {name: user.full_name, role: get(user, 'role.role_name')};
  }

  sortBy(field: string) {
    this._sm.clear();
    this.selectedRows = {};
    this.nullSelectedAllPages();

    if (this.sort[0] === field) {
      switch (this.sort[1]) {
        case true:
          this.sort = [field, false];
          break;
        case false:
          this.sort = [field, null];
          break;
        default:
          this.sort = [field, true];
          break;
      }
    } else {
      this.sort = [field, true];
    }
    if (!this.params.sort) {
      this.params.sort = {
        field: null,
        order: null
      };
    }
    this.params.sort.field = field;
    this.params.sort.order = !!this.sort[1] ? 'asc' : 'desc';
    this.dataSource.loadFormsList(this.params);
  }

  changePage(event) {
    if (event) {
      this.params.page = event.page;
      this.params.limit = event.limit;
      this.dataSource.loadFormsList(this.params);
    }
  }

  selectRow(row: FormModel, e: Event) {
    // @ts-ignore
    if (
      e &&
      e.target &&
      // tslint:disable-next-line:no-string-literal
      (e.target['tagName'] === 'BUTTON' ||
        // tslint:disable-next-line:no-string-literal
        e.target['parentElement']['tagName'] === 'BUTTON')
    ) {
      e.stopPropagation();
    } else {
      if (row) {
        if (this._sm.isSelected(row.id)) {
          this._sm.deselect(row.id);
          delete this.selectedRows[row.id];
        } else {
          this._sm.select(row.id);
          this.selectedRows[row.id] = row;
        }
      }
      const selectedPageRows = this.rows.map((rowForm: any) => this._sm.isSelected(rowForm.id)).filter(item => item);

      this.pageSelection[this.params.page - 1].allSelected = selectedPageRows.length === this.rows.length;
      this.pageSelection[this.params.page - 1].selectedAnyRow = selectedPageRows.length > 0;

      for (let i = 0; i < this.pageSelection.length; i++) {
        if (this.pageSelection[i].selectedAnyRow) {
          this.selectedAnyRow = true;
          break;
        }

        if (i === this.pageSelection.length - 1) {
          this.selectedAnyRow = false;
        }
      }
    }
  }

  clickTab(filter) {
    this._sm.clear();
    this.selectedRows = {};
    this.pageSelection = [];
    this.selectedAnyRow = false;

    this.activeTab = filter;
    if (filter.title === 'All') {
      this.filterForm.get('status').setValue(null);
    } else {
      this.filterForm.get('status').setValue([this.statusArray.find(value => value.title === filter.title)], { emitEvent: true});
    }
  }

  bulkAction(selectedIndex) {
    this.isPopupOpen = true;
    switch (this.bulkOptions[selectedIndex]) {
      case 'Share':
        this.openSharePopup();
        break;
      case 'Export PDF':
        this.openExportPopup();
        break;
      case 'Archive':
        this.openArchivePopup();
        break;
    }
  }

  // POPUP LOGIC
  popupClosed(action?: boolean) {
    if (action) {
      switch (this.popupTitle) {
        case 'Share':
          this.onCopyLink(this.popupContentArray.map(({ title }) => title).join(', '));
          break;
        case 'Export PDF':
          this.onExportZIP(this.popupContentArray.map(({ id }) => id).join(','));
          break;
        case 'Archive':
          this.archiveForms(this.popupContentArray.map(({ id }) => id));
          break;
      }
    }
    this._sm.clear();
    this.selectedRows = {};
    this.nullSelectedAllPages();
    this.showInvite = false;
    this.isPopupOpen = false;
  }

  popupSetActionBtnTextAndLogicRemoved(type: string) {
    switch (type) {
      case 'Share':
        if (this.popupContentArray.length > 1) {
          this.canLabelsRemove = true;
          this.popupActionBtnText = `Copy Link (${this.popupContentArray.length})`;
        } else {
          this.canLabelsRemove = false;
          this.popupActionBtnText = `Copy Link`;
        }
        break;
      case 'Invite': {
        this.popupTitle = 'Access Settings';
        this.popupActionBtnText = 'Save';
        break;
      }
      default:
        if (this.popupContentArray.length > 1) {
          this.canLabelsRemove = true;
          this.popupActionBtnText = `${type} (${this.popupContentArray.length})`;
        } else {
          this.canLabelsRemove = false;
          this.popupActionBtnText = `${type}`;
        }
        break;
    }
  }

  onShareLink(form): void {
    this.isPopupOpen = true;
    this._sm.clear();
    this.selectedRows = {};
    this.nullSelectedAllPages();
    this.openSharePopup(form);
  }

  openSharePopup(form?: FormModel) {
    this.popupTitle = 'Share';

    if (form) {
      this.popupContentArray = [];
      this.popupContentArray.push({ title: this.formService.createSharedUrl(form.mongo_id) });
    } else {
      this.popupContentArray = [];
      this._sm.selected.forEach((item: number) => {
        this.popupContentArray.push({ title: this.formService.createSharedUrl(this.selectedRows[item].mongo_id) });
      });
    }

    this.popupSetActionBtnTextAndLogicRemoved(this.popupTitle);

    if (this.popupContentArray.length) {
      this.dialog.open();
    }
  }

  openArchivePopup() {
    this.popupTitle = 'Archive';

    this.popupContentArray = [];
    this._sm.selected.forEach((item: number) => {
      this.popupContentArray.push({ title: this.selectedRows[item].name, id: this.selectedRows[item].id });
    });

    this.popupSetActionBtnTextAndLogicRemoved(this.popupTitle);

    if (this.popupContentArray.length) {
      this.dialog.open();
    }
  }

  openExportPopup() {
    this.popupTitle = 'Export PDF';

    this.popupContentArray = [];
    this._sm.selected.forEach((item: number) => {
      this.popupContentArray.push({ title: this.selectedRows[item].name, id: this.selectedRows[item].mongo_id });
    });

    this.popupSetActionBtnTextAndLogicRemoved(this.popupTitle);

    if (this.popupContentArray.length) {
      this.dialog.open();
    }
  }

  archiveForms(ids: number[]): void {
    this.changeStatus(this.statusesOptions.indexOf('Archived'), ids);
  }

  deleteLabel(index: number, popupTitle: string): void {
    this.popupContentArray.splice(index, 1);

    this.popupSetActionBtnTextAndLogicRemoved(popupTitle);
  }

  onDuplicateForm(mongoId: string): void {
    this.dataCollectionService
      .duplicateForm(mongoId)
      .subscribe(async (res) => {
        await this.router.navigate(['/form', res._id]);
      });
  }

  clearLink(url) {
    this.download = {
      url: null,
      filename: null
    };
    window.URL.revokeObjectURL(url);
    this.cdr.markForCheck();
  }

  onExportPDF(mongoId: string) {
    this.dataCollectionService
      .exportPDFForm(mongoId)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `form-${mongoId}.pdf`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
        this.clearLink(url);
      });
  }

  onExportZIP(mongoIds: string) {
    this.dataCollectionService
      .exportPDFFormZIP(mongoIds)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `forms.zip`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
        this.clearLink(url);
      });
  }

  onCopyLink(label: string): void {
    this.utilsService.copyTextToClipboard(label)
      .then(() => { })
      .catch(() => {
        console.log('Could not copy text');
      });
  }

  changeStatus(statusId: number, ids: number[]): void {
    this.statusArray.forEach((item) => {
      if (item.title === this.statusesOptions[statusId]) {
        this.dataCollectionService
          .changeStatus(ids, item.value)
          .subscribe(() => {
            this.dataSource.loadFormsList(this.params);
          });
      }
    });
  }

  getUserName(permission: any): any {
    return {
      name: permission && permission.user && permission.user.full_name ? permission.user.full_name : 'no name',
      id: permission && permission.user && permission.user.id ? permission.user.id : '',
    };
  }

  keyDownFunction(event: any): void {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  inviteUsers(): void {
    this.showInvite = true;
    this.popupSetActionBtnTextAndLogicRemoved('Invite');
    this.dialog.open();
  }

  allSelect(): void {
    if (this.pageSelection[this.params.page - 1].selectedAnyRow) {
      this.rows.forEach((row: any) => {
        this._sm.deselect(row.id);
        delete this.selectedRows[row.id];
      });

      this.changePageSelection(this.params.page - 1, false);

      if (!this._sm.selected.length) {
        this.selectedAnyRow = false;
      }
    } else {
      this.rows.forEach((row: any) => {
        this._sm.select(row.id);
        this.selectedRows[row.id] = row;
      });

      this.changePageSelection(this.params.page - 1, true);
      this.selectedAnyRow = true;
    }
  }

  nullSelectedAllPages() {
    this.pageSelection.forEach((pageData, page) => {
      this.changePageSelection(page, false);
      this.selectedAnyRow = false;
    });
  }

  changePageSelection(page: number, value = false) {
    this.pageSelection[page] = { allSelected: value, selectedAnyRow: value };
  }
}
