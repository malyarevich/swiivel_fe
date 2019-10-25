import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { SharedRedComponentsModule } from '@app/shared/components/sharedRedComponents.module';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { FormHistoryComponent } from './form-history.component';
import { mockLogList } from './mock-api-responses';
import { Log } from '@models/form-history/form-history.model';

const stories = storiesOf('Form History', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [
      FormHistoryComponent
    ],
    imports: [
        CommonModule, SharedRedComponentsModule, ...StorybookImports, 
    ],
    providers: [...StorybookProviders],
    entryComponents: [FormHistoryComponent],
  })
);

const logList: Log[] = mockLogList.data.data;

stories.add('Default', () => ({
    template: `
        <sw-form-history 
            [logList]="logList"
        >
        </sw-form-history>`,
    props: {
      logList,
    },
  })
);
