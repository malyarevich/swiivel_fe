import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-multiple-options-field",
  templateUrl: "./multiple-options-field.component.html",
  styleUrls: ["./multiple-options-field.component.scss"]
})
export class MultipleOptionsFieldComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {}
}
