import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreatorComponent implements OnInit {

  workarea: string;
  sections = [
    {name: 'Packet Introduction', workarea: 'intro', component: SidebarIntroComponent, active: true, expanded: true},
    {name: 'Form Fields', workarea: 'fields', component: SidebarFieldsComponent, active: false, expanded: false},
    {name: 'Additional Documents', workarea: 'addDocs', component: SidebarDocumentsFormsComponent, active: false, expanded: false},
    {name: 'CONSENT', workarea: 'consent', component: SidebarConsentComponent, active: false, expanded: false},
    {name: 'TUITION CONTRACT', workarea: '', component: null, active: false, expanded: false},
    {name: 'PAYMENT SETTINGS', workarea: '', component: null, active: false, expanded: false},
    {name: 'TERMS AND CONDITIONS', workarea: 'tac', component: SidebarTermsConditionsComponent, active: false, expanded: false},
    {name: 'FORM PAYMENT', workarea: '', component: null, active: false, expanded: false},
  ];

  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea: string) {
    this.workarea = workarea;
  }

}
