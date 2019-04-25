import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-general-info-parents',
  templateUrl: './general-info-parents.component.html',
  styleUrls: ['./general-info-parents.component.css']
})
export class GeneralInfoParentsComponent implements OnInit {
  @Input() form: Form;

  constructor() {
  }

  ngOnInit() {
  }

}
