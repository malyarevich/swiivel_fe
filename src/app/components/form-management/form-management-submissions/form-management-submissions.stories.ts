import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { SharedModule } from '@shared/shared.module';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { StatusColors } from './form-management-submissions.models';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { FormManagementDataSource } from './mock-datasource';
import { FormManagementSubmissionsComponent } from './form-management-submissions.component';

const stories = storiesOf('Form Management Submissions', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [FormManagementSubmissionsComponent],
    imports: [
        CommonModule, FormsModule, SharedModule, CdkTableModule,
        ...StorybookImports, 
    ],
    providers: [...StorybookProviders]
  })
)

const dataSource: FormManagementDataSource = new FormManagementDataSource();
const displayedColumns = ['account'];
const filterFormGroup = {
    account: [null],
    students: [null],
    last_updated: [null],
    completion: [null],
    online_submission: [null],
    pdf_submission: [null],
    status: [null],
};
const sort = ['account', true];
const currentPage = 1;
const statusesOptions = ['Active', 'Drafts', 'In Review', 'Closed', 'Archived'];
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

stories.add('Standard', () => ({
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
    },
  })
);
