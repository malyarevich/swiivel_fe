import { Component, OnInit } from '@angular/core';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {
  workarea;
  sections = [
    {name: 'Introduction', component: SidebarIntroComponent, active: true},
    {name: 'Fields', component: SidebarFieldsComponent}
  ];
  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea) {
    this.workarea = workarea;
  }

}
