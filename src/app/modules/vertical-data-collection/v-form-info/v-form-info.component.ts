import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VFormService} from "../v-form.service";
import {FormSql} from "../model/form.model";

@Component({
  selector: 'app-v-form-info',
  templateUrl: './v-form-info.component.html',
  styleUrls: ['./v-form-info.component.css']
})
export class VFormInfoComponent implements OnInit {

  formId: string;
  form: FormSql;

  constructor(private route: ActivatedRoute, private vFormService :VFormService) { }

  ngOnInit() {
   this.setFormId();
   this.vFormService.getOneFormSql(this.formId).subscribe((res) => {
     this.form = res;
   })
  }

  setFormId() {
    this.route.params.subscribe((params) => {
      this.formId = params['id'];
    });
  }

}
