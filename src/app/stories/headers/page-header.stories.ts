import { PageHeaderComponent } from '@shared/headers/page-header/page-header.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Elements|Headers', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [PageHeaderComponent]
    })
  )
  .add('Page header', () => {
    return {
      template: `
        <div class="story">
          <sw-page-header>{{title}}</sw-page-header>
        </div>
      `,
      props: {
        title: text('title', 'Page header'),
      },
    };
  });
