import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '@app/models/data-collection/form';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from '../models/menu.model';

@Component({
  selector: 'sw-online-form-documents-forms',
  templateUrl: './online-form-documents-forms.component.html',
  styleUrls: ['./online-form-documents-forms.component.scss']
})
export class OnlineFormDocumentsFormsComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: any;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  percent: number;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  sections: object[];

  activeSectionId: string;

  constructor() {}

  ngOnInit() {}

  isDocumentsTab(): boolean {
    return this.currentPosition.tab === 0;
  }

  isExternalTab(): boolean {
    return this.currentPosition.tab === 1;
  }
}
