import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'sw-form-creator-workarea-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class WorkareaConsentComponent {
  public colors = ColorsEnum;
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

  constructor() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.consentForms, event.previousIndex, event.currentIndex);
  }

  changeIsShown(evt: boolean): void {
    this.isShown = evt;
  }

}
