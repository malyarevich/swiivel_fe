import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../side-bar.service";

@Component({
  selector: 'app-side-bar-group',
  templateUrl: './side-bar-group.component.html',
  styleUrls: ['./side-bar-group.component.scss']
})
export class SideBarGroupComponent implements OnInit, OnDestroy {
 showNested: boolean = true;
  @Input() idSectionForDragDrop: string[];
  @Input() group: Field;
  @Input() rootGroup: Field;
  @Input() section: Field;
  @Input() form: Form;
  @Input() sideBar: Field;
  @Input() customFields: Field[];
  @Input() existingFields: Field[];
  @Input() nestedLevel: number;

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {

  }



  onBeingChange(event: boolean, entity: Field, destination:Field){
    if(event){
    if(this.rootGroup&&this.nestedLevel>1){
       this.sideBarService.onChangeGroupBeing(entity, destination, this.form, this.rootGroup);

    }else{
      this.sideBarService.onChangeGroupBeing(
        entity,
        destination,
        this.form
      )
    }

    this.section.exist = true;
    }else{

      this.sideBarService.onFieldDelete(
        entity,
        this.form.fields
      );
    }
    if(this.rootGroup&&this.nestedLevel>1) this.rootGroup.exist = event;
    entity.exist = event;

    this.sideBarService.changeAllGroupAndNested(event, entity);

  }


  ngOnDestroy(): void {
    this.group.exist = false;

  }
}
