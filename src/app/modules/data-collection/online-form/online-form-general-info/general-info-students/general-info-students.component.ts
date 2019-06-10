import { Component, OnInit, Input } from "@angular/core";
import { Form } from "../../../../vertical-data-collection/model/form.model";

@Component({
  selector: "app-general-info-students",
  templateUrl: "./general-info-students.component.html",
  styleUrls: ["./general-info-students.component.scss"]
})
export class GeneralInfoStudentsComponent implements OnInit {
  @Input() form: Form;

  constructor() {}

  ngOnInit() {}
}
