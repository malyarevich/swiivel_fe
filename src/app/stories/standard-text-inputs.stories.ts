import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { InputTextComponent } from '@app/shared/inputs/input-text/input-text.component';
import { ErrorsComponent } from '@app/shared/utils/errors/errors.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Elements|Inputs/Text', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
        InputTextComponent,
        ErrorsComponent
      ],
      imports: [
        // CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
      ],
    })
  )
  .add('Search', () => {
    return {
      component: [InputTextComponent],
      template: `
        <form [formGroup]="fg">
          <h3>Text Input / Search / Default</h3>
          <sw-input-text
            class="search"
            formControlName="inputText1">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>label: none</li>
            <li>placeholder: none</li>
          </ul>

          <h3>Text Input / Search / Label + Placeholder</h3>
          <sw-input-text
            class="search"
            [customErrors]="customErrors2"
            formControlName="inputText2"
            label="Label 2"
            placeholder="Placeholder 2">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>placeholder: "Placeholder 2"</li>
            <li>label: "Label 2"</li>
            <li>customErrors: string</li>
            <li>(required)</li>
          </ul>

          <h3>Text Input / Search / Not Valid</h3>
          <sw-input-text
            class="search"
            [customErrors]="customErrors3"
            formControlName="inputText3"
            label="Label 3">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>customErrors: string[]</li>
            <li>label: "Label 3"</li>
            <li>placeholder: none</li>
            <li>(required)</li>
          </ul>
        </form>
      `,
      props: {
        fg: new FormGroup({
          inputText1: new FormControl(''),
          inputText2: new FormControl('', Validators.required),
          inputText3: new FormControl('Default Value', Validators.required)
        }),
        customErrors2: 'customErrors2',
        customErrors3: ['customErrors3', 'customErrors3a', 'customErrors3b']
      }
    };
  })
  .add('Default', () => {
    return {
      component: [InputTextComponent],
      template: `
        <form [formGroup]="fg">
          <h3>Text Input / Default </h3>
          <sw-input-text
            formControlName="inputText1">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: none</li>
            <li>label: none</li>
            <li>placeholder: none</li>
          </ul>

          <h3>Text Input / Default / Placeholder</h3>
          <sw-input-text
            formControlName="inputText2"
            placeholder="Placeholder 2">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>label: none</li>
            <li>placeholder: "Placeholder 2"</li>
            <li>iconName: none</li>
          </ul>

          <h3>Text Input / Default / Icon + Label</h3>
          <sw-input-text
            formControlName="inputText3"
            iconName="build"
            label="Label 3">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>label: "Label 3"</li>
            <li>placeholder: none</li>
            <li>iconName: "build"</li>
            <li>defaultValue: "Default Value"</li>
            <li>(required)</li>
          </ul>

          <h3>Text Input / Default / Icon + Placeholder</h3>
          <sw-input-text
            formControlName="inputText4"
            iconName="color-picker-off"
            placeholder="Placeholder 4"
            [customErrors]="customErrors4">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: "color-picker-off"</li>
            <li>label: none</li>
            <li>placeholder: "Placeholder 4"</li>
            <li>customErrors: string</li>
            <li>(required, minLength(2), maxLength(3))</li>
          </ul>

          <h3>Text Input / Default / Label + Placeholder </h3>
          <sw-input-text
            [customErrors]="customErrors5"
            formControlName="inputText5"
            label="Label 5"
            placeholder="Placeholder 5">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>customErrors: string[]</li>
            <li>iconName: "build"</li>
            <li>label: "Label 5"</li>
            <li>placeholder: "Placeholder 5"</li>
            <li>(required, minLength(99))</li>
          </ul>

          <h3>Text Input / Default / Icon + Label + Placeholder </h3>
          <sw-input-text
            formControlName="inputText6"
            iconName="build"
            label="Label 6"
            placeholder="Placeholder 6">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: "build"</li>
            <li>label: "Label 6"</li>
            <li>placeholder: "Placeholder 6"</li>
            <li>(required, minLength(99))</li>
          </ul>
        </form>
      `,
      props: {
        fg: new FormGroup({
          inputText1: new FormControl(''),
          inputText2: new FormControl(''),
          inputText3: new FormControl('Default Value', Validators.required),
          inputText4: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
          inputText5: new FormControl('', [Validators.required, Validators.minLength(99)]),
          inputText6: new FormControl('', [Validators.required, Validators.minLength(99)]),
        }),
        customErrors4: 'customErrors4',
        customErrors5: ['customErrors5', 'customErrors5a', 'customErrors5b']
      }
    };
  })
  .add('Standard', () => {
    return {
      component: [InputTextComponent],
      template: `
        <a href="https://whichiscorrect.com/standard-vs-standart/">Standard vs Standart</a>
        <form [formGroup]="fg">
          <h3>Text Input / Standard </h3>
          <sw-input-text
            class="standard"
            formControlName="inputText1">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: none</li>
            <li>label: none</li>
            <li>placeholder: none</li>
          </ul>

          <h3>Text Input / Standard / Placeholder</h3>
          <sw-input-text
            class="standard"
            formControlName="inputText2"
            placeholder="Placeholder 2">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>label: none</li>
            <li>placeholder: "Placeholder 2"</li>
            <li>iconName: none</li>
          </ul>

          <h3>Text Input / Standard / Icon + Label</h3>
          <sw-input-text
            class="standard"
            formControlName="inputText3"
            iconName="build"
            label="Label 3">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>label: "Label 3"</li>
            <li>placeholder: none</li>
            <li>iconName: "build"</li>
            <li>defaultValue: "Default Value"</li>
            <li>(required)</li>
          </ul>

          <h3>Text Input / Standard / Icon + Placeholder</h3>
          <sw-input-text
            class="standard"
            formControlName="inputText4"
            iconName="color-picker-off"
            placeholder="Placeholder 4"
            [customErrors]="customErrors4">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: "color-picker-off"</li>
            <li>label: none</li>
            <li>placeholder: "Placeholder 4"</li>
            <li>customErrors: string</li>
            <li>(required, minLength(2), maxLength(3))</li>
          </ul>

          <h3>Text Input / Standard / Label + Placeholder </h3>
          <sw-input-text
            class="standard"
            [customErrors]="customErrors5"
            formControlName="inputText5"
            label="Label 5"
            placeholder="Placeholder 5">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>customErrors: string[]</li>
            <li>iconName: "build"</li>
            <li>label: "Label 5"</li>
            <li>placeholder: "Placeholder 5"</li>
            <li>(required, minLength(99))</li>
          </ul>

          <h3>Text Input / Standard / Icon + Label + Placeholder </h3>
          <sw-input-text
            class="standard"
            formControlName="inputText6"
            iconName="build"
            label="Label 6"
            placeholder="Placeholder 6">
          </sw-input-text>
          <span>Params:</span>
          <ul>
            <li>iconName: "build"</li>
            <li>label: "Label 6"</li>
            <li>placeholder: "Placeholder 6"</li>
            <li>(required, minLength(99))</li>
          </ul>
        </form>
      `,
      props: {
        fg: new FormGroup({
          inputText1: new FormControl(''),
          inputText2: new FormControl('', Validators.required),
          inputText3: new FormControl('Default Value', Validators.required),
          inputText4: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
          inputText5: new FormControl('', [Validators.required, Validators.minLength(99)]),
          inputText6: new FormControl('', [Validators.required, Validators.minLength(99)]),
        }),
        customErrors4: 'customErrors4',
        customErrors5: ['customErrors5', 'customErrors5a', 'customErrors5b']
      }
    };
  });
