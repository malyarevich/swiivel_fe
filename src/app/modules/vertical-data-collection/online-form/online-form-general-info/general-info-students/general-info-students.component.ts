import { Component, OnInit, Input } from "@angular/core";
import { Form } from "../../../model/form.model";
import { Field } from '../../../model/field.model';

@Component({
  selector: "app-general-info-students",
  templateUrl: "./general-info-students.component.html",
  styleUrls: ["./general-info-students.component.scss"]
})
export class GeneralInfoStudentsComponent implements OnInit {
  // @Input() form: Form;
  @Input() form: Field;

  constructor() {}

  ngOnInit() {}
}
