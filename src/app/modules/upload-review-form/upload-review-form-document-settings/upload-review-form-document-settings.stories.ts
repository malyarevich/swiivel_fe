import { moduleMetadata, storiesOf } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UploadReviewFormDocumentSettingsComponent } from './upload-review-form-document.component-settings';
import { DropdownInputComponent } from '@shared/inputs/dropdown-input/dropdown-input.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const stories = storiesOf('Upload Review Form', module);

stories.addDecorator(withKnobs);
// @ts-ignore
stories.addDecorator(
  moduleMetadata({
    declarations: [UploadReviewFormDocumentSettingsComponent, DropdownInputComponent, IconButtonComponent],
    providers: [UploadReviewFormService, HttpClient, HttpHandler, FormsModule, ReactiveFormsModule]
  })
)

const optionsStatus = [
  'approved', 'assigned', 'need_review', 'need_further_review', 'not_started', 'rejected', 'unassigned',
];

stories.add('Upload Settings', () => ({
  template: `<app-upload-review-form-document-settings [document]='documents' [documentTypes]="documentTypes" [documentFamilies]="documentFamilies"></app-upload-review-form-document-settings>`,
  props: {
    document: {
        bucketId: 'test_school_bucket',
        content_type: 'application/pdf',
        created_at: '2019-10-08 11:13:16',
        entity_id: '5d8ddc0e8ffb08460b4c2e02',
        entity_name: 'Name',
        entity_type: 'App\Models\Forms\Document',
        family_id: '6b639da1ef3956c73e1ec79fbc67a2f5',
        file_name: 'document5d9c6f4c36569.pdf',
        file_origin_name: 'form-5d81c52e8ffb083b6937dc42.pdf',
        form_id: '5d8ddc0e8ffb08460b4c2e02',
        form_template_id: '5d8ddbd18ffb084d2b466827',
        hash: 'document5d9c6f4c36569',
        isSelected: false,
        link: 'http://34.73.126.99/api/v1/forms/file?api_token=123&objectId=Test12_15/Jacobson_7/document/document5d9c6f4c36569.pdf&bucketId=test_school_bucket',
        objectId: 'Test12_15/Jacobson_7/document/document5d9c6f4c36569.pdf',
        person_id: '7',
        person_name: text('person_name', 'SD name Jacobson', 'Next Form'),
        status: select('Status', optionsStatus, 'needs_review', 'Next Form'),
        submission_type: 'online_form',
        updated_at: '2019-10-08 11:13:16',
      },
    documentTypes: [
      {
        title: 'Birth Certificate',
        type: 'document',
        value: '5d9f0ffd8ffb080824341fb2',
      }, {
        title: 'A doctors note',
        type: 'document',
        value: '5d9f0ffd8ffb080824341fb3',
      } , {
        title: 'Download document',
        type: 'document',
        value: '5d9f3e798ffb080824341fb8'
      }
    ],
    documentFamilies: [
      {
        students: [
          {title: 'Adam Doe', value: 121},
          {title: 'David Fishman', value: 123},
          {title: 'Aaron Fishman', value: 124},
          {title: 'Alex Fishman', value: 125},
        ],
        title: 'Fishman Family',
        value: 'a062c544a27f2c14f3e83f66efb81c59',
      }, {
        students: [
        {title: 'Atara Fishman', value: 2}
        ],
        title: 'Kim family',
        value: '2a95908e1b3c43fbff4eea8a130b311c',
      }, {
        students: [
        {title: '1612 S first 1612 SL', value: 114}
        ],
        title: 'Dev',
        value: '756d6840199d9146cdafb1409c402299'
      }, {
        students: [
          {title: 'David Fishman', value: 123}
        ],
        title: 'ex-Fishman',
        value: '56faf92ce7648e3a7aadb07328b44e05'
      }
    ]
  },
})
);

