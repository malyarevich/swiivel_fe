import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {isEmpty, cloneDeep } from 'lodash';
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../side-bar.service";

@Component({
  selector: 'app-v-side-bar-group',
  templateUrl: './v-side-bar-group.component.html',
  styleUrls: ['./v-side-bar-group.component.scss']
})
export class VSideBarGroupComponent implements OnInit, OnDestroy {

  showAddButton = true;
  showNested: boolean = true;
  validNewCustomFieldName: boolean = true;
  @Input() idSectionForDragDrop: string[];
  @Input() group: Field;
  @Input() section: Field;
  @Input() form: Form;
  @Input() sideBar: Field;
  @Input() customFields: Field[];
  @Input() existingFields: Field[];

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {
  }



  onChangeFieldInGroup( field, group, section?){

    let  groupNew = cloneDeep(group);
    let sectionNew = cloneDeep(section);
    let sec = this.form.fields.filter(f => f.name == section.name);
    let grp;
    this.form.fields.forEach(f => {
      if(f.name == section.name){
        f.fields.forEach(f=>{
          if(f.name==group.name){
            grp = f.fields;
          }
        })
      }
    });
    if (isEmpty(sec)) {
      sectionNew.fields = [];
      groupNew.fields = [];
      this.sideBarService.addExistingField(field, groupNew.fields);
      this.sideBarService.addExistingField(groupNew, sectionNew.fields);
      this.sideBarService.addExistingField(sectionNew, this.form.fields);
      field.exist = group.exist = true;
    }else if(isEmpty(grp)){
      // console.log(grp, 'group');
      groupNew.fields = [];
      this.sideBarService.addExistingField(field, groupNew.fields);
      this.form.fields = this.form.fields.map(sec => {
        if (sec.name == section.name) {
          this.sideBarService.addExistingField(groupNew, sec.fields);
        }
      return sec;
      });
      field.exist = group.exist = true;
    } else {
      this.form.fields = this.form.fields.map(sec => {
        if (sec.name == section.name) {
          sec.fields = sec.fields.map(g=>{
            if(g.name == group.name){
              this.sideBarService.addExistingField(field, g.fields);
            }
            return g;
          });
        }
        return sec;
      });
    }
  }
  //
  // onChangeGroupBeing(group: Field, section:Field) {
  //   // console.log(section, group, 'onChangeGroupBeing');
  //   let  sectionNew = cloneDeep(section);
  //   let  groupNew = cloneDeep(group);
  //   let arr = this.form.fields.filter(f => f.name == section.name);
  //   if (isEmpty(arr)) {
  //     // console.log('if arr');
  //     sectionNew.fields = [];
  //     groupNew.fields = [];
  //     group.fields.forEach(field=>this.sideBarService.addExistingField(field, groupNew.fields));
  //     // console.log(groupNew);
  //     this.sideBarService.addExistingField(group, sectionNew.fields);
  //     this.sideBarService.addExistingField(sectionNew, this.form.fields);
  //     section.exist = true;
  //   } else {
  //     this.form.fields = this.form.fields.map(f => {
  //       if (f.name == sectionNew.name) {
  //         groupNew.fields = [];
  //         group.fields.forEach(field=>this.sideBarService.addExistingField(field, groupNew.fields));
  //         this.sideBarService.addExistingField(groupNew, f.fields);
  //       }
  //       return f;
  //     });
  //   }
  //
  // }

  onBeingChangeNested(event, entity,destination, section){
    if(event){
      this.onChangeFieldInGroup(entity,destination, section);
    }else{

      this.sideBarService.onFieldDelete(
        entity,
        this.form.fields
      );
    }
    entity.exist = event;
  }


  onBeingChange(event: boolean, entity: Field, destination:Field){
    if(event){
      this.sideBarService.onChangeGroupBeing(
        entity,
        destination,
        this.form
      )
    }else{

      this.sideBarService.onFieldDelete(
        entity,
        this.form.fields
      );
    }
    entity.exist = event;
    entity.fields.forEach(field=>field.exist = event)
  }


  // onBeingChange(event){
  //
  //   event?
  //     this.group.fields.forEach(field=>field.exist=true)
  //     :this.group.fields.forEach(field=>{
  //       this.onDeleteNested.emit(field.name);
  //       field.exist=false;
  //     }
  //     );
  //
  //   this.group.exist=!this.group.exist;
  //   this.onChangeFieldBeing.emit(this.group);
  // }
  //
  //
  // deleteCustomNestedField(event){
  //   this.onDeleteNested.emit(event);
  //   this.group.fields = this.group.fields.filter((field) => field.name != event);
  // }
  // onBeingChangeNested(event, field){
  //   field.exist=!field.exist;
  //   event?this.onChangeGroupBeing.emit(field):this.onDeleteNested.emit(field.name);
  //   this.group.exist =this.group.fields.filter(field => field.exist==true).length>0;
  //   if(!this.group.exist) this.onChangeFieldBeing.emit(this.group);
  // }
  //
  // addNewCustomField(name: string, fields: Field[]) {
  //   if (name.length < 3 || !this.validNewCustomFieldName) {
  //     this.showAddButton = true;
  //     return;
  //   }
  //   let newField: Field = cloneDeep(this.customFields[0]);
  //   newField.name = name;
  //   newField._id = uuid();
  //   newField.exist = false;
  //
  //   newField.isValid = true;
  //   newField.isValidName = true;
  //   newField.isValidName = this.checkExistingFieldsName(newField.name);
  //   //this.doExistingFieldsUniq(newField);
  //   // this.fields.push( newField);
  //   fields.push(newField);
  //  // this.fieldsValidator();
  //   this.showAddButton = true;
  //
  // }
  // checkExistingFieldsName(name: string): boolean {
  //   const arr = this.existingFields.filter((field => field.name.toLowerCase() == name.toLowerCase()));
  //   return isEmpty(arr);
  // }
  // nameChange(event) {
  //   this.validNewCustomFieldName = this.checkExistingFieldsName(event.target.value.trim());
  // }
  ngOnDestroy(): void {
    this.group.exist = false;

  }
}
