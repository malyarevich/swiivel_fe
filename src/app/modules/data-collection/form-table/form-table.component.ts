import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormService} from '../services/form.service';
import {FormSearchParams} from '@models/form-search-params';
import {TEMPLATE_STATUS} from '@app/enums';
import {FormSql} from '@models/data-collection/form.model';
import {RowSelectedService} from '@modules/data-collection/form-table/services/row-selected.service';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormTableComponent implements OnInit {

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

  constructor(private formService: FormService, private rowSelectedService: RowSelectedService) {
  }

  ngOnInit() {
    this.getAllForm();
    this.addSelectedIds();
  }


  getAllForm(): void {
    this.formService.getFormsList(this.params).subscribe(forms => {
      this.forms = forms.data;
      this.rowSelectedService.removeSelectedIndexes();
    });
  }

  setSearch(data) {
    const {field, order, value} = data;
    this.params.sort = {field, order};
    this.params.search[field] = value;
    this.getAllForm();
  }

  // Global search by all fields
  setSearchValue(value) {
    this.params.value = value;
    this.getAllForm();
  }

  removeForm(id: string): void {
    this.formService.deleteForm(id).subscribe(res => res);
    this.forms = this.forms.filter((form => form.mongo_id != id));
  }

  resetFormSelected() {
    this.formSelected = null;
    this.getAllForm();
  }

  addSelectedIds() {
    this.rowSelectedService.selectedIndexes.subscribe((indexes) => {
      this.formsSelectedIds = indexes.map((index) => {
        if (this.forms[index]) { return this.forms[index].id; }
      });
    });
  }

  doBulkAction(type) {
    if (!this.formsSelectedIds.length) { return; }
    if (type === 'delete') { this.bulkDelete(); }
    if (type === 'archive') { this.bulkArchive(); }
  }

  bulkDelete() {
    this.formService.bulkDeleteForms(this.formsSelectedIds).subscribe(res => {
      this.getAllForm();
    });
  }

  bulkArchive() {
    this.formService.changeStatus(this.formsSelectedIds, TEMPLATE_STATUS.STATUS_ARCHIVED).subscribe(res => {
      this.getAllForm();
    });
  }

  changeStatus(id, status) {
    this.formService.changeStatus(id, status).subscribe(res => {
      this.getAllForm();
    });
  }

  filterStatus(value) {
    if (value == TEMPLATE_STATUS.STATUS_ALL) {
      this.params.filter = {};
      this.getAllForm();
    }
    this.params.filter['status'] = value;
    this.getAllForm();
  }

  setFormSelected(id: any) {
    this.formSelected = id;
  }

}
