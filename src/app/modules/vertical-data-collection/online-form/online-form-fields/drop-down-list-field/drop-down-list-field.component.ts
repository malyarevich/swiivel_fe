import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-drop-down-list-field",
  templateUrl: "./drop-down-list-field.component.html",
  styleUrls: ["./drop-down-list-field.component.scss"]
})
export class DropDownListFieldComponent implements OnInit, OnDestroy {
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
