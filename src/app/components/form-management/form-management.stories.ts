import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkTableModule } from '@angular/cdk/table';
import { SharedModule } from '@shared/shared.module';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { StatusColors } from './form-management-submissions/form-management-submissions.models';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressLineBarComponent } from '@app/components/bars/progress-line-bar/progress-line-bar.component';
import { PopupComponent } from '@app/core/components/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { CdkDetailRowDirective } from '@app/utils/directives/cdk-detail-row.directive';
import { OnlineFormModule } from '@app/modules/online-form/online-form.module';
import { FormManagementDataSource } from './form-management-submissions/mock-datasource';
import { FormManagementSubmissionsComponent } from './form-management-submissions/form-management-submissions.component';
import { IconsEnum } from '@app/components/icons.enum';
import { Form } from '@models/data-collection/form.model'
import { mockFormDetails } from './mock-api-responses';
import { 
    mockAnalyticsDashboardResponse,
    mockLogListResponse,
  } from './form-management-analytics/mock-api-responses';
import { FormManagementComponent } from './form-management.component';
import { FormManagementAnalyticsComponent } from '@app/components/form-management/form-management-analytics/form-management-analytics.component';
import { InsideMissingFieldsComponent } from '@app/modules/data-collection/form-info/form-info-submissions/form-info-submission-inside/inside-missing-fields/inside-missing-fields.component';
import { InsideDocumentsViewComponent } from '@app/modules/data-collection/form-info/form-info-submissions/form-info-submission-inside/inside-form-documents/inside-documents-view/inside-documents-view.component';
import { FormTableHeaderComponent } from '@app/shared/components/form-table-header/form-table-header.component';
import { TableHeaderFilterTextComponent } from '@app/shared/components/form-table-header/table-header-filter-text/table-header-filter-text.component';
import { TableHeaderFilterDateComponent } from '@app/shared/components/form-table-header/table-header-filter-date/table-header-filter-date.component';
import { TableHeaderTitleComponent } from '@app/shared/components/form-table-header/table-header-title/table-header-title.component';
import { SharedRedComponentsModule } from '@app/shared/components/sharedRedComponents.module';

const stories = storiesOf('Form Management', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [
        FormManagementComponent, FormManagementSubmissionsComponent, 
        ProgressLineBarComponent, PopupComponent, CdkDetailRowDirective,
        FormManagementAnalyticsComponent, InsideMissingFieldsComponent,
        InsideDocumentsViewComponent, FormTableHeaderComponent, 
        TableHeaderFilterTextComponent, TableHeaderFilterDateComponent,
        TableHeaderTitleComponent,
    ],
    imports: [
        CommonModule, FormsModule, SharedModule, CdkTableModule,
        OverlayModule, MatProgressBarModule, OnlineFormModule,
        HttpClientModule, SharedRedComponentsModule, ...StorybookImports, 
    ],
    providers: [...StorybookProviders],
    entryComponents: [PopupComponent],
  })
)

const form: Form = mockFormDetails.data.form_data;
const templateStatus = mockAnalyticsDashboardResponse.data.status;
const templateStatusesOptions = [
    { title: 'Archived', value: 'archived' },
    { title: 'Active', value: 'active' },
    { title: 'Draft', value: 'draft' },
    { title: 'Review', value: 'review' },
    { title: 'Closed', value: 'closed' },
];
const templateStatusesTitles = templateStatusesOptions.reduce((obj, option) => {
    obj[option.value] = option.title;
    return obj;
}, {});
const templateStatusColors: StatusColors = {
    statusColors: new Map([
        ['archived', 'gray'],
        ['active', 'green'],
        ['draft', 'lite-gray'],
        ['review', 'yellow'],
        ['closed', 'gray'],
    ]),
    defaultColor: 'gray',
};

// Props for form-management-analytics

const dashboardBlock = mockAnalyticsDashboardResponse.data.dashboard_block;
const created = mockLogListResponse.data.data.find(log => log.action === 'created');
const lastUpdated = mockLogListResponse.data.data
  .filter(log => log.action === 'updated')
  .reduce((prev, curr) => prev.created_at > curr.created_at ? prev : curr);
