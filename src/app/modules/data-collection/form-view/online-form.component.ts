import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {FormService} from '../form.service';
import { Form } from '../reducers/forms/form.model';
import {Store} from '@ngrx/store';
import {FormState} from '../reducers/forms/form.reducer';
import { FillForm} from '../reducers/forms/form.actions';
@Component({
  selector: 'app-form-view',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form..component.css']
})
export class OnlineFormComponent implements OnInit {
  name ='';

  fields=[];

  form: Form;


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
      }
    );

  }


  sendForm(){

this.form.fields=this.fields;
    this.formStore.dispatch(new FillForm(this.form));

    setTimeout(() =>this.goBack(), 2000);
  }

  goBack() {
    this.location.back();
  }
}
