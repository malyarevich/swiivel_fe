import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-multiple-options-field",
  templateUrl: "./multiple-options-field.component.html",
  styleUrls: ["./multiple-options-field.component.scss"]
})
export class MultipleOptionsFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  list: Array<string> = [
    "Options 1",
    "Options 2",
    "Options 3",
    "Options 4",
    "Options 5"
  ];

  constructor() {}

  ngOnInit() {}
}
