import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {VFormService} from "../v-form.service";
import {FormSql} from "../../data-collection/reducers/forms/form.model";
import {FormSearchParams} from "../../../models/form-search-params";
import {TEMPLATE_STATUS} from "../../../enums/template-status";

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-table.component.html',
  styleUrls: ['./v-form-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VFormTableComponent implements OnInit {

  forms: FormSql[];
  formSelected: number;
  formsSelectedIds: number[] = [];
  params: FormSearchParams = {
    page: 1,
    limit: 200,
    value: '',
    search: {},
    sort: {},
    filter: {},
    conditions: {},
  };
  templateStatuses = TEMPLATE_STATUS;
  changedStatuses = [
    this.templateStatuses.STATUS_ACTIVE,
    this.templateStatuses.STATUS_ARCHIVED,
    this.templateStatuses.STATUS_DRAFT,
    this.templateStatuses.STATUS_REVIEW
  ];

  cols = [
    {
      id: 'name',
      type: 'text',
      title: 'FORM NAME',
      sort: true,
      search: true,
    },
    {
      id: 'type',
      type: 'text',
      title: 'TYPE',
      sort: true,
      search: true,
    },
    {
      id: 'access',
      type: 'text',
      title: 'ACCESS',
      sort: false,
      search: false,
    },

    {
      id: 'full_name',
      type: 'text',
      title: 'CREATED BY',
      sort: true,
      search: true,
    },
    {
      id: 'updated_at',
      type: 'date',
      title: 'UPDATED DATE',
      sort: true,
      search: true,
    },
    {
      id: 'status',
      type: 'text',
      title: 'STATUS',
      sort: true,
      search: true,
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
      width: '350px',
    },
  ];

  constructor(private vFormService: VFormService) {
  }

  ngOnInit() {
    this.getAllForm();
  }


  getAllForm(): void {
    this.vFormService.getFormsList(this.params).subscribe(forms => {
      this.forms = forms.data
    });
  }

  setSearch(data) {
    const {field, order, value} = data;
    this.params.sort = {field, order};
    this.params.search[field] = value;
    this.getAllForm()
  }

  //Global search by all fields
  setSearchValue(value) {
    this.params.value = value;
    this.getAllForm();
  }

  removeForm(id: string): void {
    this.vFormService.deleteForm(id).subscribe(res => res);
    this.forms = this.forms.filter((form => form.mongo_id != id));
  }

  resetFormSelected() {
    this.formSelected = null;
    this.getAllForm();
  }

  addSelectedIds(id) {
    let index = this.formsSelectedIds.indexOf(id);
    if (index === -1) {
      this.formsSelectedIds.push(id);
    } else {
      this.formsSelectedIds.splice(index, 1);
    }
  }

  isCheckedRow(id) {
    return this.formsSelectedIds.find(item => item === id);
  }

  doBulkAction(type) {
    if (!this.formsSelectedIds.length) return;
    if (type === 'delete') this.bulkDelete();
    if (type === 'archive') this.bulkArchive();
  }

  bulkDelete() {
    this.vFormService.bulkDeleteForms(this.formsSelectedIds).subscribe(res => {
      this.getAllForm();
      this.formsSelectedIds = [];
    });
  }

  bulkArchive() {
    this.vFormService.changeStatus(this.formsSelectedIds, TEMPLATE_STATUS.STATUS_ARCHIVED).subscribe(res => {
      this.getAllForm();
      this.formsSelectedIds = [];
    });
  }

  changeStatus(id, status) {
    this.vFormService.changeStatus(id, status).subscribe(res => {
      this.getAllForm();
    });
  }

  getClassByStatus(status) {
    return {
      'app-btn-status-active': status === TEMPLATE_STATUS.STATUS_ACTIVE,
      'app-btn-status-archived': status === TEMPLATE_STATUS.STATUS_ARCHIVED,
      'app-btn-status-draft': status === TEMPLATE_STATUS.STATUS_DRAFT,
      'app-btn-status-review': status === TEMPLATE_STATUS.STATUS_REVIEW,
      'app-btn-status-closed': status === TEMPLATE_STATUS.STATUS_CLOSED,
    }
  }

  filterStatus(value) {
    if (value == TEMPLATE_STATUS.STATUS_ALL) {
      this.params.filter = {};
      this.getAllForm();
    }
    this.params.filter['status'] = value;
    this.getAllForm();
  }

// TODO Create directive ConvertData for Safari browser
  convertDate(date) {
    return date.replace(/\s/g, "T");
  }
}
