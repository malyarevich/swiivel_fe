import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-workarea-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class WorkareaIntroComponent implements OnInit {

  textareaControl: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit() {
  }

}
