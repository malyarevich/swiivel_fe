import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import figmaDecorator from 'storybook-addon-figma'
import { InputRadioComponent } from '@app/shared/inputs/input-radio/input-radio.component';
import { RadioGroupComponent } from '@app/shared/inputs/input-radio/input-group.component';
import { FormControl } from '@angular/forms';


storiesOf('Elements|Inputs/Radio button', module).addDecorator(withKnobs)
  .addParameters({
    options: {
      selectedPanel: 'actions'
    }
  })
  .addDecorator(
    moduleMetadata({
      declarations: [InputRadioComponent, RadioGroupComponent]
    })
  )
  .addDecorator(
    figmaDecorator({
      embedHost: 'localhost',
      url: 'https://www.figma.com/file/RTfgqP4XAlyiNs0CIypGWhxF/Edminify-Design-Components-Library?node-id=2138%3A293'
    })
  )
  .add('Simple', () => {
    return {
      template: `
        <input type="radio" checked (change)="onChange($event)"/>
        <input type="radio" (change)="onChange($event)"/>
        <input type="radio" checked disabled/>
        <input type="radio" disabled/>
      `,
      props: {
        onChange: action('onChange'),
      }
    }
  })
  .add('With Text', () => {
    return {
      template: `
      <sw-radio-group [formControl]="enabledControl" name="enabled" (change)="onChange($event)">
        <sw-input-radio checked [value]="true">{{activeText}}</sw-input-radio>
        <sw-input-radio [value]="false">{{inactiveText}}</sw-input-radio>
      </sw-radio-group>
      <sw-radio-group name="disabled" disabled>
        <sw-input-radio [value]="true" checked>{{disabledCheckedText}}</sw-input-radio>
        <sw-input-radio [value]="false">{{disabledText}}</sw-input-radio>
      </sw-radio-group>
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
