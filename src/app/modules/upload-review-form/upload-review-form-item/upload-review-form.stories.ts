import { storiesOf, moduleMetadata } from '@storybook/angular';
import { UploadFormReviewItemComponent } from '@modules/upload-review-form/upload-review-form-item/upload-review-form-item.component';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { UploadReviewFormService  } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

storiesOf('Upload Review Form', module)
  .addDecorator(
    moduleMetadata({
      declarations: [UploadFormReviewItemComponent, StatusLabelComponent, IconButtonComponent],
      providers: [UploadReviewFormService, HttpClient, HttpHandler]
    })
  )
  .add('Upload item - Online Form', () => ({
    template: `<app-upload-review-form-item [document]="document"></app-upload-review-form-item>`,
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
