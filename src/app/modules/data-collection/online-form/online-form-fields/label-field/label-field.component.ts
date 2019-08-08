import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-label-field",
  templateUrl: "./label-field.component.html",
  styleUrls: ["./label-field.component.scss"]
})
export class LabelFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
