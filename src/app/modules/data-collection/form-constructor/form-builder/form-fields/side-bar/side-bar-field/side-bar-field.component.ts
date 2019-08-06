import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Field} from "../../../../../model/field.model";
import {cloneDeep, isEmpty} from 'lodash';
import {Form} from "../../../../../model/form.model";
import {SideBarService} from "../side-bar.service";

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './side-bar-field.component.html',
  styleUrls: ['./side-bar-field.component.css']
})
export class SideBarFieldComponent implements OnInit, OnDestroy {

  @Input() group: Field;
  @Input() rootGroup: Field;
  @Input() field: Field;
  @Input() section: Field;
  @Input() form: Form;
  @Input() nestedLevel: number;
  @Input() style: boolean;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  @Output() deleteCustom = new EventEmitter<any>();
  constructor(private sideBarService: SideBarService,private cd: ChangeDetectorRef  ) { }

  ngOnInit() {

  }




  ngAfterViewInit(): void {


    this.cd.detectChanges();


  }



  onFieldToggle(event: boolean):void{
    if(event){

      this.sideBarService.onChangeGroupBeing(this.field, this.section, this.form, this.group,this.rootGroup);
      this.section.exist = true;

    }else{
      this.sideBarService.onFieldDelete(this.field, this.form.fields);
    }
    this.field.exist = event;
  }



  deleteCustomField(name: string){
    this.deleteCustom.emit(name);
  }


  ngOnDestroy(): void {
    this.field.exist=false;
  }


}

