import { Component, Input, OnInit } from "@angular/core";
import { Form } from "../../../model/form.model";

@Component({
  selector: "app-general-info-parents",
  templateUrl: "./general-info-parents.component.html",
  styleUrls: ["./general-info-parents.component.scss"]
})
export class GeneralInfoParentsComponent implements OnInit {
  @Input() form: Form;

  constructor() {}

  ngOnInit() {
    // console.log("form:");
    // console.log(this.form);
  }
}