import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {FormService} from '../form.service';
import { Form } from '../reducers/forms/form.model';
import {Store} from '@ngrx/store';
import {FormState} from '../reducers/forms/form.reducer';
import {EditForm, SendForm, UpdateForm} from '../reducers/forms/form.actions';
import {Update} from '@ngrx/entity';
@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {
  name ='';

  fields=[];

  form: Form;

 // form: Form;

  constructor(    private route: ActivatedRoute,
                  private router: Router,
                  private location: Location,
                  private formService: FormService,
                  private formStore: Store<FormState>) { }

  ngOnInit(): void {
    this.getForm();
  }

  getForm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formService.getOneForm(id).subscribe(
      (form: Form)=>{
        this.form = form;
        this.name=form.name;
        this.fields = form.fields;
        this.formStore.dispatch(new EditForm({id:form._id}))
      }
    );

  }


  sendForm(){
   // console.log(this.fields);


    const updatedForm: Update<Form>={
      id: this.form._id,
      changes: {fields: this.fields}
    };
    this.formStore.dispatch(new UpdateForm({form: updatedForm}));
    this.formStore.dispatch(new SendForm());

    setTimeout(() => this.router.navigate(['']), 2000);

  }
}
