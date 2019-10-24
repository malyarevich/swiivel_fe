import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { UploadReviewFormService  } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  UploadReviewFormApprovalBarComponent
} from '@modules/upload-review-form/upload-review-form-approval-bar/upload-review-form-approval-bar.component';
import { SharedModule } from '@shared/shared.module';

const stories = storiesOf('Upload Review Form', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    imports: [SharedModule],
    declarations: [UploadReviewFormApprovalBarComponent],
    providers: [UploadReviewFormService, HttpClient, HttpHandler]
  })
);

const optionsStatus = [
  'approved', 'assigned', 'need_review', 'need_further_review', 'not_started', 'rejected', 'unassigned',
];

stories.add('Upload Review Form Bar', () => ({
    template: `<app-document-approval-bar [document]="document"></app-document-approval-bar>`,
    props: {
      document: {
        entity_name: 'Name',
        status: select('Status', optionsStatus, 'rejected'),
        submission_type: 'online_form',
        person_name: text('person_name', 'Ari Jacobson'),
        isSelected: false,
      },
    },
  })
);
