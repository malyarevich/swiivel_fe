import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../model/field.model";
import {Form} from "../../../../model/form.model";

import {SideBarService} from "../v-side-bar/side-bar.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-v-section-conteiner',
  templateUrl: './v-section-conteiner.component.html',
  styleUrls: ['./v-section-conteiner.component.scss']
})
export class VSectionConteinerComponent implements OnInit {
  @Input() sideBar: Field;
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() section: Field;
  @Input() idSectionForDragDrop: string[];
  constructor(private sideBarService: SideBarService) { }
  sectionWidth: string = "4 Columns";
  ngOnInit() {
  }


  drop(event: CdkDragDrop<Field[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }
  // addExistingField(field: Field, fields: Field[]) {
  //   let newField = cloneDeep(field);
  //   newField._id = uuid();
  //   // this.doExistingFieldsUniq(newField);
  //   newField.isValid = true;
  //   newField.isValidName = true;
  //   fields.push(newField);
  //   // this.fieldsValidator();
  //
  // }
  // onDelete(name: string) {
  //   console.log(name);
  //   // this.fields = this.findAndDelete(name, this.fields);
  //   // this.fields.map(group => group.type == 113 ? group.fields = this.findAndDelete(name, group.fields) : group);
  //
  //   // this.fieldsValidator();
  // }
  //
  //
  // onChangeFieldBeing(field: Field) {
  //   field.exist
  //     ? this.addExistingField(field, this.form.fields)
  //     : this.onDelete(field.name);
  // }Hebrew Middle Name
  removeSection(section: Field){
    this.sideBarService.onSectionDelete(section, this.form);
    this.section.fields.forEach(field=>  {
      this.sideBarService.onFieldUncheck(field, this.sideBar[0].fields);
      if( field.type===113) {
        field.fields.forEach(f=>this.sideBarService.onFieldUncheck(f, this.sideBar[0].fields));
      }
    }  );
    // this.sideBarService.changeExistingAllSection(false, section.fields);
    this.sideBarService.onSectionUnckeck(section,this.sideBar[0].fields);
  }

  getEndOfSection(){
    return 'End of the ' + this.section.name;
  }


}
