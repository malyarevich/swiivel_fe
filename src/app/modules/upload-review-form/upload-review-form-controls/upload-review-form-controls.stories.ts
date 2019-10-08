import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StatusLabelComponent } from '@shared/labels/status-label/status-label.component';
import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';
import { UploadReviewFormService  } from '@modules/upload-review-form/upload-review-form.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  UploadReviewFormControlsComponent
} from '@modules/upload-review-form/upload-review-form-controls/upload-review-form-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

storiesOf('Upload Review Form', module)
  .addDecorator(
    moduleMetadata({
      imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
      declarations: [UploadReviewFormControlsComponent, StatusLabelComponent, IconButtonComponent],
      providers: [UploadReviewFormService, HttpClient, HttpHandler]
    })
  )
  .add('Upload list control', () => ({
    template: `<app-review-form-controls [activeIdForm]="activeIdForm" [documentAccount]="documentAccount" [documentStudent]="documentStudent" [documentTypes]="documentTypes"></app-review-form-controls>`,
    props: {
      activeIdForm: '5d8ddc0e8ffb08460b4c2e02',
      documentTypes: ['document'],
      documentStudent: ['7'],
      documentAccount: ['6b639da1ef3956c73e1ec79fbc67a2f5']
    },
  })
  );

