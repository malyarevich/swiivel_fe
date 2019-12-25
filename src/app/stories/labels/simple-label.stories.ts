import { LabelComponent } from '@shared/labels/label/label.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Elements|Labels', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [LabelComponent]
    })
  )
  .add('Simple label', () => {
    return {
      template: `
        <div class="story">
          <sw-label>{{label}}</sw-label>
        </div>
      `,
      props: {
        label: text('label', 'Label'),
      },
    };
  });
