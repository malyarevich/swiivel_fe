import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  Field,
  fieldValidators
} from "src/app/models/data-collection/field.model";
import { string } from "prop-types";

@Component({
  selector: "sw-error-list",
  templateUrl: "./error-list.component.html",
  styleUrls: ["./error-list.component.scss"]
})
export class ErrorListComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() field: Field;
  @Input() validationText: string;

  fieldValidators = fieldValidators;

  constructor() {}

  ngOnInit() {}

  getKeys(object): string[] {
    // console.log(this.fg.controls[this.field._id].errors);
    return Object.keys(object);
  }

  isCustomError(error): boolean {
    return typeof error === "string";
  }
}
