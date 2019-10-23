import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormManagementAPIService } from "./form-management.service";
import { FormManagementSubmissionsDataSource } from './form-management-submissions.datasource';
import { Form } from '@models/data-collection/form.model';
import { IconsEnum } from '@app/components/icons.enum';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { StatusColors } from '@app/components/form-management/form-management-submissions/form-management-submissions.models';

class Submissions {
  dataSource: FormManagementSubmissionsDataSource;
  displayedColumns: string[];
  filterFormGroup: Object;
  sort: any[];
  currentPage: number;
  statusesOptions: any[];
  statusesTitles: any;
  formSubmissionsListParams: FormSubmissionsListParams;
  statusColors: StatusColors;
  totalItems: number;
  showSpinner: boolean;
}

@Component({
  selector: "sw-form-management-container",
  templateUrl: "./form-management.container.html",
})
export class FormManagementContainer implements OnInit {
  public formID: string;
  public form: Form;

  public submissions: Submissions = {
    dataSource: new FormManagementSubmissionsDataSource(this.formManagementAPIService),
    displayedColumns: [
      'account', 'students', 'last_updated', 'completion_percentage', 
      'online_submission', 'pdf_submission', 'status', 'actions', 'expand'
    ],
    filterFormGroup: {
      account: [null],
      students: [null],
      last_updated: [null],
      completion_percentage: [null],
      online_submission: [null],
      pdf_submission: [null],
      status: [null],
    },
    sort: ['account', true],
    currentPage: 1,
    statusesOptions: [
      { title: 'All', value: null },
      { title: 'Not Started', value: 'not_started', icons: [] },
      { title: 'In Progress', value: 'in_progress', icons: [] },
      { title: 'Incomplete', value: 'incomplete', icons: [], substatuses: [
          { title: 'Missing Info', value: 'missing_info', icons: [
              { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
          ]},
          { title: 'Missing Documents', value: 'missing_documents', icons: [
              { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
              { icon: IconsEnum.UPLOAD, action: '' },
          ]},
          { title: 'Missing Payment', value: 'missing_payment', icons: [
              { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
          ]},
      ]},
      { title: 'Submitted', value: 'submitted', icons: [
          { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
      ]},
      { title: 'Need Further Review', value: 'need_further_review', icons: [
          { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
      ]},
      { title: 'Completed', value: 'completed', icons: [
          { icon: IconsEnum.DOWNLOAD, action: this.onExportPDF },
      ]},
    ],
    statusesTitles: {},
    formSubmissionsListParams: { page: 1, limit: 10 },
    statusColors: {
      statusColors: new Map([
          ['not_started', 'gray'],
          ['in_progress', 'blue'],
          ['incomplete', 'red'],
          ['submitted', 'gray'],
          ['need_further_review', 'yellow'],
          ['completed', 'green'],
      ]),
      defaultColor: 'gray',
    },
    totalItems: 100,
    showSpinner: false,
  };

  public submissionsDataSource: FormManagementSubmissionsDataSource = new FormManagementSubmissionsDataSource(this.formManagementAPIService);

  constructor(
    public formManagementAPIService: FormManagementAPIService,
    private route: ActivatedRoute,
  ) {
    this.submissions.statusesTitles = this.submissions.statusesOptions.reduce((obj, option) => {
        obj[option.value] = option.title;
        return obj;
    }, {});
  }

  ngOnInit() {
    this.useFormID();
    this.getFormDetails();
    this.getSubmissionsList();
  }

  useFormID() {
    this.route.params.subscribe(params => {
      this.formID = params["id"];
    });
  }

  getFormDetails() {
    this.formManagementAPIService
      .getFormDetails(this.formID)
      .subscribe((data: any) => {
        this.form = data.form_data;
      })
  }
  
  getSubmissionsList() {
    this.submissions.dataSource.getSubmissionsList(this.formID);
  }

  onExportPDF(form: any) {
    console.log(`Export PDF: ${form.mongo_id}`);
  }
  
  onToggleExpand(event: any) {
    console.log(`Expanded: ${event}`);
  }
}
