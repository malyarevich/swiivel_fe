import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {Form} from "../../../../../model/form.model";

import {SideBarService} from "../../v-side-bar/side-bar.service";

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
  nestedLevel: number = 0;
  constructor(private cd: ChangeDetectorRef,private sideBarService: SideBarService) { }
  sectionWidth: string = "4 Columns";
  showSettings: boolean = false;
  isShow: boolean = true;
  ngOnInit() {

  }


  dropAdd(event){
    if(!event.value._id) {

      this.section.fields =  this.sideBarService.replaceExistinField(this.section.fields[event.dropIndex],this.section.fields );
      if(this.sideBarService.findIfPresent(this.section.fields[event.dropIndex],this.section.fields  ).length>1){
       this.sideBarService.onFieldDelete(this.section.fields[event.dropIndex], this.section.fields);
         return;
      }
      this.sideBarService.fieldCheck(this.section.fields[event.dropIndex], this.sideBar[0]);
    }
  }

  //   //replace cloned field that which copy to field array with object link by AM Drag&Drop native method
  //   this.fields = this.fields.map(item => item._id==field._id?newField:item);



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

  ngAfterViewInit(): void {
    this.idSectionForDragDrop.push(this.section._id);

    this.cd.detectChanges();


  }

  log(e){
    console.log(e);
  }
}
