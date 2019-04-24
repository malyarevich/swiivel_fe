import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Form} from "../../vertical-data-collection/model/form.model";
import {OnlineFormService} from "../online-form.service";
import {MainMenuNames, mainMenuNames} from "../models/main-menu-name.model";

@Component({
  selector: 'app-online-form-view',
  templateUrl: './online-form-view.component.html',
  styleUrls: ['./online-form-view.component.css']
})
export class OnlineFormViewComponent implements OnInit {

  form: Form;
  activeSection: string;
  mainMenuNames: MainMenuNames = mainMenuNames;

  constructor(private route: ActivatedRoute, private onlineFormService: OnlineFormService) { }

  ngOnInit() {
    this.getForm();
  }

  getForm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.onlineFormService.getOneForm(id).subscribe(
      (form: Form)=>{
        this.form = form;
      }
    );
  }

  onActiveMenuItem(menuItemName) {
    this.activeSection = menuItemName;
  }

}
