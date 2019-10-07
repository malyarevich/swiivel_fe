import { ViewChild } from '@angular/core';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperComponent } from './stepper.component';

storiesOf('Stepper', module)
  .addDecorator(
    moduleMetadata({
      declarations: [StepperComponent],
    })
  )
  .add('with header options', () => ({
    template: `
      <sw-stepper [headerOptions]="['general', 'builder', 'review']" #stepper>
        <cdk-step>
          <h1>Step 1</h1>
        </cdk-step>
        <cdk-step>
          <h1>Step 2</h1>
        </cdk-step>
        <cdk-step>
          <h1>Step 3</h1>
        </cdk-step>
      </sw-stepper>`,
    props: {
      headerOptions: ['general', 'builder', 'review'],
    },
  }));
