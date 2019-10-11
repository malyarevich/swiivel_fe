import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { range } from "lodash";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { v4 as uuid } from "uuid";
import { SideBarService } from "../side-bar/side-bar.service";
import { dividerStyle } from "./divider";
import { Form } from "src/app/models/data-collection/form.model";
import { Section } from "src/app/models/data-collection/section.model";
import { Field } from "src/app/models/data-collection/field.model";
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-fields-workspace",
  templateUrl: "./fields-workspace.component.html",
  styleUrls: ["./fields-workspace.component.scss"]
})
export class FieldsWorkspaceComponent implements OnInit, AfterViewInit {
  sectionAddGroup: FormGroup = new FormGroup({
    sectionName: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    }),
    sectionSize: new FormControl(null, Validators.required)
  });

  dividerAddGroup: FormGroup = new FormGroup({
    dividerName: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    }),
    dividerStyle: new FormControl(null, Validators.required),
    sectionRelate: new FormControl(null, Validators.required)
  });

  groupAddGroup: FormGroup = new FormGroup({
    groupName: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    }),
    sectionRelate: new FormControl(null, Validators.required)
  });

  @Input() form: Form;
  @Input() sideBar: Field;
  @Input() customFields: Field[];
  size = range(1, 13);
  @Input() idSectionForDragDrop: string[];

  objectKeys = Object.keys;
  list: object;

  dividerStyles = dividerStyle;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
    this.list = Section.sectionWidth;
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  drop(event) {
    console.log('root', event)
  }
  dropDrag(event) {
    console.log('ex', event);
  }

  noFields(item: CdkDrag<any>) {
    return item.data.type >= 112;
  }

  openModal(content) {
    this.modalService
      .open(content, { size: "lg", ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {},
        reason => {
          console.log(reason);
        }
      );
  }

  addSection(modal) {
    this.validateAllFormFields(this.sectionAddGroup);
    if (!this.sectionAddGroup.valid) return;
    this.sectionAddGroup.clearValidators();
    const newSection: Field = {
      _id: uuid(),
      name: this.sectionAddGroup.value.sectionName,
      width: "full",
      type: 114,
      options: { size: this.sectionAddGroup.value.sectionSize },
      prefix: this.sectionAddGroup.value.sectionName
        .toLowerCase()
        .split(" ")
        .join("_"),
      fields: []
    };
    this.form.fields.push(newSection);
    // this.idSectionForDragDrop = this.sideBarService.getIdOfSection(this.form.fields);
    this.sectionAddGroup.reset();
    modal.close();
  }

  addGroup(modal) {
    this.validateAllFormFields(this.groupAddGroup);
    if (!this.groupAddGroup.valid) return;
    this.groupAddGroup.clearValidators();
    const newGroup: Field = {
      _id: uuid(),
      name: this.groupAddGroup.value.groupName,
      width: "full",
      type: 113,
      options: { size: 4 },
      prefix: this.groupAddGroup.value.groupName
        .toLowerCase()
        .split(" ")
        .join("_"),
      fields: []
    };
    this.form.fields.forEach(section => {
      if (
        section.name == this.groupAddGroup.value.sectionRelate.name &&
        section.prefix == this.groupAddGroup.value.sectionRelate.prefix
      ) {
        section.fields.push(newGroup);
      }
    });
    // this.idSectionForDragDrop = this.sideBarService.getIdOfSection(this.form.fields);
    this.groupAddGroup.reset();
    modal.close();
  }

  addDivider(modal) {
    this.validateAllFormFields(this.dividerAddGroup);
    if (!this.dividerAddGroup.valid) return;
    this.dividerAddGroup.clearValidators();
    const newDivider: Field = {
      _id: uuid(),
      name: this.dividerAddGroup.value.dividerName,
      type: 112,
      options: { dividerStyle: this.dividerAddGroup.value.dividerStyle }
    };
    if (this.dividerAddGroup.value.sectionRelate.name == "workspace") {
      this.form.fields.push(newDivider);
    } else {
      this.form.fields.forEach(section => {
        if (
          section.name == this.dividerAddGroup.value.sectionRelate.name &&
          section.prefix == this.dividerAddGroup.value.sectionRelate.prefix
        ) {
          console.log(newDivider, "section");

          section.fields.push(newDivider);
        }
      });
    }

    this.dividerAddGroup.reset();
    modal.close();
  }

  modalClose(modal) {
    this.sectionAddGroup.reset();
    modal.close();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }
}
