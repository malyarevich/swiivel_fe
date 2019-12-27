import { BlockHeaderComponent } from '@shared/headers/block-header/block-header.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Elements|Headers', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [BlockHeaderComponent]
    })
  )
  .add('Block header', () => {
    return {
      template: `
        <div class="story">
          <sw-block-header>{{title}}</sw-block-header>
        </div>
      `,
      props: {
        title: text('title', 'Block header'),
      },
    };
  });
