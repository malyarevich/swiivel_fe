import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {
  workarea;
  sections = [];
  constructor() { }

  ngOnInit() {
  }

  switchWorkarea(workarea) {
    this.workarea = workarea;
  }

}
