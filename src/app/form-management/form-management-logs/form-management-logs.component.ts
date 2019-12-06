import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormManagementService } from '../form-management.service';
import { LogsDataSource } from './logs.datasource';
import { pick, get } from 'lodash';
import { DateService } from '@app/services/date.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sw-form-management-logs',
  templateUrl: './form-management-logs.component.html',
  styleUrls: ['./form-management-logs.component.scss']
})
export class FormManagementLogsComponent implements OnInit {

  @Input() 
  set formId(id: string) {
    this._formId = id;
    this.dataSource.loadLogs(this._formId, this.params);
  }

  public displayedColumns = ['createdAt', 'user', 'actions'];
  public dataSource: LogsDataSource = new LogsDataSource(this.fms);

  public totalItems: number;
  public showSpinner: boolean;
  public lastPage = 0;
  public currentPage = 1;

  public sort = ['created_at', true];
  public params: any = {
    page: 1,
    limit: 10,
  };
  public filterForm: FormGroup;

  private _formId: string;

  constructor(
    private fms: FormManagementService,
    public dateService: DateService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.filterForm = this.fb.group({
      created_at: [null],
      user: [null],
      description: [null],
    });
  }

  ngOnInit() {
    this.filterForm.valueChanges.pipe(
      map(value => {
        Object.keys(value).forEach(key => (value[key] === null || value[key] === '') && delete value[key]);
        return value;
      })
    ).subscribe(value => {
      this.params.filter = { ...value };
      this.dataSource.loadLogs(this._formId, this.params);
    });
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
      this.cdr.markForCheck();
    });
    this.dataSource.$formsListMetadata.subscribe(metadata => {
      if (metadata.page > metadata.last_page) {
        this.params.page = 1;
        this.lastPage = metadata.last_page;
        this.dataSource.loadLogs(this._formId, this.params);
      } else {
        this.lastPage = metadata.last_page;
        this.totalItems = metadata.total;
        this.currentPage = metadata.page;
      }
    });
  }

  getUserInfo(obj: any) {
    const user = pick(obj, ['full_name', 'role']);
    return {name: user.full_name, role: get(user, 'role.role_name')};
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
    if (this.sort[1] !== null) {
      this.params.sort.field = field;
      this.params.sort.order = !!this.sort[1] ? 'asc' : 'desc';
    } else {
      delete this.params.sort;
    }
    this.dataSource.loadLogs(this._formId, this.params);
  }

  changePage(event) {
    if (event) {
      this.params.page = event.page;
      this.params.limit = event.limit;
      this.dataSource.loadLogs(this._formId, this.params);
    }
  }

}
