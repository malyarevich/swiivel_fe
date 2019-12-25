import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '@core/components/popup/popup.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { DropdownInputComponent } from '@shared/inputs/dropdown-input/dropdown-input.component';
import { InputSearchComponent } from '@shared/inputs/input-search/input-search.component';
import { UserItemComponent } from '@shared/user-item/user-item.component';

storiesOf('Elements|Inputs/Dropdown', module).addDecorator(withKnobs)
  .addParameters({
    options: {
      selectedPanel: 'actions'
    }
  })
  .addDecorator(
    moduleMetadata({
      declarations: [DropdownInputComponent, UserItemComponent, InputSearchComponent, IconButtonComponent, PopupComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        OverlayModule
      ],
      entryComponents: [PopupComponent, FaIconComponent]
    })
  )
  .add('Dropdown Input', () => {
    return {
      template: `
        <div class="story">
          <div class="title">Simple</div>
          <div style="width: 20%">
            <sw-dropdown-input [options]="options"></sw-dropdown-input>
          </div>
          <div class="title">With Label</div>
          <div style="width: 20%">
            <sw-dropdown-input [options]="options">
              <span class="input_label">Section Width</span>
            </sw-dropdown-input>
          </div>
          <div class="title">Clearable</div>
          <div style="width: 20%">
            <sw-dropdown-input [options]="options" [isClearable]="isClearable">
            </sw-dropdown-input>
          </div>
          <div class="title">With Search</div>
          <div style="width: 20%">
            <sw-dropdown-input [options]="options" [search]="search">
            </sw-dropdown-input>
          </div>
          <div class="title">Multiselect - display values</div>
          <div style="width: 20%">
            <sw-dropdown-input [options]="options" [multiple]="multiple">
            </sw-dropdown-input>
          </div>
          <div class="title">Multiselect - display number of selected values</div>
          <div style="width: 20%">
            <sw-dropdown-input
              [options]="options"
              [multiple]="multiple"
              [isSumDisplay]="isSumDisplay"
              [isDisplaySelected]="isDisplaySelected"
            >
            </sw-dropdown-input>
          </div>
          <div class="title">With sections</div>
          <div style="width: 20%">
            <sw-dropdown-input
              [options]="sectionsOption"
              [multiple]="multiple"
              [isClearable]="isClearable"
              [dropdownSubHeader]="dropdownSubHeader"
              [typeItem] = "typeItem"
            >
              <span class="input_label">Filter by</span>
            </sw-dropdown-input>
          </div>
        </div>
      `,
      props: {
        options: Array({value: 0, title: '1/4 page'}, {value: 1, title: '2/4 page'}, {value: 2, title: '3/4 page'}),
        isClearable: boolean('isClearable', true, 'Clearable'),
        search: boolean('search', true, 'Search'),
        multiple: boolean('multiple', true, 'Multiple'),
        isSumDisplay: boolean('isSumDisplay', true, 'isSumDisplay'),
        isDisplaySelected: boolean('isDisplaySelected', false, 'isDisplaySelected'),
        dropdownSubHeader: boolean('dropdownSubHeader', true, 'dropdownSubHeader'),
        typeItem: text('typeItem', 'purpure'),
        sectionsOption: Object(  {
          documents: {
            title: 'Forms / Documents',
            data: [
              {
                id: '5da72f958ffb080130067e25',
                type: 'document',
                count: 7,
                name: 'First document',
                param: 'documents'
              },
              {
                id: '5da72f958ffb080130067e26',
                type: 'externalForm',
                count: 3,
                name: 'First external form',
                param: 'documents'
              }
            ],
            count: 10,
            param: 'documents'
          },
          status: {
            title: 'Status',
            data: [
              {
                name: 'Unassigned',
                value: 'unassigned',
                param: 'status'
              },
              {
                name: 'Assigned',
                value: 'assigned',
                param: 'status'
              },
            ],
            param: 'status'
          },
          submission_type: {
            title: 'Submission Type',
            data: [
              {
                name: 'Document',
                value: 'document',
                param: 'submission_type'
              },
              {
                name: 'External',
                value: 'externalForm',
                param: 'submission_type'
              },
            ],
            param: 'submission_type'
          }
        })
      }
    }
  })
