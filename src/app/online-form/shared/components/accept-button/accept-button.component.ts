import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-accept-button',
  templateUrl: './accept-button.component.html',
  styleUrls: ['./accept-button.component.scss']
})
export class AcceptButtonComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() button: any = {};

  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
