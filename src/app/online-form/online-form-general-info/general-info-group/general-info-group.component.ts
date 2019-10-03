import { Component, OnInit, Input } from "@angular/core";
import { Field } from "src/app/models/data-collection/field.model";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "sw-general-info-group",
  templateUrl: "./general-info-group.component.html",
  styleUrls: ["./general-info-group.component.scss"]
})
export class GeneralInfoGroupComponent implements OnInit {
  @Input() group: Field;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;
  @Input() groupCaption: string;

  groups: Field[];
  fields: Field[];

  constructor() {}

  ngOnInit() {
    this.groupCaption = this.groupCaption
      ? `${this.groupCaption}   /   ${this.group.name}`
      : this.group.name;
    this.initNestedGroups();
    this.initFields();
  }

  initNestedGroups() {
    this.groups = this.group.fields.filter(item => {
      return item.type === 113;
    });
  }

  initFields() {
    this.fields = this.group.fields.filter(item => {
      return item.type && item.type !== 113;
    });
  }

  hasErrors() {
    // console.log( this.formErrors );
    // console.log( Object.values(this.formErrors).length !== 0 );
    // console.log( this.formErrors.constructor === Object);
    return Object.values(this.formErrors).length !== 0 &&
    this.formErrors.constructor === Object;
  }

  getGroupErrors() {
    return this.formErrors ? this.formErrors : {};
  }

  getFormErrorsById(id) {
    return this.formErrors[id] ? this.formErrors[id] : {};
  }

  getErrorByNodeId(id, targetNode = this.formErrors) {
    let errors = {};
    if (
      !(
        Object.values(targetNode).length === 0 &&
        targetNode.constructor === Object
      )
    ) {
      if (this.fg.contains(id)) {
        errors[id] = targetNode[id];
      } else {
        if(targetNode[id]) {
          Object.keys(targetNode[id]).forEach(key => {
            // console.log(errors);
            // console.log(key);
            // console.log(targetNode[id]);
            errors = { ...errors, ...this.getErrorByNodeId(key, targetNode[id]) };
          });
        } else {
          // console.log(targetNode);
        }
        
      }
    }
    // console.log(errors);
    return errors;
  }
}
