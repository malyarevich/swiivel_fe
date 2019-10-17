import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressLineBarComponent } from './progress-line-bar.component';

const stories = storiesOf('Progress Bar', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [ProgressLineBarComponent],
    imports: [MatProgressBarModule, ...StorybookImports],
    providers: [...StorybookProviders],
  })
)

stories.add('Default', () => ({
    template: `
        <sw-progress-line-bar
            [value]="value"
        >
        </sw-progress-line-bar>`,
    props: {
        value: 50,
    },
  })
);
