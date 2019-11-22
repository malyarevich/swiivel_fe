import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
  isContentShown: boolean = true;
  public widthOption = ['4 columns', '3 columns', '2 columns', '1 column'].map(t => ({ title: t }));
  public popupDisplay = false;

  @Input()
  set form(_form: any) {
    console.log('INPUT FORM', _form)
    this.lform = _form.get('consentInfo');
  }

  constructor(private fb: FormBuilder) {
    this.lform = this.fb.group({
      sectionName: ["Consent Section"],
      sectionWidth: ["full"],
      consents: this.fb.array([])
    });
  }

  get consents() {
    return this.lform.get('consents') as FormArray
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray((this.lform.get('consents') as FormArray).value, event.previousIndex, event.currentIndex);
  }

  changeIsShown(evt: boolean): void {
    this.isShown = evt;
  }

  changeIsContentShown(): void {
    this.isContentShown = !this.isContentShown;
  }

}
