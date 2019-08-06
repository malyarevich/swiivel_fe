import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import { range } from 'lodash'
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../../side-bar/side-bar.service";
import {Section} from "../../../../../../../models/data-collection/section.model";
@Component({
  selector: 'app-v-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss'],
})
export class FieldContainerComponent implements OnInit, OnDestroy, AfterViewInit{
  @Input() sideBar: Field;
  @Input() form: Form;
  @Input() inputField: Field;
  @Input() customFields: Field[];
  @Input() warningTitle: string;
  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onUniq = new EventEmitter<any>();
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showSettings: boolean = false;

  objectKeys = Object.keys;
  list: object;

  constructor(private sideBarService: SideBarService,private cd: ChangeDetectorRef) {
  }



  removeField(field: Field){
    // console.log(this.sideBar[0].fields);
    this.sideBarService.onFieldUncheck(field, this.sideBar[0].fields);
    this.sideBarService.onFieldDelete(field, this.form.fields)
  }



  uniqActivated(event){
    this.inputField.options.unique=!this.inputField.options.unique;
    this.onUniq.emit(event);
  }



  returnFieldTYpeName(field: Field){
    if(this.customFields) {
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
    this.inputField.exist = true;
  }


  ngOnDestroy(): void {
    this.inputField.exist = false;
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onSetReadonly(event) {
   if(event) {
     this.inputField.options.unique = false;
     this.inputField.options.required = false;
   }
  }
}
