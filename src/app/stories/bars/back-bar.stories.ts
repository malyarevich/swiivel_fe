import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { BackBarComponent } from '../../shared/bars/back-bar/back-bar.component';

storiesOf('Elements|Bars', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [BackBarComponent],
      imports: [FontAwesomeModule],
      entryComponents: [FaIconComponent]
    })
  )
  .add('Back bar', () => {
    return {
      template: `
        <sw-back-bar [title]="title"></sw-back-bar>
      `,
      props: {
        onChange: action('onChange'),
        title: text('title', 'Title')
      }
    };
  });
