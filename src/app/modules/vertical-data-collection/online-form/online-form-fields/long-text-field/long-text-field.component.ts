import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-long-text-field",
  templateUrl: "./long-text-field.component.html",
  styleUrls: ["./long-text-field.component.scss"]
})
export class LongTextFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
