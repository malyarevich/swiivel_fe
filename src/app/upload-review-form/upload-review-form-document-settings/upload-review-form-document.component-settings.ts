import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Document } from '@models/upload-review-form/document.model';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-upload-review-form-document-settings',
  templateUrl: './upload-review-form-document-settings.component.html',
  styleUrls: ['./upload-review-form-document-settings.component.scss'],
})

export class UploadReviewFormDocumentSettingsComponent implements OnChanges {
  public form: FormGroup;
  public icons = IconsEnum;
  public isSettingsOpen = true;
  public students = [];

  @Input() documentTypes = [];
  @Input() documentFamilies = [];
  @Input() document: Document;
  @Input() isSave: boolean;

  @Output() updateDocumentSettings = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: new FormControl([], Validators.required),
      account: new FormControl([], Validators.required),
      student: new FormControl([], Validators.required)
    });

    this.form.controls.account.valueChanges.subscribe(value => {
      if (value.length && value[0]) {
        this.students = value[0].students;
      }
      this.form.patchValue({ student: [null] });
    });

    this.form.valueChanges.subscribe(values => {
      if (values.type[0] && values.type[0].value &&
        values.account[0] && values.account[0].value &&
        values.student[0] && values.student[0].value) {

        if (this.document.entity_id !== values.type[0].value ||
          this.document.family_id !== values.account[0].value ||
          parseInt(this.document.person_id, 10) !== values.student[0].value) {

          this.updateDocumentSettings.emit({
            entity_id: values.type[0].value,
            entity_type: values.type[0].type,
            family_id: values.account[0].value,
            person_id: values.student[0].value,
          });
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.document && JSON.stringify(changes.document.currentValue) !== JSON.stringify(changes.document.previousValue)) {
      const document = changes.document.currentValue;
      this.setDocument(document);
    }

    if (changes.isSave && changes.isSave.previousValue === true) {
      this.setDocument(this.document);
    }
  }

  setDocument(document: Document): void {
    let type = [null];
    let account = [null];
    let student = [];

    if (document) {
      if (document.entity_id) {
        type = this.documentTypes.filter(value => value.value === document.entity_id);
      }

      if (document.family_id) {
        account = this.documentFamilies.filter(value => value.value === document.family_id);
      }

      if (document.person_id) {
        student = account[0].students.filter(value => value.value === parseInt(document.person_id, 10));
      }
    }

    this.form.patchValue({ type, account, student });
  }

  changeFormState(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }
}
