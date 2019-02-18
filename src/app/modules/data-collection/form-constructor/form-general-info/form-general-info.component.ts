import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../../form.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectAllForms, selectEditedForm} from '../../reducers/forms/form.selectors';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Form} from '../../reducers/forms/form.model';
import {Update} from '@ngrx/entity';
import {FormState} from '../../reducers/forms/form.reducer';
import {UpdateForm} from '../../reducers/forms/form.actions';

@Component({
  selector: 'app-form-general-info',
  templateUrl: './form-general-info.component.html',
  styleUrls: ['./form-general-info.component.css']
})
export class FormGeneralInfoComponent{


  form:Form;
  name='';
  constructor(private formService: FormService, private router: Router, private formStore$: Store<FormState>) {

  this.formStore$
    .select(selectEditedForm)
    .subscribe(form=>{
      this.form=form;
      this.name = form.name;
    })
    .unsubscribe();




  }

  saveFormName(id:string,name:string){
    const updatedForm: Update<Form>={
       id: id,
      changes: {name: name}
    };
    this.formStore$.dispatch(new UpdateForm({form: updatedForm}));
  }

}
