import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {cloneDeep, isEmpty} from 'lodash';
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../side-bar.service";

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css']
})
export class VSideBarFieldComponent implements OnInit, OnDestroy {


  @Input() field: Field;
  @Input() section: Field;
  @Input() form: Form;

  @Input() style: boolean;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  @Output() deleteCustom = new EventEmitter<any>();
  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {

  }

  onChangeGroupBeing(field, group) {
    // console.log(field, group);
    let  groupNew = cloneDeep(group);
    let arr = this.form.fields.filter(f => f.name == group.name);
    if (isEmpty(arr)) {
      groupNew.fields = [];
      this.sideBarService.addExistingField(field, groupNew.fields);
      this.sideBarService.addExistingField(groupNew, this.form.fields);
      group.exist = true;
    } else {
      this.form.fields = this.form.fields.map(f => {
        if (f.name == groupNew.name) {
          this.sideBarService.addExistingField(field, f.fields);
        }
        return f;
      });
    }

  }


  onBeingChange(event: boolean):void{
    // if(event){
    //   this.onChangeGroupBeing(
    //     this.field,
    //    this.section
    //   )
    // }else{
    //
    //   this.sideBarService.onFieldDelete(
    //   this.field,
    //   this.form.fields
    //   );
    // }
    // console.log(event);
    event?
      this.onChangeGroupBeing(this.field, this.section)
      :
      this.sideBarService.deleteField(this.field, this.form.fields);
    this.field.exist = event;
  }

  onFieldToggle(event: boolean):void{
    event
      ?this.onChangeGroupBeing(this.field, this.section)
      :this.sideBarService.deleteField(this.field, this.form.fields);
    this.field.exist = event;
  }

  // onBeingChange(event){
  //   console.log(event, this.field);
  //   this.field.exist=!this.field.exist;
  //   this.onChangeFieldBeing.emit(this.field);
  // }

  deleteCustomField(name: string){
    this.deleteCustom.emit(name);
  }
  // findSection(field:Field):Field[]{
  //    this.form.fields.forEach(section=>{
  //     if(section.prefix == field.prefix){
  //       return section.fields;
  //     }
  //   })
  // }

  ngOnDestroy(): void {
    this.field.exist=false;
  }
}

