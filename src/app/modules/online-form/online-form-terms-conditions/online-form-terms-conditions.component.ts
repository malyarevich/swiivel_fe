import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-form-terms-conditions',
  templateUrl: './online-form-terms-conditions.component.html',
  styleUrls: ['./online-form-terms-conditions.component.css']
})
export class OnlineFormTermsConditionsComponent implements OnInit {
  @Input() form: Form;
  constructor() { }

  ngOnInit() {
  }

}
