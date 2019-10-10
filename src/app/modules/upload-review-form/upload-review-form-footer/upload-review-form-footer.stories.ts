import { moduleMetadata, storiesOf } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { ButtonComponent } from '@shared/buttons/button/button.component';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormUploadFooterComponent } from '@modules/upload-review-form/upload-review-form-footer/upload-review-form-footer.component';

const stories = storiesOf('Upload Review Form', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    declarations: [FormUploadFooterComponent, StatusLabelComponent, IconButtonComponent, ButtonComponent],
    providers: [UploadReviewFormService, HttpClient, HttpHandler]
  })
)

const optionsStatus = [
  'approved', 'assigned', 'need_review', 'need_further_review', 'not_started', 'rejected', 'unassigned',
];

stories.add('Upload footer', () => ({
  template: `<app-upload-review-form-footer [documents]="documents"></app-upload-review-form-footer>`,
  props: {
    documents: {
      next_form: {
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
      previous_form: {
        bucketId: 'test_school_bucket',
        content_type: 'application/pdf',
        created_at: '2019-10-08 11:13:16',
        entity_id: '5d8ddc0e8ffb08460b4c2e02',
        entity_name: 'Name Test',
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
        person_name: text('person_name', 'SD name Jacobson Test', 'Previous Form'),
        status: select('Status', optionsStatus, 'approved', 'Previous Form'),
        submission_type: 'online_form',
        updated_at: '2019-10-08 11:13:16',
      }
    },
    documentStudent: ['7'],
    documentAccount: ['6b639da1ef3956c73e1ec79fbc67a2f5']
  },
})
);

