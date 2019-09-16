import { Component, OnInit } from '@angular/core';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { DocumentsFormsComponent } from './sidebar/documents-forms.component';

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
    {name: 'Additional Documents', component: DocumentsFormsComponent},
    {name: 'CONSENT', component: SidebarFieldsComponent},
    {name: 'TUITION CONTRACT', component: SidebarFieldsComponent},
    {name: 'PAYMENT SETTINGS', component: SidebarFieldsComponent},
    {name: 'TERMS AND CONDITIONS', component: SidebarFieldsComponent},
    {name: 'FORM PAYMENT', component: SidebarFieldsComponent},
  ];
  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea) {
    this.workarea = workarea;
  }

}
