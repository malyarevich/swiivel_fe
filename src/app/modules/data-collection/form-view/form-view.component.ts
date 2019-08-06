import { Component, OnInit } from '@angular/core';
import {Form} from "../model/form.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormService} from "../services/form.service";

@Component({
  selector: 'app-v-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  name ='';

  fields=[];

  form: Form;


  constructor(    private route: ActivatedRoute,
                  private router: Router,
                  private location: Location,
                  private formService: FormService) { }

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
    this.formService.sendForm(this.form).subscribe(res => this.goBack());

  }

  goBack() {
    this.location.back();
  }

}
