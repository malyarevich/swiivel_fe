import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { Field } from "../../model/field.model";

@Component({
  selector: "app-drop-down-list-field",
  templateUrl: "./drop-down-list-field.component.html",
  styleUrls: ["./drop-down-list-field.component.scss"]
})
export class DropDownListFieldComponent {
  @Input() data: Field;
  @Input() isDisabled: boolean = false;
  @Input() value: string;

  list: Array<string> = [
    "Options 1",
    "Options 2",
    "Options 3",
    "Options 4",
    "Options 5"
  ];
}