const circleGraph = mockAnalyticsDashboardResponse.data.analytics.circle_graph;
const statusNumbers = mockAnalyticsDashboardResponse.data.analytics.status_numbers;
const unassignedDocuments = 11;

// Props for form-management-submissions

const dataSource: FormManagementDataSource = new FormManagementDataSource();
dataSource.loadFormsList();

const displayedColumns = [
    'account', 'students', 'last_updated', 'completion_percentage', 
    'online_submission', 'pdf_submission', 'status', 'actions', 'expand'
];
const filterFormGroup = {
    account: [null],
    students: [null],
    last_updated: [null],
    completion_percentage: [null],
    online_submission: [null],
    pdf_submission: [null],
    status: [null],
};
const sort = ['account', true];
const currentPage = 1;
const statusesOptions = [
    { title: 'All', value: null },
    { title: 'Not Started', value: 'not_started', icons: [] },
    { title: 'In Progress', value: 'in_progress', icons: [] },
    { title: 'Incomplete', value: 'incomplete', icons: [], substatuses: [
        { title: 'Missing Info', value: 'missing_info', icons: [
            { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
        ]},
        { title: 'Missing Documents', value: 'missing_documents', icons: [
            { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
            { icon: IconsEnum.UPLOAD, action: '' },
        ]},
        { title: 'Missing Payment', value: 'missing_payment', icons: [
            { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
        ]},
    ]},
    { title: 'Submitted', value: 'submitted', icons: [
        { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
    ]},
    { title: 'Need Further Review', value: 'need_further_review', icons: [
        { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
    ]},
    { title: 'Completed', value: 'completed', icons: [
        { icon: IconsEnum.DOWNLOAD, action: onExportPDF },
    ]},
];
const statusesTitles = statusesOptions.reduce((obj, option) => {
    obj[option.value] = option.title;
    return obj;
}, {});
const formSubmissionsListParams: FormSubmissionsListParams = { page: 1, limit: 10 };
const statusColors: StatusColors = {
    statusColors: new Map([
        ['not_started', 'gray'],
        ['in_progress', 'blue'],
        ['incomplete', 'red'],
        ['submitted', 'gray'],
        ['need_further_review', 'yellow'],
        ['completed', 'green'],
    ]),
    defaultColor: 'gray',
};
const totalItems = 100;
const showSpinner = false;

function onToggleExpand(formID: string) {
    
}

function onExportPDF(form: any) {
    console.log(`Export PDF: ${form.mongo_id}`);
}


stories.add('Default', () => ({
    template: `
        <sw-form-management
            [form]="form"
            [status]="templateStatus"
            [statusColors]="templateStatusColors"
            [statusesTitles]="templateStatusesTitles"
            [unassignedDocuments]="unassignedDocuments"
        >
            <sw-form-management-analytics 
                analytics
                [round]="round"
                [created]="created"
                [lastUpdated]="lastUpdated"
                [circleGraph]="circleGraph"
                [statusNumbers]="statusNumbers"
            >
            </sw-form-management-analytics>
            <sw-form-management-submissions 
                submissions
                [dataSource]="dataSource"
                [displayedColumns]="displayedColumns"
                [filterFormGroup]="filterFormGroup"
                [sort]="sort"
                [currentPage]="currentPage"
                [statusesOptions]="statusesOptions"
                [statusesTitles]="statusesTitles"
                [formSubmissionsListParams]="formSubmissionsListParams"
                [statusColors]="statusColors"
                [totalItems]="totalItems"
                [showSpinner]="showSpinner"
                (toggleExpand)="onToggleExpand($event)"
            >
            </sw-form-management-submissions>
        <sw-form-management>
        `,
    props: {
        form,
        templateStatus,
        templateStatusColors,
        templateStatusesTitles,
        unassignedDocuments,
        dataSource,
        displayedColumns,
        filterFormGroup,
        sort,
        currentPage,
        statusesOptions,
        statusesTitles,
        formSubmissionsListParams,
        statusColors,
        showSpinner,
        onToggleExpand,
        round: dashboardBlock.round,
        created,
        lastUpdated,
        circleGraph,
        statusNumbers,
    },
  })
);
