import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { SideBarService } from "../../side-bar/side-bar.service";
import { Section } from "src/app/models/data-collection/section.model";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-field-container",
  templateUrl: "./field-container.component.html",
  styleUrls: ["./field-container.component.scss"]
})
export class FieldContainerComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() sideBar: Field;
  @Input() form: Form;
  @Input() inputField: Field;
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
    { title: '4 columns', value: 'full' },
    { title: '3 columns', value: 'three-quarter' },
    { title: '2 columns', value: 'half' },
    { title: '1 column', value: 'quarter' }
  ];
  width: { title: string; value: string; }[] = [];

  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef
  ) {}

  removeField(field: Field) {
    // console.log(this.sideBar[0].fields);
    this.sideBarService.events$.next({action: 'remove', target: field});
    this.sideBarService.onFieldUncheck(field, this.sideBar[0].fields);
    this.sideBarService.onFieldDelete(field, this.form.fields);
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
    if (this.customFields) {
      let fieldTypeName: string;
      this.customFields.forEach(f => {
        if (field.type == f.type) fieldTypeName = f.name;
      });
      return fieldTypeName;
    }
  }

  // nameChange(event){
  //   event=event.trim();
  //
  //   this.inputField.name=event;
  //   this.onChange.emit(event);
  // }

  ngOnInit(): void {
    this.list = Section.sectionWidth;
    if (!this.inputField.options) this.inputField.options = {};
    if (this.inputField) {
      this.width = this.widthOptions.filter(i => i.value === this.inputField.width);
    }
    this.inputField.exist = true;
  }

  ngOnDestroy(): void {
    this.inputField.exist = false;
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
