import {Component, OnInit} from '@angular/core';
import {BasicFieldsService} from '../basic-fields.service';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import {FormService} from '../form.service';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable, pipe} from 'rxjs';
import {Update} from '@ngrx/entity';
import {Form} from '../reducers/forms/form.model';
import {FormState} from '../reducers/forms/form.reducer';
import { selectEditedIdForm} from '../reducers/forms/form.selectors';
import {SendForm, UpdateForm} from '../reducers/forms/form.actions';
import {FieldState} from '../reducers/field/field.reducer';
import {selectAllField, selectEditedIdField} from '../reducers/field/field.selector';
import {Field} from '../reducers/field/field.model';
import {LoadFields} from '../reducers/field/field.actions';
import {Location} from '@angular/common';


@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})
export class FormConstructorComponent implements OnInit {

  workPlace: Field[];
  formId: string;
  fieldId$:Observable<string>;

  constructor(private baseFields: BasicFieldsService,
              private formService: FormService,
              private router: Router,
              private fieldStore$: Store<FieldState>,
              private formStore$: Store<FormState>,
              private location: Location,
              ) {


    this.formService.emitChanges.subscribe(
        ()=>{
          this.loadAllFields();
      }
    );

    this.fieldId$ =this.fieldStore$.pipe(
      select(selectEditedIdField)
    );

    this.fieldStore$
      .select(selectAllField)
      .subscribe(felds=>this.workPlace=felds)
      .unsubscribe();

  this.formStore$.select(selectEditedIdForm).subscribe(id=>this.formId=id)
    .unsubscribe();
  }

  basicFields: Field[] = [];
  mappedFields: Field[] = [];


  ngOnInit() {
    this.loadAllFields();
    this.loadBasicFilds();
    this.loadMappedFilds();
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //TODO: remove debaging console
      // console.log(event.previousIndex, event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateFieldState(event.container.data);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      };

      this.loadBasicFilds();
    }




  loadBasicFilds() {
    this.baseFields.getFieldsList().subscribe((fields: Field[]) => {
      this.basicFields = fields;
    });
  }

  loadMappedFilds() {
    this.baseFields.getMappedList().subscribe((fields: Field[]) => {
     this.mappedFields = fields;
    });
  }

  sendForm() {

    const updatedForm: Update<Form>={
      id: this.formId,
      changes: {fields: this.workPlace}
    };
    this.formStore$.dispatch(new UpdateForm({form: updatedForm}));
    this.formStore$.dispatch(new SendForm());

       setTimeout(() => this.router.navigate(['data-collection']), 2000);


  }

  updateFieldState(field){
    this.fieldStore$.dispatch(new LoadFields({fields: field}));
  }



  loadAllFields(){
    this.fieldStore$
      .select(selectAllField)
      .subscribe(felds=>this.workPlace=felds)
      .unsubscribe();
  }


  goBack() {
    this.location.back();
  }
}
