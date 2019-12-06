import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormManagementService } from '../form-management.service';
import { SubmissionDataSource } from './submission.datasource';
import { DateService } from '@app/services/date.service';
import { pick } from 'lodash';
import { map } from 'rxjs/operators';
import { formStatuses } from '@app/shared/form-statuses';
import { ButtonColorsEnum } from '@app/shared/buttons/buttonColors.enum';

@Component({
  selector: 'sw-form-management-submissions',
  templateUrl: './form-management-submissions.component.html',
  styleUrls: ['./form-management-submissions.component.scss']
})
export class FormManagementSubmissionsComponent implements OnInit {

  public displayedColumns = [
    'accounts',
    'students',
    'lastUserActions',
    'completion',
    'onlineSubmissions',
    'pdfSubmissions',
    'formStatus',
    'actions',
    'expandButton'
  ];
  public statusesOptions = [
    { title: 'Reviewed Completed', value: 'reviewed_completed' },
    { title: 'Not Started', value: 'not_started' },
    { title: 'Incomplete', value: 'incomplete' },
    { title: 'Submitted', value: 'submitted' },
    { title: 'Active', value: 'active' },
    { title: 'Archived', value: 'archived' },
    { title: 'Draft', value: 'draft' },
    { title: 'In Review', value: 'in_review' },
    { title: 'Closed', value: 'closed' }
  ];

  public totalItems: number;
  public showSpinner: boolean;
  public lastPage = 0;
  public currentPage = 1;

  public params: any = {
    page: 1,
    limit: 10,
    sort: {
      field: 'last_updated',
      order: 'desc'
    }
  };

  public sort = ['last_updated', true];
  public filterForm: FormGroup;
  public dataSource: SubmissionDataSource = new SubmissionDataSource(this.fms);
  public statusArrayOptions = this.statusesOptions;

  private _formId: string;
  private expandedSec: any[] = [];


  @Input()
  set formId(id: string) {
    this._formId = id;
    this.dataSource.loadSubmission(this._formId, this.params);
  }

  constructor(
    private fb: FormBuilder,
    private fms: FormManagementService,
    public dateService: DateService,
    private cdr: ChangeDetectorRef
  ) {
    this.filterForm = this.fb.group({
      account_name: [null],
      student_name: [null],
      last_updated_date: [null],
      completion: [null],
      online_submission: [null],
      pdf_submission: [null],
      status: [null]
    });
  }

  ngOnInit() {
    this.filterForm.valueChanges.pipe(
      map(value => {
        Object.keys(value).forEach(key => (value[key] === null || value[key] === '') && delete value[key]);
        return value;
      })
    ).subscribe(value => {
      this.expandedSec = []
      this.params.filter = { ...value };
      this.dataSource.loadSubmission(this._formId, this.params);
    });
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
      this.cdr.markForCheck();
    });
    this.dataSource.$formsListMetadata.subscribe(metadata => {
      if (metadata.page > metadata.last_page) {
        this.expandedSec = []
        this.params.page = 1;
        this.lastPage = metadata.last_page;
        this.dataSource.loadSubmission(this._formId, this.params);
      } else {
        this.lastPage = metadata.last_page;
        this.totalItems = metadata.total;
        this.currentPage = metadata.page;
      }
    });
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
    this.expandedSec = []
    this.dataSource.loadSubmission(this._formId, this.params);
  }

  changePage(event) {
    if (event) {
      this.expandedSec = []
      this.params.page = event.page;
      this.params.limit = event.limit;
      this.dataSource.loadSubmission(this._formId, this.params);
    }
  }

  getUserInfo(obj: any) {
    const user = pick(obj, ['first_name', 'last_name']);
    return { name: `${user.first_name} ${user.last_name}` };
  }

  getIcon(expanded): string {
    return !!expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  getStatusColor(status: string): ButtonColorsEnum {
    switch (status) {
      case 'reviewed_completed':
        return ButtonColorsEnum.DARK_BLUE;
      case 'not_started':
        return ButtonColorsEnum.BLUE;
      case 'incomplete':
        return ButtonColorsEnum.RED;
      case 'submitted':
        return ButtonColorsEnum.LIGHT_PURPLE;
      case 'active':
        return ButtonColorsEnum.GREEN;
      case 'archived':
        return ButtonColorsEnum.GRAY_PURPLE;
      case 'draft':
        return ButtonColorsEnum.LIGHT_BLUE;
      case 'in_review':
        return ButtonColorsEnum.YELLOW;
      case 'closed':
        return ButtonColorsEnum.PURPLE;
      default:
        return ButtonColorsEnum.GRAY;
    }
  }

  getStatusText(status: string): string {
    return status ? status.replace('_', ' ') : '';
  }

  toggleExpanded(id: string) {
    if (this.expandedSec[id] !== undefined) {
      this.expandedSec[id] = !this.expandedSec[id];
    } else {
      this.expandedSec[id] = true;
    }
  }

  isExpanded(id: string): boolean {
    return !!this.expandedSec[id]
  }

}
