import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '@models/data-collection/form';
import { DialogComponent } from '@shared/popup/dialog.component';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';
import { DateTime } from 'luxon';
import { pick } from 'lodash';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataCollectionService]
})
export class FormTableComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  // TABS
  public tabsArray = [
    { title: 'All', value: null },
    { title: 'Active', value: 'active' },
    { title: 'Drafts', value: 'draft' },
    { title: 'In Review', value: 'reviewed' },
    { title: 'Closed', value: 'closed' },
    { title: 'Archived', value: 'archived' },
  ];
  public activeTab = this.tabsArray[0];

  // BULK BUTTON
  public bulkOptions = ['Share', 'Export PDF', 'Archive'];
  public disabledBulkBtn = true;

  // TABLE DATA
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  public displayedColumns: string[] = ['name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];
  public params = {
    page: 1,
    limit: 200,
    search: {},
    sort: {},
    filter: {},
  };
  public selectedForms = new Set();

  // POPUP
  public popupTitle = '';
  public popupActionBtnText = '';
  public popupContentArray: {title: string, canRemove?: boolean}[] = [];

  static createSharedUrl(id: string) {
    return `${window.location.href}/f/${id}`;
  }

  filterForm: FormGroup;
  sort = ['name', true];
  statusesOptions: string[] = ['Active', 'Drafts', 'In Review', 'Closed', 'Archived'];
  _sm: SelectionModel<any>;

  constructor(
    public dataCollectionService: DataCollectionService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder) {
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
    this.filterForm.valueChanges.subscribe(value => {
      this.dataSource.filter(value);
    });
  }


  getUserInfo(obj: any) {
    const user = pick(obj, ['full_name', 'role.role_name']);
    return { name: user['full_name'], role: user['role']['role_name']};
  }
  getStatusColor(status: string): string {
    let color: string;
    switch (status) {
      case 'archived':
        color = 'gray';
        break;
        case 'active':
        color = 'green';
        break;
        case 'draft':
        color = 'lite-gray';
        break;
        case 'in review':
        color = 'yellow';
        break;
        case 'closed':
        color = 'gray';
        break;
        default:
        color = 'gray';
        break;
      }
      return color;
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
    this.filterForm.get('status').setValue(filter.value);
  }

  bulkAction(selectedIndex) {
    console.log(this.bulkOptions[selectedIndex]);
  }

  // POPUP LOGICS
  popupClosed(action?: boolean) {
    switch (this.popupTitle) {
      case 'Share':
        this.onCopyLink(this.popupContentArray[0].title);
    }
  }

  exportFormPDF(): void {

  }

  openSharePopup(mongoId: string) {
    this.popupTitle = 'Share';
    this.popupActionBtnText = 'Copy Link';
    this.popupContentArray = [{ title: FormTableComponent.createSharedUrl(mongoId) }];
    this.dialog.open();
  }

  shareForms(): void {
    this.dialog.open();
  }

  archiveForms(): void {
    this.dataCollectionService.archiveForms(this.getSelectedIds())
      .subscribe(() => {
        // this.getAllForm();
      });
  }

  exportFormsZIP(): void {

  }

  getSelectedIds(): number[] {
    const ids = [];
    // this.selectedForms.map((form) => ids.push(form.id));
    return ids;
  }

  getSelectedMongoIds(): number[] {
    const ids = [];
    // this.selectedForms.map((form) => ids.push(form.mongo_id));
    return ids;
  }



  deleteItem(id: number): void {
  //   this.selectForm(id);
  }



  onDuplicateForm(mongoId: string): void {
    this.dataCollectionService
      .duplicateForm(mongoId)
      .subscribe(() => {
        this.dataSource.loadFormsList(this.params);
      });
  }

  onExportPDF(mongoId: string) {
    this.dataCollectionService
      .exportPDFForm(mongoId)
      .subscribe(() => {
        console.log('Start form download');
      });
  }

  onCopyLink(label: string): void {
    navigator.clipboard.writeText(label)
      .then(() => {})
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }
}
