import { Component, OnInit } from '@angular/core';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  workarea: string;
  sections = [
    {name: 'Packet Introduction', component: SidebarIntroComponent, active: true, expanded: true},
    {name: 'Form Fields', component: SidebarFieldsComponent, active: false, expanded: false},
    {name: 'Additional Documents', component: SidebarDocumentsFormsComponent, active: false, expanded: false},
    {name: 'CONSENT', component: SidebarConsentComponent, active: false, expanded: false},
    {name: 'TUITION CONTRACT', component: SidebarFieldsComponent, active: false, expanded: false},
    {name: 'PAYMENT SETTINGS', component: SidebarFieldsComponent, active: false, expanded: false},
    {name: 'TERMS AND CONDITIONS', component: SidebarTermsConditionsComponent, active: false, expanded: false},
    {name: 'FORM PAYMENT', component: SidebarFieldsComponent, active: false, expanded: false},
  ];

  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea: string) {
    this.workarea = workarea;
  }

}
