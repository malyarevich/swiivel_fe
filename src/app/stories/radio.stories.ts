import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { InputRadioComponent } from '@app/shared/inputs/input-radio/input-radio.component';
import { RadioGroupComponent } from '@app/shared/inputs/input-radio/input-group.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FigmaDirective } from './figma.directive';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@app/core/http.service';


storiesOf('Elements|Inputs/Radio button', module).addDecorator(withKnobs)
  .addParameters({
    options: {
      selectedPanel: 'actions'
    }
  })
  .addDecorator(
    moduleMetadata({
      declarations: [InputRadioComponent, RadioGroupComponent, FigmaDirective],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [HttpService]
    })
  )
  .add('Simple', () => {
    return {
      template: `
        <input type="radio" checked (change)="onChange($event)" swFigmaId="164:149"/>
        <input type="radio" (change)="onChange($event)" swFigmaId="164:150"/>
        <input type="radio" checked disabled swFigmaId="3375:3389"/>
        <input type="radio" disabled swFigmaId="3375:3393"/>
      `,
      props: {
        onChange: action('onChange'),
      }
    }
  })
  .add('With Text', () => {
    return {
      template: `
      <div class="story">
        <div class="col">
          <sw-radio-group [formControl]="enabledControl" name="enabled" (change)="onChange($event)">
            <sw-input-radio checked [value]="true" style="margin-right: 15px" swFigmaId="164:156">{{activeText}}</sw-input-radio>
            <sw-input-radio [value]="false" swFigmaId="164:171">{{inactiveText}}</sw-input-radio>
          </sw-radio-group>
        </div>
        <div class="col">
          <sw-radio-group name="disabled" disabled>
            <sw-input-radio checked [value]="true" style="margin-right: 15px" >{{disabledCheckedText}}</sw-input-radio>
            <sw-input-radio [value]="false">{{disabledText}}</sw-input-radio>
          </sw-radio-group>
        </div>
      </div>
      `,
      props: {
        enabledControl: new FormControl(true),
        activeText: text('activeText', 'Active'),
        inactiveText: text('inactiveText', 'Inactive'),
        disabledText: text('disabledText', 'Disabled'),
        disabledCheckedText: text('disabledCheckedText', 'Disabled inactive'),
        onChange: action('onChange'),
      }
    }
  })
