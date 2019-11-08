import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconsEnum } from '@app/shared/icons.enum';

@Component({
  selector: 'sw-form-creator-workarea-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})

export class WorkareaTermsConditionComponent {
  public isShown = true;
  public textarea = {
    rows: 5,
    cols: undefined,
    editable: true
  };
  public lform: FormGroup;
  public icons = IconsEnum;
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
  isContentShown: boolean = true;

  @Input()
  set form(_form: any) {
    this.lform = _form.get('termsConditions');
    this.cdr.markForCheck();
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.lform = this.fb.group({
      sectionName: ["Terms and Conditions"],
      sectionWidth: ["full"],
      signature: this.fb.group({
        eType: ["system"],
        isBothParents: [false],
        isRequire: [true],
        signed: {parents: false, fathers: false, mothers: false},
        type: "esign",
      }),
      termsConditionsItems: [[]]
    });
  }

  changeIsShown(evt: boolean): void {
    this.isShown = evt;
  }

  changeIsContentShown(): void {
    this.isContentShown = !this.isContentShown;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.forms, event.previousIndex, event.currentIndex);
  }
}
