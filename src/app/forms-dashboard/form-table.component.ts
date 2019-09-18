import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '@models/data-collection/form';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { pick } from 'lodash';
import { DateTime } from 'luxon';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';

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

  // POPUP
  public popupTitle = '';
  public popupActionBtnText = '';
  public popupContentArray: string[] = [];
  public canLabelsRemove = false;

  public icons = IconsEnum;

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

  selectRow(row: any) {
    if (row) {
      this._sm.toggle(row);
    }

    this.disabledBulkBtn = this._sm.selected.length ? false : true;
  }

  rowSelected(row: any) {
    return this._sm.isSelected(row);
  }

  clickTab(filter) {
    this.activeTab = filter;
    this.filterForm.get('status').setValue(filter.value);
  }

  bulkAction(selectedIndex) {
    switch (this.bulkOptions[selectedIndex]) {
      case 'Share':
        this.openSharePopup();
    }
  }

  // POPUP LOGIC
  popupClosed(action?: boolean) {
    if (action) {
      switch (this.popupTitle) {
        case 'Share':
          this.onCopyLink(this.popupContentArray.join(', '));
      }
    }
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
    }
  }

  onShareLink(form): void {
    this._sm.clear();
    this.openSharePopup(form);
  }

  openSharePopup(form?: Form): void {
    this.popupTitle = 'Share';

    if (form ) {
      this.popupContentArray = [];
      this.popupContentArray.push(FormTableComponent.createSharedUrl(form.mongo_id));
    } else {
      this.popupContentArray = [];
      this._sm.selected.forEach((item: Form) => {
        this.popupContentArray.push(FormTableComponent.createSharedUrl(item.mongo_id));
      });
    }

    this.popupSetActionBtnTextAndLogicRemoved(this.popupTitle);

    if (this.popupContentArray.length) {
      this.dialog.open();
    }
  }

  archiveForms(): void {
    this.dataCollectionService.archiveForms(this.getSelectedIds())
      .subscribe(() => {
        // this.getAllForm();
      });
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

  deleteLabel(index: number, popupTitle: string): void {
    this.popupContentArray.splice(index, 1);

    this.popupSetActionBtnTextAndLogicRemoved(popupTitle);
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
