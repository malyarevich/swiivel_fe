import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Form } from "../../model/form.model";
import { OnlineFormService } from "../services/online-form.service";
import { Location } from "@angular/common";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { Observable } from "rxjs";

@Component({
  selector: "app-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"]
})
export class OnlineFormViewComponent implements OnInit {
  form: Form;
  activeSection: string;
  fg: FormGroup;

  percents: number[];
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  constructor(
    private route: ActivatedRoute,
    private onlineFormService: OnlineFormService,
    private location: Location
  ) {}

  ngOnInit() {
    this.percents = [];
    this.getForm();
  }

  getForm(): void {
    this.onlineFormService.setFromId(this.route.snapshot.paramMap.get("id"));
    this.onlineFormService.getOneForm().subscribe((form: Form) => {
      this.form = form["data"];
      console.log(form);
      this.initForm();
    });
  }

  initForm(): void {
    this.onlineFormService.initOneForm(this.form);
    this.fg = this.onlineFormService.getFormGroup();
  }

  onAction(actionType) {
    switch (actionType) {
      case "save":
        this.saveForm();
      case "cancel":
        this.goBack();
    }
  }

  goBackStep() {
    //TODO: previous step in iterator
  }

  saveAndGoNext() {
    this.saveForm().subscribe(res => {
      if (res.status === 0 && res.errors) {
        //TODO? catch errors
        this.onlineFormService.updateServerInfo();
      } else {
        this.goNextStep();
      }
    });
  }

  saveForm(): Observable<any> {
    const form = this.onlineFormService.getFormValues();
    console.log(this.fg);
    console.log(JSON.stringify({ values: form }));

    if (!this.fg.valid) {
      return new Observable;
    }

    return this.onlineFormService.sendForm({ values: form });
  }

  goNextStep() {
    //TODO: next step in iterator
  }

  goBack() {
    this.location.back();
  }

  onActiveMenuItem(menuItemName) {
    this.activeSection = menuItemName;
  }

  setPercent(itemName: string, percent: number) {
    this.percents[itemName] = percent;
  }
}
