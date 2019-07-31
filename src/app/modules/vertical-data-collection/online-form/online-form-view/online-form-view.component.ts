import { Component, OnInit, OnDestroy } from "@angular/core";
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
import { Observable, Subscription } from "rxjs";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";
import { IActiveSections } from "src/app/models/vertical-data-collection/v-form-constructor/v-form-builder/active-section.model";

@Component({
  selector: "app-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"]
})
export class OnlineFormViewComponent implements OnInit, OnDestroy {
  form: Form;
  activeSection: string;
  fg: FormGroup;

  activeSections: IActiveSections;
  sectionListOfMenuItems: Array<object[]>;
  onActiveMenuItemSubscription: Subscription;
  onChangeSectionListOfMenuItemsSubscription: Subscription;
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
    this.onActiveMenuItemSubscription = this.onlineFormNavigationService.onActiveMenuItem.subscribe(
      menuItemName => {
        this.activeSection = menuItemName;
      }
    );
    this.onChangeSectionListOfMenuItemsSubscription = this.onlineFormNavigationService.onChangeSectionListOfMenuItems.subscribe(
      sectionListOfMenuItems => {
        this.sectionListOfMenuItems = sectionListOfMenuItems;
        sectionListOfMenuItems.length === Object.keys(this.activeSections).length;
      }
    );
  }

  getForm(): void {
    this.onlineFormService.setFromId(this.route.snapshot.paramMap.get("id"));
    this.onlineFormService.getOneForm().subscribe((form: Form) => {
      this.form = form["data"];

      console.log(this.form);

      this.activeSections = this.getFilteredSections();
      this.onlineFormNavigationService.setActiveSections(this.activeSections);

      this.initForm();
    });
  }

  getFilteredSections(): IActiveSections {
    //FilterByActive
    let activeMenuList = {};
    for (let key in this.form["activeSections"]) {
      if (
        this.form["activeSections"][key] &&
        this.form["activeSections"][key].isActive
      ) {
        activeMenuList[key] = this.form["activeSections"][key];
      }
    }
    return <IActiveSections>activeMenuList;
  }

  initForm(): void {
    this.onlineFormService.initOneForm();
    this.fg = this.onlineFormService.getFormGroup();
  }

  isStartInitMenu(): boolean {
    return this.sectionListOfMenuItems
      && this.activeSections
      && this.sectionListOfMenuItems.length === Object.keys(this.activeSections).length;
  }

  onAction(actionType) {
    switch (actionType) {
      case "save":
        this.saveForm();
      case "cancel":
        this.goBack();
    }
  }

  goPreviousStep() {
    this.onlineFormNavigationService.previousStep();
  }

  saveAndGoNext() {
    this.saveForm().subscribe(
      res => {
        this.goNextStep();
      },
      error => {
        if (
          error.error.status === 0 &&
          error.error.errors &&
          error.error.errors.fields
        ) {
          //TODO:? catch errors
          this.onlineFormService.updateServerFormErrors(
            error.error.errors.fields
          );
        }
        // console.error(error);
      },
      () => {
        this.isDisabledSaveButton = false;
      }
    );
  }

  saveForm(): Observable<any> {
    this.isDisabledSaveButton = true;
    const form = this.onlineFormService.getFormValues();
    // console.log(this.fg);
    // console.log(JSON.stringify({ fieldsData: form }));
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

  ngOnDestroy(): void {
    if (this.onActiveMenuItemSubscription) {
      this.onActiveMenuItemSubscription.unsubscribe();
    }
    if (this.onChangeSectionListOfMenuItemsSubscription) {
      this.onChangeSectionListOfMenuItemsSubscription.unsubscribe();
    }
  }
}
