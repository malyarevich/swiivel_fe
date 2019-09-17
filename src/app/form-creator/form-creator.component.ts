import { Component, OnInit } from '@angular/core';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {
  workarea;
  sections = [
    {name: 'Packet Introduction', component: SidebarIntroComponent, active: true},
    {name: 'Form Fields', component: SidebarFieldsComponent},
    {name: 'Additional Documents', component: SidebarDocumentsFormsComponent},
    {name: 'CONSENT', component: SidebarConsentComponent},
    {name: 'TUITION CONTRACT', component: SidebarFieldsComponent},
    {name: 'PAYMENT SETTINGS', component: SidebarFieldsComponent},
    {name: 'TERMS AND CONDITIONS', component: SidebarTermsConditionsComponent},
    {name: 'FORM PAYMENT', component: SidebarFieldsComponent},
  ];
  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea: string) {
    this.workarea = workarea;
  }

}
