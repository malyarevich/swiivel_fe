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
    const id = this.route.snapshot.paramMap.get("id");
    this.onlineFormService.getOneForm(id).subscribe((form: Form) => {
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

  saveForm() {
    //PDF form save
    // this.onlineFormService.sendForm(this.form).subscribe(res => this.goBack());
    // this.onlineFormService.sendFamilyForm(this.form).subscribe(res => this.goBack());
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
