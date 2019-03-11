import { Component, OnInit } from '@angular/core';
import {Form} from "../../data-collection/reducers/forms/form.model";
import {VFormService} from "../v-form.service";

@Component({
  selector: 'app-v-form-table',
  templateUrl: './v-form-table.component.html',
  styleUrls: ['./v-form-table.component.css']
})
export class VFormTableComponent implements OnInit {

  forms: Form[];
    formSelected;

  constructor(private vFormService: VFormService) { }

  ngOnInit() {
    this.getAllForm();
  }


  getAllForm():void{
    this.vFormService.getFormsList().subscribe(forms=>this.forms=forms);
  }

  removeForm(id: string): void{
    this.vFormService.deleteForm(id).subscribe(res=>res);
    this.forms=this.forms.filter((form=>form._id!=id));
  }

    resetFormSelected() {
        this.formSelected = null
    }

}
