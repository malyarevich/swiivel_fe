import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-short-text-field",
  templateUrl: "./short-text-field.component.html",
  styleUrls: ["./short-text-field.component.scss"]
})
export class ShortTextFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
