import { action } from '@storybook/addon-actions';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ProgressLineBarComponent } from '../../shared/bars/progress-line-bar/progress-line-bar.component';

storiesOf('Elements|Graphica', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ProgressLineBarComponent],
    })
  )
  .add('Progress bar', () => {
    return {
      template: `
        <div class="story">
          <div style="width: 30%">
            <sw-progress-line-bar [value]="value" [color]="color"></sw-progress-line-bar>
          </div>
        </div>
      `,
      props: {
        onChange: action('onChange'),
        value: number('value', 20),
        color: select('color', {purple: 'purple', yellow: 'yellow'}, 'purple'),
      }
    };
  });
