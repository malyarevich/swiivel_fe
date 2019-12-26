import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';

import { OverlayModule } from '@angular/cdk/overlay';
import { InputEnglishDatepickerComponent } from '@app/independent-components/input-english-datepicker/input-english-datepicker.component';
import { InputMaskTextComponent } from '@app/independent-components/input-mask-text/input-mask-text.component';
import { PopupComponent } from '@core/components/popup/popup.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '@shared/buttons/button/button.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { DropdownSelectYearComponent } from '@shared/inputs/dropdow-select-year/dropdown-select-year.component';
import { DropdownInputComponent } from '@shared/inputs/dropdown-input/dropdown-input.component';
import { InputSearchComponent } from '@shared/inputs/input-search/input-search.component';
import { UserItemComponent } from '@shared/user-item/user-item.component';
import { action } from '@storybook/addon-actions';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IConfig, NgxMaskModule} from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

storiesOf('Elements|Inputs/Datepicker', module).addDecorator(withKnobs)
  .addParameters({
    options: {
      selectedPanel: 'actions'
    }
  })
  .addDecorator(
    moduleMetadata({
      declarations: [
        InputEnglishDatepickerComponent,
        DropdownInputComponent,
        DropdownSelectYearComponent,
        ButtonComponent,
        InputMaskTextComponent,
        UserItemComponent,
        InputSearchComponent,
        IconButtonComponent,
        PopupComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule, CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
      }), FontAwesomeModule, OverlayModule, NgxMaskModule.forRoot(options)],
      entryComponents: [FaIconComponent, PopupComponent],
    })
  )
  .add('English datepicker', () => {
    return {
      component: InputEnglishDatepickerComponent,
      template: `
        <div class="story">
          <div style="width: 20%">
            <div class="title">Date</div>
            <sw-input-english-datepickerdeds></sw-input-english-datepickerdeds>
          </div>
          <div style="width: 20%">
            <div class="title">Date from - Date To</div>
            <sw-input-english-datepicker [range]="true"></sw-input-english-datepicker>
          </div>
        </div>
      `,
      props: {
        onChange: action('onChange'),
      }
    };
  });
