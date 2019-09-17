import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '@models/data-collection/form';
import { DialogComponent } from '@shared/popup/dialog.component';
import { DataCollectionService } from './data-collection.service';
import { FormsDataSource } from './form-table.datasource';
import { DateTime } from 'luxon';
import { pick } from 'lodash';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [DataCollectionService]
})
export class FormTableComponent implements OnInit {

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
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;
  bulkOptions = ['Share', 'Export PDF', 'Archive'];
  public params = {
    page: 1,
    limit: 200,
    search: {},
    sort: {},
    filter: {},
  };
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  // public forms: Form[] = null;
  public selectedForms: Form[] = [];
  public linkFilters = [
    { title: 'All', value: null },
    { title: 'Active', value: 'active' },
    { title: 'Drafts', value: 'draft' },
    { title: 'In Review', value: 'reviewed' },
    { title: 'Closed', value: 'closed' },
    { title: 'Archived', value: 'archived' },
  ]
  public activeLinkFilter = this.linkFilters[0];

  public displayedColumns: string[] = ['name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];

  filterForm: FormGroup;
  sort = ['name', true];

  // todo: возможно это вынести в сервис
  static convertFormsData(forms: Form[]): Form[] {
    console.log(forms);
    forms.map((form) => {
      form.isSelected = false;
      form.sharedUrl = `http://red.dev.codeblue.ventures/api/v1/data-collection/online-form/${form.mongo_id}`;
    });
    return forms;
  }

  ngOnInit() {
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
    return dt.toFormat("LL-dd-yyyy");
  }

  getTime(date: Date) {
    let dt = DateTime.fromJSDate(date);
    return dt.toFormat("t").toLowerCase();
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

  filterByLink(filter) {
    this.activeLinkFilter = filter;
    this.filterForm.get('status').setValue(filter.value);
  }

  bulkAction(selectedIndex) {
    console.log(this.bulkOptions[selectedIndex]);
  }


  shareForms(): void {
    this.dialog.open();
  }

  dialogClosed(action?: boolean) { // false means "Cancel"
    console.debug(`Dialog cancelled: ${!action}`);
  }

  archiveForms(): void {
  }

  exportFormsPDF(): void {

  }

  exportFormsZIP(): void {

  }

  getSelectedIds(): number[] {
    const ids = [];
    this.selectedForms.map((form) => ids.push(form.id));
    return ids;
  }

  getSelectedMongoIds(): number[] {
    const ids = [];
    this.selectedForms.map((form) => ids.push(form.mongo_id));
    return ids;
  }

  onCopyLink(label: string): void {
    navigator['clipboard'].writeText(label)
      .then(() => {
        console.log('Text copied to clipboard', label);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }

  deleteItem(id) {
    console.log(id);
  }
}
