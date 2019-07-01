import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Field } from "../../../model/field.model";

@Component({
  selector: "app-short-text-field",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./short-text-field.component.html",
  styleUrls: ["./short-text-field.component.css"]
})
export class ShortTextFieldComponent {
  @Input() data: Field;
}
