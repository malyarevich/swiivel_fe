import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '@models/data-collection/form';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { pick } from 'lodash';
import { DateTime } from 'luxon';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormSearchParams } from '@app/models/form-search-params';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTableComponent implements OnInit {
  @ViewChild('link', {static: false}) link: ElementRef;
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  // TABS
  public statusArray = [
    { title: 'All', value: null },
    { title: 'Active', value: 'active' },
    { title: 'Drafts', value: 'draft' },
    { title: 'In Review', value: 'review' },
    { title: 'Closed', value: 'closed' },
    { title: 'Archived', value: 'archived' },
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
    limit: 200,
  };

  // POPUP
  public popupTitle = '';
  public popupActionBtnText = '';
  public popupContentArray: {title: string, id?: any}[] = [];
  public canLabelsRemove = false;

  public icons = IconsEnum;

  static createSharedUrl(id: string) {
    return `${window.location.href}/f/${id}`;
  }
  download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  }
  filterForm: FormGroup;
  sort = ['name', true];

  statusesOptions: string[] = ['Active', 'Drafts', 'In Review', 'Closed', 'Archived'];
  _sm: SelectionModel<any>;

  constructor(
    public dataCollectionService: DataCollectionService,
    public router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2) {
    this.filterForm = this.fb.group({
      name: [null],
      type: [null],
      access: [null],
      createdBy: [null],
      updatedAt: [null],
      status: [null]
    });
  }

  ngOnInit() {
    this._sm = new SelectionModel(true);
    this.dataSource.loadFormsList(this.params);
    this.filterForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        Object.keys(value).forEach(key => (value[key] === null || value[key] === '') && delete value[key])
        return value;
      })
    ).subscribe(value => {
      this.params.filter = {...value};
      this.dataSource.loadFormsList(this.params);
    });
  }

  getUserInfo(obj: any) {
    const user = pick(obj, ['full_name', 'role.role_name']);
    return { name: user['full_name'], role: user['role']['role_name']};
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'archived':
        return 'gray';
      case 'active':
        return 'green';
      case 'draft':
        return 'lite-gray';
      case 'review':
        return 'yellow';
      case 'closed':
        return 'gray';
      default:
        return 'gray';
    }
  }

  getDate(date: Date) {
    let dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat("LL-dd-yyyy");
  }

  getTime(date: Date) {
    let dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat("t").toLowerCase();
  }

  sortBy(field: string) {
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

  selectRow(row: any, e: Event) {
    if (e && e.target && (e.target['tagName'] === 'BUTTON' || e.target['parentElement']['tagName'] === 'BUTTON')) {
      e.stopPropagation();
    } else {
      if (row) {
        this._sm.toggle(row);
      }
      this.disabledBulkBtn = this._sm.selected.length === 0;
    }
    // if (this.selectedForms.has(row)) {
    //   this.selectedForms.delete(row);
    // } else {
    //   this.selectedForms.add(row);
    // }

    // this.disabledBulkBtn = this.selectedForms.size ? false : true;


  }

  rowSelected(row: any) {
    return this._sm.isSelected(row);
  }

  clickTab(filter) {
    this.activeTab = filter;
    this.filterForm.get('status').setValue(filter.title, {emitEvent: false});
  }

  bulkAction(selectedIndex) {
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
    this._sm.clear();
    this.disabledBulkBtn = true;
    this.openSharePopup(form);
  }

  openSharePopup(form?: Form) {
    this.popupTitle = 'Share';

    if (form ) {
      this.popupContentArray = [];
      this.popupContentArray.push({ title: FormTableComponent.createSharedUrl(form.mongo_id) });
    } else {
      this.popupContentArray = [];
      this._sm.selected.forEach((item: Form) => {
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
    this._sm.selected.forEach((item: Form) => {
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
    this._sm.selected.forEach((item: Form) => {
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
        this.router.navigate([`forms-dashboard/form-constructor/${res._id}`]).then();
      });
  }

  clearLink(url) {
    this.download = {
      url: null,
      filename: null
    }
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
        this.renderer.selectRootElement(this.link.nativeElement).click()
        this.clearLink(url);
      });
  }

  onCopyLink(label: string): void {
    navigator['clipboard'].writeText(label)
      .then(() => {})
      .catch(err => {
        console.error('Could not copy text: ', err);
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
}
