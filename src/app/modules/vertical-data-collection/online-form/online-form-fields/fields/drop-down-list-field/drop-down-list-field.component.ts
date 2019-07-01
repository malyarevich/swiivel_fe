import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { Field } from "../../../model/field.model";

@Component({
  selector: "app-drop-down-list-field",
  templateUrl: "./drop-down-list-field.component.html",
  styleUrls: ["./drop-down-list-field.component.css"]
})
export class DropDownListFieldComponent {
  @Input() data: Field;

  list: Array<string> = [
    "Options 1",
    "Options 2",
    "Options 3",
    "Options 4",
    "Options 5"
  ];
}
