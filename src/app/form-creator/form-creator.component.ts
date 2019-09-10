import { Component, OnInit } from '@angular/core';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';

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
