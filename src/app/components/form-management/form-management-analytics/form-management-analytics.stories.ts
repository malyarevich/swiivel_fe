import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { FormManagementSubmissionsComponent } from './form-management-analytics.component';
import { 
  mockAnalyticsDashboardResponse,
  mockLogListResponse,
} from './mock-api-responses';

const stories = storiesOf('Form Management Analytics', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [
        FormManagementSubmissionsComponent
    ],
    imports: [
        CommonModule, ...StorybookImports, 
    ],
    providers: [...StorybookProviders],
    entryComponents: [FormManagementSubmissionsComponent],
  })
);

const dashboardBlock = mockAnalyticsDashboardResponse.data.dashboard_block;
const created = mockLogListResponse.data.data.find(log => log.action === 'created');
const lastUpdated = mockLogListResponse.data.data
  .filter(log => log.action === 'updated')
  .reduce((prev, curr) => prev.created_at > curr.created_at ? prev : curr);

stories.add('Default', () => ({
    template: `
        <sw-form-management-analytics 
            [round]="round"
            [created]="created"
            [lastUpdated]="lastUpdated"
        >
        </sw-form-management-analytics>`,
    props: {
        round: dashboardBlock.round,
        created,
        lastUpdated,
    },
  })
);
