import { OverlayModule } from '@angular/cdk/overlay';
import { PopupComponent } from '@core/components/popup/popup.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { boolean, object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/buttons/button/button.component';
import { DropdownSelectComponent } from '@shared/inputs/dropdown-select/dropdown-select.component';
import { OptionDirective } from '@shared/inputs/input-select/option.directive';
import { action } from '@storybook/addon-actions';

storiesOf('Elements|Inputs/Dropdown', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
        DropdownSelectComponent,
        ButtonComponent,
        PopupComponent,
        OptionDirective,
      ],
      imports: [
        FontAwesomeModule,
        OverlayModule,
      ],
      entryComponents: [FaIconComponent, PopupComponent]
    })
  )
  .add('Dropdown Select', () => {
    return {
      template: `
        <div class="story">
          <div style="width: 20%">
             <sw-dropdown-select
                #bulk="dropdown"
                [disabled]="disabled"
                [noneColor]="noneColor"
                [options]="options"
                (selected)="selected"
              >
                <sw-button [icon]="icon" class="huge right-icn" [disabled]="disabled">
                  Dropdown Select
                </sw-button>
              </sw-dropdown-select>
          </div>
      `,
      props: {
        icon: faChevronDown,
        disabled: boolean('disabled', false),
        noneColor: boolean('noneColor', true),
        options: object('options', ['Share', 'Export PDF', 'Archive']),
        selected: action('selected'),
      }
    };
  });
