import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// import figmaDecorator from 'storybook-addon-figma'
import { InputCheckboxComponent } from '@app/shared/inputs/input-checkbox/input-checkbox.component';


storiesOf('Elements|Inputs/Checkbox', module).addDecorator(withKnobs)
  .addParameters({
    options: {
      selectedPanel: 'actions'
    }
  })
  .addDecorator(
    moduleMetadata({
      declarations: [InputCheckboxComponent]
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
      template: `
        <input type="checkbox" checked disabled/>
        <sw-input-checkbox checked="true" (change)="onChange($event)"></sw-input-checkbox>
        <sw-input-checkbox checked="false" (change)="onChange($event)"></sw-input-checkbox>
        <sw-input-checkbox indeterminate="true" (change)="onChange($event)"></sw-input-checkbox>
        <sw-input-checkbox disabled (change)="onChange($event)"></sw-input-checkbox>
        <sw-input-checkbox checked="true" disabled (change)="onChange($event)"></sw-input-checkbox>
      `,
      props: {
        onChange: action('onChange'),
      }
    }
  })
  .add('With Text', () => {
    return {
      template: `
        <sw-input-checkbox checked="true" (change)="onChange($event)">{{activeText}}</sw-input-checkbox>
        <sw-input-checkbox checked="false" (change)="onChange($event)">{{inactiveText}}</sw-input-checkbox>
        <sw-input-checkbox [indeterminate]="indeterminate" (change)="onChange($event)">{{indeterminateText}}</sw-input-checkbox>
        <sw-input-checkbox disabled (change)="onChange($event)">{{disabledText}}</sw-input-checkbox>
        <sw-input-checkbox checked="true" disabled (change)="onChange($event)">{{disabledText}}</sw-input-checkbox>
      `,
      props: {
        activeText: text('activeText', 'Active'),
        inactiveText: text('inactiveText', 'Inactive'),
        indeterminateText: text('indeterminateText', 'Indeterminate'),
        indeterminate: boolean('indeterminate', true),
        disabledText: text('disabledText', 'Disabled'),
        onChange: action('onChange'),
      }
    }
  })
