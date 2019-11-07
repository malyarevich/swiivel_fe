import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IconsEnum } from '@app/shared/icons.enum';

@Component({
  selector: 'sw-form-creator-workarea-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class WorkareaConsentComponent {
  public isShown = true;
  public textarea = {
    rows: 5,
    cols: undefined,
    editable: true
  };
  consentForms = [
    {
      documentName: 'text',
      text: '',
      isBothParentsSignature: true,
      checkBox: {
        isShown: false,
        text: null
      },
      button: {
        isShown: false,
        text: 'Button'
      }
    },
    {
      documentName: '',
      text: '',
      isBothParentsSignature: false,
      checkBox: {
        isShown: true,
        text: 'checkbox text'
      },
      button: {
        isShown: true,
        text: 'Button'
      }
    }
  ];
  icons = IconsEnum;
  lform: FormGroup;
  isContentShown: boolean;

  @Input()
  set form(_form: any) {
    this.lform = _form.get('consentInfo');
  }

  constructor(private fb: FormBuilder) {
    this.lform = this.fb.group({
      sectionName: ["Consent Section"],
      sectionWidth: ["full"],
      consents: [[]]
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.consentForms, event.previousIndex, event.currentIndex);
  }

  changeIsShown(evt: boolean): void {
    this.isShown = evt;
  }

  changeIsContentShown(): void {
    this.isContentShown = !this.isContentShown;
  }

}
