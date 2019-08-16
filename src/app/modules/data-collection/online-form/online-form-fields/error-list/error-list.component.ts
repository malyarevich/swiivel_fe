import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-error-list",
  templateUrl: "./error-list.component.html",
  styleUrls: ["./error-list.component.scss"]
})
export class ErrorListComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() field: Field;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
