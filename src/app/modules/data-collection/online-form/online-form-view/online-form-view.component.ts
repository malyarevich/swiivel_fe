import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Input,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Form } from "src/app/models/data-collection/form.model";
import { OnlineFormService } from "../services/online-form.service";
import { Location } from "@angular/common";
import {
  menuItems,
  mainMenuNames,
  IMainMenuNames,
  IMenuItems
} from "../../../../models/data-collection/form-constructor/online-form/menu-items";
import { Observable, Subscription } from "rxjs";
import { OnlineFormNavigationService } from "../services/online-form-navigation.service";
import { IActiveSections } from "src/app/models/data-collection/form-constructor/form-builder/active-section.model";

@Component({
  selector: "app-online-form-view",
  templateUrl: "./online-form-view.component.html",
  styleUrls: ["./online-form-view.component.scss"]
})
export class OnlineFormViewComponent
  implements OnInit, AfterViewInit, OnDestroy {

  @Input() formID: string;

  form: Form;
  fg: FormGroup;

  activeMainMenuItems: IActiveSections;
  activeMenuItem: string;
  sectionListOfMenuItems: Array<object[]>;

  onActiveMenuItemSubscription: Subscription;
  onChangeSectionListOfMenuItemsSubscription: Subscription;
  onBothLoadedSubscription: Subscription;

  isDisabledSaveButton: boolean;
  isBothLoaded: boolean = false;
  isFirst: boolean = true;

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;

  constructor(
    private route: ActivatedRoute,
    private onlineFormService: OnlineFormService,
    private onlineFormNavigationService: OnlineFormNavigationService,
    private location: Location
  ) {}

  ngOnInit() {
    this.formID = this.formID || this.route.snapshot.paramMap.get("id");
    this.getForm(this.formID);
    this.onActiveMenuItemSubscription = this.onlineFormNavigationService.onActiveMenuItem.subscribe(
      menuItemName => {
        this.activeMenuItem = menuItemName;
      }
    );

    this.onChangeSectionListOfMenuItemsSubscription = this.onlineFormNavigationService.onChangeSectionListOfMenuItems.subscribe(
      sectionListOfMenuItems => {
        this.sectionListOfMenuItems = sectionListOfMenuItems;
        // sectionListOfMenuItems.length === Object.keys(this.activeMainMenuItems).length;
        // this.goPreviousStep();
      }
    );

    this.onBothLoadedSubscription = this.onlineFormNavigationService.onBothLoaded.subscribe(
      isBothLoaded => {
        this.goToFirstStep();
        this.isBothLoaded = isBothLoaded;
      }
    );
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  getForm(formID: string): void {
    this.onlineFormService.setFromId(formID);
    this.onlineFormService.getOneForm().subscribe((form: Form) => {
      this.form = form["data"];

      console.log(this.form);

      this.activeMainMenuItems = this.getFilteredSections();
      this.onlineFormNavigationService.setActiveMainMenuItems(
        this.activeMainMenuItems
      );

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

  // isStartInitMenu(): boolean | undefined {
  //   let isStartInitMenu: boolean = false;
  //   if (this.sectionListOfMenuItems && this.activeMainMenuItems) {
  //     isStartInitMenu = this.sectionListOfMenuItems.length === Object.keys(this.activeMainMenuItems).length;
  //     return isStartInitMenu;
  //   }
  //   return;
  // }

  onAction(actionType) {
    switch (actionType) {
      case "save":
        this.saveForm();
      case "cancel":
        this.goBack();
    }
  }

  goToFirstStep() {
    this.onlineFormNavigationService.setAtFirstStep();
  }

  goPreviousStep() {
    if (
      this.sectionListOfMenuItems &&
      this.sectionListOfMenuItems.length ===
        Object.keys(this.activeMainMenuItems).length
    ) {
      this.onlineFormNavigationService.previousStep();
    }
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

  ngOnDestroy(): void {
    if (this.onActiveMenuItemSubscription) {
      this.onActiveMenuItemSubscription.unsubscribe();
    }
    if (this.onChangeSectionListOfMenuItemsSubscription) {
      this.onChangeSectionListOfMenuItemsSubscription.unsubscribe();
    }
  }
}
