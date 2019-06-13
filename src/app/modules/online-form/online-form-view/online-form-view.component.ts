import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Form} from "../../vertical-data-collection/model/form.model";
import {OnlineFormService} from "../services/online-form.service";
import {MainMenuNames, mainMenuNames} from "../model/main-menu-name.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-online-form-view',
  templateUrl: './online-form-view.component.html',
  styleUrls: ['./online-form-view.component.css']
})
export class OnlineFormViewComponent implements OnInit {

  form: Form;
  activeSection: string;
  mainMenuNames: MainMenuNames = mainMenuNames;

  constructor(private route: ActivatedRoute,
              private onlineFormService: OnlineFormService,
              private location: Location) {
  }

  ngOnInit() {
    this.getForm();
  }

  getForm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.onlineFormService.getOneForm(id).subscribe(
      (form: Form) => {
        this.form = form;
      }
    );
  }

  onAction(actionType) {
    switch (actionType) {
      case 'save':
        this.saveForm();
      case 'cancel':
        this.goBack();
    }
  }

  saveForm() {
    // this.onlineFormService.sendForm(this.form).subscribe(res => this.goBack());
    this.onlineFormService.sendFamilyForm(this.form).subscribe(res => this.goBack());
  }

  goBack() {
    this.location.back();
  }

  onActiveMenuItem(menuItemName) {
    this.activeSection = menuItemName;
  }

}
