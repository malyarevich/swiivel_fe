import { OverlayModule } from '@angular/cdk/overlay';
import { PopupComponent } from '@core/components/popup/popup.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownSelectComponent } from '@shared/inputs/dropdown-select/dropdown-select.component';
import { OptionDirective } from '@shared/inputs/input-select/option.directive';
import { PaginatorComponent } from '@shared/paginator/paginator.component';
import { action } from '@storybook/addon-actions';
import { number, object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Elements', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
        PaginatorComponent,
        DropdownSelectComponent,
        OptionDirective,
        PopupComponent,
      ],
      imports: [OverlayModule, FontAwesomeModule],
      entryComponents: [FaIconComponent, PopupComponent],
    })
  )
  .add('Pagination', () => {
    return {
      template: `
        <div class="story">
          <sw-paginator
            [index]="index"
            [size]="size"
            [sizeOptions]="sizeOptions"
          ></sw-paginator>
        </div>
      `,
      props: {
        index: number('index', 1),
        size: number('size', 250),
        sizeOptions: object('sizeOptions', [10, 20, 50, 100]),
        pageChange: action('onChange'),
      },
    };
  });
