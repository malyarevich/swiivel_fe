import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

const colors = {
  green: 'green',
  blue: 'blue',
  'light-yellow': 'light-yellow',
  gray: 'gray',
  red: 'red',
}

storiesOf('Elements|Labels', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [StatusLabelComponent]
    })
  )
  .add('Status label', () => {
    return {
      template: `
        <div class="story">
          <div>
            <div style="display: inline-block; margin: 0 0 10px;">
              <sw-status-label [class]="colorApproved">{{labelApproved}}</sw-status-label>
            </div>
          </div>
          <div style="display: inline-block; margin: 0 0 10px;">
            <sw-status-label [class]="colorAssigned">{{labelAssigned}}</sw-status-label>
          </div>
          <div>
            <div style="display: inline-block; margin: 0 0 10px;">
              <sw-status-label [class]="colorNeedReview">{{labelNeedReview}}</sw-status-label>
            </div>
          </div>
          <div>
            <div style="display: inline-block; margin: 0 0 10px;">
              <sw-status-label [class]="colorNeedFurtherReview">{{labelNeedFurtherReview}}</sw-status-label>
            </div>
          </div>
          <div>
            <div style="display: inline-block; margin: 0 0 10px;">
              <sw-status-label [class]="colorUnassigned">{{labelUnassigned}}</sw-status-label>
            </div>
          </div>
        </div>
      `,
      props: {
        labelApproved: text('label', 'Approved', 'Approved'),
        colorApproved: select('color', colors, 'green', 'Approved'),
        labelAssigned: text('label', 'Assigned', 'Assigned'),
        colorAssigned: select('color', colors, 'blue', 'Assigned'),
        labelNeedReview: text('label', 'Need Review', 'Need Review'),
        colorNeedReview: select('color', colors, 'light-yellow', 'Need Review'),
        labelNeedFurtherReview: text('label', 'Need Further Review', 'Need Further Review'),
        colorNeedFurtherReview: select('color', colors, 'gray', 'Need Further Review'),
        labelUnassigned: text('label', 'Unassigned', 'Unassigned'),
        colorUnassigned: select('color', colors, 'red', 'Unassigned'),
      },
    };
  });
