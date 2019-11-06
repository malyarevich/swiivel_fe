import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilsService } from '@app/core/utils.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { FormModel } from '@models/data-collection/form.model';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { get, pick } from 'lodash';
import { DateTime } from 'luxon';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTableComponent implements OnInit {
  @ViewChild('link', { static: false }) link: ElementRef;
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  // TABS
  public statusArray = [
    { title: 'All', value: null },
    { title: 'Active', value: 'active' },
    { title: 'Draft', value: 'draft' },
    { title: 'In Review', value: 'review' },
    { title: 'Closed', value: 'closed' },
    { title: 'Archived', value: 'archived' },
  ];
  public statusArrayOptions = [...this.statusArray];

  public typeArray = [
    { title: 'Registration', value: 'registration' },
    { title: 'Application', value: 'application' },
  ];

  public activeTab = this.statusArray[0];

  // BULK BUTTON
  public bulkOptions = ['Share', 'Export PDF', 'Archive'];
  public disabledBulkBtn = true;

  // TABLE DATA
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  public displayedColumns: string[] = ['name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];
  public params: FormSearchParams = {
    page: 1,
    limit: 10,
  };

  // POPUP
  public popupTitle = '';
  public popupActionBtnText = '';
  public popupContentArray: { title: string, id?: any }[] = [];
  public canLabelsRemove = false;
  public isPopupOpen = false;
  public showInvite = false;

  public selectedUsers = [];
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
  public sort = ['name', true];
  public currentPage = 1;

  public statusesOptions: string[] = ['Active', 'Draft', 'In Review', 'Closed', 'Archived'];
  // tslint:disable-next-line:variable-name
  public _sm: SelectionModel<any>;

  static createSharedUrl(id: string) {
    return `${window.location.origin}/view-form/${id}`;
  }

  constructor(
    public dataCollectionService: DataCollectionService,
    public router: Router,
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
      updatedAt: [null],
      status: [null],
    });

    this.statusArrayOptions.splice(0, 1);
  }

  ngOnInit() {
    this._sm = new SelectionModel(true);
    this.dataSource.getTotalAmount.subscribe(amount => {
      this.totalAmount = amount;
      this.cdr.detectChanges();
    });
    this.dataSource.formsListMetadata$.subscribe(metadata => {
      if (metadata.page > metadata.last_page) {
        this.params.page = 1;
        this.dataSource.loadFormsList(this.params);
      } else {
        this.totalItems = metadata.total;
        this.currentPage = metadata.page;
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
      this.disabledBulkBtn = true;
      this._sm.clear();
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

  getStatusColor(status: string): string {
    switch (status) {
      case 'archived':
        return 'gray';
      case 'active':
        return 'green';
      case 'draft':
        return 'light-blue';
      case 'review':
        return 'yellow';
      case 'closed':
        return 'purple';
      default:
        return 'gray';
    }
  }

  getDate(date: Date) {
    const dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat('LL-dd-yyyy');
  }

  getTime(date: Date) {
    const dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat('t').toLowerCase();
  }

  sortBy(field: string) {
    this.disabledBulkBtn = true;
    this._sm.clear();
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
    this.params.page = 1;
    this.dataSource.loadFormsList(this.params);
  }

  changePage(event) {
    if (event) {
      this.params.page = event.page;
      this.params.limit = event.limit;
      this.dataSource.loadFormsList(this.params);
    }
  }

  selectRow(row: any, e: Event) {
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
        this._sm.toggle(row);
      }
      this.disabledBulkBtn = this._sm.selected.length === 0;
    }
  }

  rowSelected(row: any) {
    return this._sm.isSelected(row);
  }

  clickTab(filter) {
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
    this.disabledBulkBtn = true;
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
    this.disabledBulkBtn = true;
    this.openSharePopup(form);
  }

  openSharePopup(form?: FormModel) {
    this.popupTitle = 'Share';

    if (form) {
      this.popupContentArray = [];
      this.popupContentArray.push({ title: FormTableComponent.createSharedUrl(form.mongo_id) });
    } else {
      this.popupContentArray = [];
      this._sm.selected.forEach((item: FormModel) => {
        this.popupContentArray.push({ title: FormTableComponent.createSharedUrl(item.mongo_id) });
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
    this._sm.selected.forEach((item: FormModel) => {
      this.popupContentArray.push({ title: item.name, id: item.id });
    });

    this.popupSetActionBtnTextAndLogicRemoved(this.popupTitle);

    if (this.popupContentArray.length) {
      this.dialog.open();
    }
  }

  openExportPopup() {
    this.popupTitle = 'Export PDF';

    this.popupContentArray = [];
    this._sm.selected.forEach((item: FormModel) => {
      this.popupContentArray.push({ title: item.name, id: item.mongo_id });
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
      .subscribe((res) => {
        this.router.navigate(['form-creator', res._id]).then();
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

  isEmptyRound(obj: any): boolean {
    if (Array.isArray(obj)) {
      return true;
    }

    return !Object.keys(obj).length;
  }

  getRoundDate(startDate: string, endDate: string): string {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    const returnDate = start.setLocale('en-US').toFormat('LLL dd').concat('-');

    if (start.hasSame(end, 'month')) {
      return returnDate.concat(end.setLocale('en-US').toFormat('dd'));
    }

    return returnDate.concat(end.setLocale('en-US').toFormat('LLL dd'));
  }

}
