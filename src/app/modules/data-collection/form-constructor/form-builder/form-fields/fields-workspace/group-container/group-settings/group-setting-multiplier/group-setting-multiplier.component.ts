import { Component, Input, OnInit } from "@angular/core";
import { cloneDeep, isEmpty } from "lodash";
import { Form } from "src/app/models/data-collection/form.model";
import {
  Field,
  FieldSettingMultiplier
} from "src/app/models/data-collection/field.model";
import { FieldsService } from 'src/app/modules/data-collection/services/fields.service';

const defaultMultiplier: FieldSettingMultiplier = {
  enabled: false,
  mapped_type: "multiple",
  mapping_field: "amount_of_students_in_family",
  prefill: true,
  limit: false,
  limit_amount: 10
};

@Component({
  selector: "app-group-setting-multiplier",
  templateUrl: "./group-setting-multiplier.component.html",
  styleUrls: ["./group-setting-multiplier.component.css"]
})
export class GroupSettingMultiplierComponent implements OnInit {
  @Input() inputGroup: Field;
  @Input() form: Form;
  manualMultiplierOptions: { name: string; value: string }[] = [];

  constructor(private vFieldsService: FieldsService) {}

  ngOnInit() {
    this.initMultiplier();
    this.getFieldsRecursive(this.form.fields);
  }

  initMultiplier() {
    if (isEmpty(this.inputGroup.settings.multiplier)) {
      this.inputGroup.settings["multiplier"] = cloneDeep(defaultMultiplier);
    }
  }

  getFieldsRecursive(fields) {
    this.manualMultiplierOptions = this.vFieldsService.getFieldsRecursive(
      fields
    );
  }
}
