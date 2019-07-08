import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import { range } from 'lodash'
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {SideBarService} from "../../v-side-bar/side-bar.service";
import {Form} from "../../../../../model/form.model";

@Component({
  selector: 'app-v-group-container',
  templateUrl: './v-group-container.component.html',
  styleUrls: ['./v-group-container.component.scss']
})
export class VGroupContainerComponent implements OnInit {
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() inputGroup: Field;
  @Input() sideBar: Field;
  @Input() nestedLevel: number;

  @Input() idSectionForDragDrop: string[];
  warningCheckExistingLabelString='Pay attention that we already have existing field with the same name';
  warningCheckUniqString= 'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showGroupSettings: boolean = false;

  size = range(1  ,13);
  constructor(private sideBarService: SideBarService,private cd: ChangeDetectorRef) { }
  showNested: boolean = true;
  ngOnInit() {
  }


  dropAdd(event){
    if(!event.value._id) {
      this.inputGroup.fields =  this.sideBarService.replaceExistinField(this.inputGroup.fields[event.dropIndex],this.inputGroup.fields );
      if(this.sideBarService.findIfPresent(this.inputGroup.fields[event.dropIndex],this.inputGroup.fields ).length>1){
        this.sideBarService.onFieldDelete(this.inputGroup.fields[event.dropIndex], this.inputGroup.fields);
        return;
      }
      this.sideBarService.fieldCheck(this.inputGroup.fields[event.dropIndex], this.sideBar[0]);
    }
  }



  removeGroup(group: Field){
    this.sideBarService.onFieldDelete(group, this.form.fields);
    group.fields.forEach(field=>  {
      this.sideBarService.onSectionUnckeck(field, this.sideBar[0].fields);

    }  );
    this.sideBarService.onSectionUnckeck(group,this.sideBar[0].fields);
  }


  ngAfterViewInit(): void {
    this.idSectionForDragDrop.push(this.inputGroup._id);


    this.cd.detectChanges();


  }
}
