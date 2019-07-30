import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Form } from "src/app/models/vertical-data-collection/form.model";
import { OnlineFormService } from "../services/online-form.service";
import { Location } from "@angular/common";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/vertical-data-collection/v-form-constructor/online-form/menu-items";
import { Observable } from "rxjs";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";

@Component({
  selector: "app-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"]
})
export class OnlineFormViewComponent implements OnInit {
  form: Form;
  activeSection: string;
  fg: FormGroup;

  isDisabledSaveButton: boolean;

  percents: number[];
  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  constructor(
    private route: ActivatedRoute,
    private onlineFormService: OnlineFormService,
    private onlineFormNavigationService: OnlineFormNavigationService,
    private location: Location
  ) {}

  ngOnInit() {
    this.percents = [];
    this.getForm();
    this.onlineFormNavigationService.onActiveMenuItem.subscribe(
      menuItemName => {
        this.activeSection = menuItemName;
      }
    );
  }

  getForm(): void {
    this.onlineFormService.setFromId(this.route.snapshot.paramMap.get("id"));
    this.onlineFormService.getOneForm().subscribe((form: Form) => {
      this.form = form["data"];
      this.onlineFormNavigationService.setActiveSections(
        this.form["activeSections"]
      );
      this.initForm();
    });
  }

  initForm(): void {
    this.onlineFormService.initOneForm();
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
    this.saveForm().subscribe(
      res => {
        if (res.status === 0 && res.errors) {
          //TODO:? catch errors
          console.log(res);
          this.onlineFormService.updateServerInfo();
        } else {
          this.goNextStep();
        }
      },
      error => {
        console.error(error);
      },
      () => {
        this.isDisabledSaveButton = false;
      }
    );
  }

  saveForm(): Observable<any> {
    this.isDisabledSaveButton = true;
    const form = this.onlineFormService.getFormValues();
    console.log(this.fg);
    console.log(JSON.stringify({ fieldsData: form }));

    if (!this.fg.valid) {
      return new Observable();
    }

    return this.onlineFormService.sendForm({ fieldsData: form });
  }

  goNextStep() {
    this.onlineFormNavigationService.nextStep();
  }

  goBack() {
    this.location.back();
  }

  setPercent(itemName: string, percent: number) {
    this.percents[itemName] = percent;
  }
}
