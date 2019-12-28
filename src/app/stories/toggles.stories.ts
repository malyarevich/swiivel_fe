import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { InputToggleComponent } from '@app/shared/inputs/input-toggle/input-toggle.component';
// import { SharedModule } from '@app/shared/shared.module';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
// import figmaDecorator from 'storybook-addon-figma';

storiesOf('Elements|Inputs/Toggles', module).addDecorator(withKnobs)
  // .addParameters({
  //   options: {
  //     selectedPanel: 'actions'
  //   }
  // })
  .addDecorator(
    moduleMetadata({
      declarations: [
        InputToggleComponent
      ],
      imports: [
        // CommonModule,
        ReactiveFormsModule
      ],
    })
  )
  // .addDecorator(
  //   figmaDecorator({
  //     embedHost: 'localhost',
  //     url: 'https://www.figma.com/file/RTfgqP4XAlyiNs0CIypGWhxF/Edminify-Design-Components-Library?node-id=2608%3A5'
  //   })
  // )
  .add('Simple', () => {
    return {
      component: [InputToggleComponent],
      template: `
        <form [formGroup]="fg">
          <h3>Active</h3>
          <sw-input-toggle formControlName="inputToggle1"></sw-input-toggle>
          <span>Params:</span>
          <ul>
            <li>active: FormControl(true)</li>
          </ul>

          <h3>Inactive</h3>
          <sw-input-toggle formControlName="inputToggle2"></sw-input-toggle>
          <span>Params:</span>
          <ul>
            <li>active: FormControl(false)</li>
          </ul>
        </form>
      `,
      props: {
        fg: new FormGroup({
          inputToggle1: new FormControl(true),
          inputToggle2: new FormControl(false)
        })
      }
    };
  })
  .add('With Text', () => {
    return {
      component: [InputToggleComponent],
      template: `
        <form [formGroup]="fg">
          <h3>Active</h3>
          <sw-input-toggle formControlName="inputToggle1" (click)="onClick('packetIntroduction', $event)">
            <span span>{{ text1 }}</span>
          </sw-input-toggle>
          <span>Params:</span>
          <ul>
            <li>active: FormControl(true)</li>
            <li>nesting: &lt;span span&gt;{{ text1 }}&lt;/span&gt;</li>
          </ul>

          <h3>Inactive</h3>
          <sw-input-toggle formControlName="inputToggle2">
            <span span>{{ text2 }}</span>
          </sw-input-toggle>
          <span>Params:</span>
          <ul>
            <li>active: FormControl(false)</li>
            <li>nesting: &lt;span span&gt;{{ text2 }}&lt;/span&gt;</li>
          </ul>
        </form>
      `,
      props: {
        fg: new FormGroup({
          inputToggle1: new FormControl(true),
          inputToggle2: new FormControl(false)
        }),
        text1: 'Toggled text 1',
        text2: 'Toggled text 2',
      }
    };
  });
