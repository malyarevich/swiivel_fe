import { storiesOf, moduleMetadata } from '@storybook/angular';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { UploadReviewFormService  } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  UploadReviewFormApprovalBarComponent
} from '@modules/upload-review-form/upload-review-form-approval-bar/upload-review-form-approval-bar.component';
import { ButtonComponent } from '@shared/buttons/button/button.component';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';

const stories = storiesOf('Upload Review Form', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    declarations: [UploadReviewFormApprovalBarComponent, StatusLabelComponent, IconButtonComponent, ButtonComponent, SpinnerComponent],
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
