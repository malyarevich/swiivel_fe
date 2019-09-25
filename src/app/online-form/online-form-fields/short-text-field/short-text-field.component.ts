import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-short-text-field",
  templateUrl: "./short-text-field.component.html",
  styleUrls: ["./short-text-field.component.scss"]
})
export class ShortTextFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}