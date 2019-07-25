import { Component, Input, ViewEncapsulation, Output, EventEmitter, OnInit } from "@angular/core";
import { Field } from "../../model/field.model";

@Component({
  selector: "app-short-text-field",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./short-text-field.component.html",
  styleUrls: ["./short-text-field.component.scss"]
})
export class ShortTextFieldComponent implements OnInit {
  @Input() data: Field;
  @Input() fieldId: string;
  @Input() isDisable: boolean = false;
  @Output() onChangeValue: EventEmitter<string> = new EventEmitter;

  ngOnInit() {
    // console.log(this.fieldId);
  }

  changeValue(event) {
    console.log(this.data._id);
    console.log(event.target.value);
  }
}
