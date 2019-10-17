import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkTableModule } from '@angular/cdk/table';
import { SharedModule } from '@shared/shared.module';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { StatusColors } from './form-management-submissions.models';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressLineBarComponent } from '@app/components/bars/progress-line-bar/progress-line-bar.component';
import { PopupComponent } from '@app/core/components/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { CdkDetailRowDirective } from '@app/utils/directives/cdk-detail-row.directive';
import { OnlineFormModule } from '@app/modules/data-collection/online-form/online-form.module';
import { FormManagementDataSource } from './mock-datasource';
import { FormManagementSubmissionsComponent } from './form-management-submissions.component';

const stories = storiesOf('Form Management Submissions', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [
        FormManagementSubmissionsComponent, ProgressLineBarComponent, 
        PopupComponent, CdkDetailRowDirective
    ],
    imports: [
        CommonModule, FormsModule, SharedModule, CdkTableModule,
        OverlayModule, MatProgressBarModule, OnlineFormModule,
        HttpClientModule, ...StorybookImports, 
    ],
    providers: [...StorybookProviders],
    entryComponents: [PopupComponent],
  })
)

const dataSource: FormManagementDataSource = new FormManagementDataSource();
dataSource.loadFormsList();

const displayedColumns = [
    'account', 'students', 'last_updated', 'completion_percentage', 
    'online_submission', 'pdf_submission', 'status', 'actions'
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
    { title: 'Active', value: 'active' },
    { title: 'Drafts', value: 'draft' },
    { title: 'In Review', value: 'review' },
    { title: 'Closed', value: 'closed' },
    { title: 'Archived', value: 'archived' },
];
const formSubmissionsListParams: FormSubmissionsListParams = { page: 1, limit: 10 };
const statusColors: StatusColors = {
    statusColors: new Map([
        ['archived', 'gray'],
        ['active', 'green'],
        ['draft', 'lite-gray'],
        ['review', 'yellow'],
        ['closed', 'gray'],
    ]),
    defaultColor: 'gray',
};
const totalItems = 100;
const showSpinner = false;

function onToggleExpand(formID: string) {
    
}


stories.add('Default', () => ({
    template: `
        <sw-form-management-submissions 
            [dataSource]="dataSource"
            [displayedColumns]="displayedColumns"
            [filterFormGroup]="filterFormGroup"
            [sort]="sort"
            [currentPage]="currentPage"
            [statusesOptions]="statusesOptions"
            [formSubmissionsListParams]="formSubmissionsListParams"
            [statusColors]="statusColors"
            [totalItems]="totalItems"
            [showSpinner]="showSpinner"
            (toggleExpand)="onToggleExpand($event)"
        >
        </sw-form-management-submissions>`,
    props: {
        dataSource,
        displayedColumns,
        filterFormGroup,
        sort,
        currentPage,
        statusesOptions,
        formSubmissionsListParams,
        statusColors,
        showSpinner,
        onToggleExpand,
    },
  })
);
