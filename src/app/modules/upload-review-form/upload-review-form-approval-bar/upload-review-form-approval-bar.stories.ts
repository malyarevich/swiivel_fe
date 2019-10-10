import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { UploadReviewFormService  } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  UploadReviewFormApprovalBarComponent
} from '@modules/upload-review-form/upload-review-form-approval-bar/upload-review-form-approval-bar.component';
import { ButtonComponent } from '@shared/buttons/button/button.component';

storiesOf('Upload Review Form', module)
  .addDecorator(
    moduleMetadata({
      declarations: [UploadReviewFormApprovalBarComponent, StatusLabelComponent, IconButtonComponent, ButtonComponent],
      providers: [UploadReviewFormService, HttpClient, HttpHandler]
    })
  )
  .add('Upload Review Form Bar', () => ({
      template: `<app-document-approval-bar [document]="document"></app-document-approval-bar>`,
      props: {
        document: {
          entity_name: 'Name',
          status: 'rejected',
          submission_type: 'online_form',
          person_name: 'SD name Jacobson',
          isSelected: false,
        },
      },
    })
  );
