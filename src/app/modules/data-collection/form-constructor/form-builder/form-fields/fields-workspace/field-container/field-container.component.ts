import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { SideBarService } from "../../side-bar/side-bar.service";
import { Section } from "src/app/models/data-collection/section.model";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { FormGroup, FormBuilder } from '@angular/forms';
import { flatMap } from 'lodash';

@Component({
  selector: "app-field-container",
  templateUrl: "./field-container.component.html",
  styleUrls: ["./field-container.component.scss"],
})
export class FieldContainerComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() sideBar: Field;
  @Input('form') _form: Form;
  field;
  @Input() set inputField(field) {
    this.field = field;
    this.form = this.sideBarService.getFormFor(this.field);
    if (this.form) {
      // this.form.patchValue({
      //   ...this.field.options
      // })
    }
  }
  @Input() customFields: Field[];
  @Input() warningTitle: string;
  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onUniq = new EventEmitter<any>();
  warningCheckExistingLabelString =
    "Pay attention that we already have existing field with the same name";
  warningCheckUniqString =
    "Pay attention that there are unique Field with the same name or mapped to the same field!";

  showSettings: boolean = false;

  objectKeys = Object.keys;
  list: object;
  widthOptions = [
    { title: '4 columns' },
    { title: '3 columns' },
    { title: '2 columns' },
    { title: '1 column' }
  ];
  width: { title: string; value: string; }[] = [];
  size;
  form: FormGroup;
  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
  }

  removeField(field: Field) {
    this.sideBarService.removeField(field);
  }

  widthChanged(value) {
    if (value && value.length > 0) {
      this.inputField.width = value[0].value;
    } else {
      this.inputField.width = '';
    }
  }

  uniqActivated(event) {
    this.inputField.options.unique = !this.inputField.options.unique;
    this.onUniq.emit(event);
  }

  returnFieldTYpeName(field: Field) {
    return this.sideBarService.fieldTypes['schema'].find(ftype => ftype.type === field.type).name;
  }

  // nameChange(event){
  //   event=event.trim();
  //
  //   this.inputField.name=event;
  //   this.onChange.emit(event);
  // }

  ngOnInit(): void {
    if (this.field) {
      this.form = this.sideBarService.getFormFor(this.field);
      if (this.form) {
        this.size = this.widthOptions[4 - this.form.get('options.size').value];
        this.form.valueChanges.subscribe((form) => {
          console.log(form);
        })
      } else {
        if (this.field.isActive) console.log(`no form for `, this.field);
      }
    }

  }

  ngOnDestroy(): void {
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onSetReadonly(event) {
    if (event) {
      this.inputField.options.unique = false;
      this.inputField.options.required = false;
    }
  }
}
