import { Component } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'sw-form-creator-workarea-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})

export class WorkareaTermsConditionComponent {
  public colors = ColorsEnum;
  public isShown = true;
  public textarea = {
    rows: 5,
    cols: undefined,
    editable: true
  };

  forms = [
    {
      documentName: 'text',
      text: '',
      isBothParentsSignature: false,
      checkBox: {
        isShown: false,
        text: null
      }
    },
    {
      documentName: '',
      text: '',
      isBothParentsSignature: true,
      checkBox: {
        isShown: true,
        text: 'checkbox text'
      }
    }
  ];

  constructor() {
  }

  changeIsShown(evt: boolean): void {
    this.isShown = evt;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.forms, event.previousIndex, event.currentIndex);
  }
}
