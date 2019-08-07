import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../services/form.service";
import {FormSql} from "../model/form.model";

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {

  formId: string;
  form: FormSql;
  activeTab: string;

  constructor(private route: ActivatedRoute, private vFormService :FormService) { }

  ngOnInit() {
   this.setFormId();
   this.getFormInfo();
  }

  setFormId() {
    this.route.params.subscribe((params) => {
      this.formId = params['id'];
    });
  }

  getFormInfo() {
    this.vFormService.getOneFormSql(this.formId).subscribe((res) => {
      this.form = res;
    })
  }

  // Form info table nav emitters
  setActiveTab(value) {
    this.activeTab = value;
  }

  doBulkAction(type) {
    // console.log(type);
  }

  setSearchValue(value) {
    // console.log(value);
  }
  // End form info table nav emitters

  onUpdateFormInfo(event) {
    this.getFormInfo();
  }
}
