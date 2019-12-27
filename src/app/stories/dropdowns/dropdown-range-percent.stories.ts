import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownRangePercentComponent } from '@app/independent-components/dropdown-range-percent/dropdown-range-percent.component';
import { PopupComponent } from '@core/components/popup/popup.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '@shared/buttons/button/button.component';
import { OptionDirective } from '@shared/inputs/input-select/option.directive';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Ng5SliderModule } from 'ng5-slider';

storiesOf('Elements|Dropdowns', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
        DropdownRangePercentComponent,
        ButtonComponent,
        PopupComponent,
        OptionDirective,
      ],
      imports: [
        FontAwesomeModule,
        FormsModule,
        Ng5SliderModule,
        OverlayModule,
        ReactiveFormsModule,
      ],
      entryComponents: [FaIconComponent, PopupComponent]
    })
  )
  .add('Dropdown Range Percent', () => {
    return {
      template: `
        <div class="story">
          <div style="width: 20%; border: 1px solid gray; border-radius: 3px">
            <sw-dropdown-range-percent [disabled]="disabled" (change)="onChange"></sw-dropdown-range-percent>
          </div>
      `,
      props: {
        disabled: boolean('disabled', false),
        onChange: action('onChange'),
      }
    };
  });
