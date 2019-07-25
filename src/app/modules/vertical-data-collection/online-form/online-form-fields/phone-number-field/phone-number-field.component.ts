import { Component, Input } from "@angular/core";
import { Field } from "../../model/field.model";

@Component({
  selector: "app-phone-number-field",
  templateUrl: "./phone-number-field.component.html",
  styleUrls: ["./phone-number-field.component.scss"]
})
export class PhoneNumberFieldComponent {
  @Input() data: Field;
  @Input() isDisabled: boolean = false;
}
