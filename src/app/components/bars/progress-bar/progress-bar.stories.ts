import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { StorybookImports, StorybookProviders } from '@components/utils/storybook';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar.component';

const stories = storiesOf('Progress Bar', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({ 
    declarations: [ProgressBarComponent],
    imports: [MatProgressBarModule, ...StorybookImports],
    providers: [...StorybookProviders],
  })
)

stories.add('Default', () => ({
    template: `
        <sw-progress-bar
            [value]="value"
        >
        </sw-progress-bar>`,
    props: {
        value: 50,
    },
  })
);
