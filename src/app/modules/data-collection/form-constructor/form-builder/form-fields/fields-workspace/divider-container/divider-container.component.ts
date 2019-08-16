import { Component, Input, OnInit } from "@angular/core";
import { range } from "lodash";
import { Colors, dividersColor, dividerStyle } from "../divider";
import { SideBarService } from "../../side-bar/side-bar.service";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-divider-container",
  templateUrl: "./divider-container.component.html",
  styleUrls: ["./divider-container.component.scss"]
})
export class DividerContainerComponent implements OnInit {
  @Input() inputDivider: Field;
  @Input() form: Form;

  space = range(1, 11);
  shapeStrokeValueSelector = range(1, 11);

  colorsDivider: Colors[] = dividersColor;
  dividerStyle = dividerStyle;
  constructor(private sideBarService: SideBarService) {}

  ngOnInit() {}

  removeField(field: Field) {
    this.sideBarService.onFieldByIdDelete(field, this.form.fields);
  }
}
