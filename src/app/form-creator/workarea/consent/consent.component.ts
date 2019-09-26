import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorsEnum } from '@shared/colors.enum';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-creator-workarea-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class WorkareaConsentComponent {
  public form: FormGroup;
  public icons = IconsEnum;
  public colors = ColorsEnum;
  public isShown = true;
  public widthOption = ['4 columns', '3 columns', '2 columns', '1 column'].map(t => ({ title: t }));
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

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
      sectionName: new FormControl('Paren Consent', Validators.required),
      sectionWidth: new FormControl([]),
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.consentForms, event.previousIndex, event.currentIndex);
  }

  changeIsShown(): void {
    this.isShown = !this.isShown;
  }

}
