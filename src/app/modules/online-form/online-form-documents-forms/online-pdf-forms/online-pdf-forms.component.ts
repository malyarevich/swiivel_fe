import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../vertical-data-collection/model/form.model";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-online-pdf-forms',
  templateUrl: './online-pdf-forms.component.html',
  styleUrls: ['./online-pdf-forms.component.css']
})
export class OnlinePdfFormsComponent implements OnInit {
  @Input() form: Form;
  token=`?api_token=${environment.api_token}`;
  page =1;

  constructor() { }

  ngOnInit() {
  }

}
