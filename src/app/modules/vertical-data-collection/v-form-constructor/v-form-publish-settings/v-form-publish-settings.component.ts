import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PublishMenuItems } from "./models/publish-menu-items";

import { isEmpty } from "lodash";
import { SaveFormService } from "../../services/save-form.service";
import { VConstructorDraftService } from "../../services/v-constructor-draft.service";
import { Observable, Subscription } from "rxjs";
import { PublishSettingsIsSavedService } from "../../services/publish-settings-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import {
  IPublishSettings,
  IAutomation,
  IData,
  PublishSettingsEntity,
  AutomationEntity,
  DataEntity,
  ISubMenus
} from "../../model/publish-settings.model";
import { VPublishSettingsService } from "../../services/v-publish-settings.service";
import { VPublishSettingsRemoteService } from "../../services/v-publish-settings-remote.service";
import { VPublishSettingsPublishSettingsService } from "../../services/v-publish-settings-publish-settings.service";
import { VPublishSettingsAutomationService } from "../../services/v-publish-settings-automation.service";

//TODO: remove excess functional
@Component({
  selector: "app-v-form-publish-settings",
  templateUrl: "./v-form-publish-settings.component.html",
  styleUrls: ["./v-form-publish-settings.component.scss"]
})
export class VFormPublishSettingsComponent implements OnInit {
  // @Input() saveEvents: Observable<void>;
  formId: string;
  draftId: string;

  // for subscriptions that watch for Save
  static countSaveFormService: number = 0;
  saveFormSubscription: Subscription;
  
  // URL Subscriptions
  onURLSubscription: Subscription;
  
  // Active Menu Item Subscriptions
  onChangeActiveMenuItemSubscription: Subscription;

  // Remote Service Subscriptions
  onGetDataSubscription: Subscription;
  onSendDataSubscription: Subscription;
  
  // PublishSettings Subscriptions
  onToggleStateSubscription: Subscription;
  onSavePublishSettingsSubscription: Subscription;
  onToggleOnlineCheckboxSubscription: Subscription;
  onTogglePdfCheckboxSubscription: Subscription;
  onUpdateFormValueSubscription: Subscription;
  
  // Automation Subscriptions
  onAddAutomationItemSubscription: Subscription;
  onRemoveAutomationItemSubscription: Subscription;
  onChangeAutomationItemNameSubscription: Subscription;
  onChangeAutomationItemTypeSubscription: Subscription;

  // Menu state
  activeMenuItem: string;
  publishMenuItems = PublishMenuItems;

  // Tabs information
  data: IData;

  maxAddedId: number;

  // Loading states
  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vConstructorDraftService: VConstructorDraftService,
    private publishSettingsIsSavedService: PublishSettingsIsSavedService,
    private vPublishSettingsService: VPublishSettingsService,
    private vPublishSettingsRemoteService: VPublishSettingsRemoteService,
    private publishSettingsService: VPublishSettingsPublishSettingsService,
    private automationService: VPublishSettingsAutomationService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private saveFormService: SaveFormService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.prepareSaving();

    this.onURLSubscription = this.route.parent.url.subscribe(urlPath => {
      const url = urlPath[urlPath.length - 1].path;
      this.formId = url != "v-form-constructor" ? url : "";
      this.draftId = this.formId + "_publish-setting";

      this.initPage();
    });
  }

  prepareSaving() {
    if (VFormPublishSettingsComponent.countSaveFormService < 1) {
      this.saveFormSubscription = this.saveFormService.onSaveForm.subscribe(
        () => {
          this.savePage();
        }
      );
    }
    VFormPublishSettingsComponent.countSaveFormService++;

    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
    this.publishSettingsIsSavedService.setIsSaved(false);
  }

  initPage() {
    let  draftData: IData;
    draftData = this.vConstructorDraftService.getDraftForm(this.draftId);

    if (draftData !== undefined) {
      this.loadData(draftData);
      this.initServices();
    } else {
      this.onGetDataSubscription = this.vPublishSettingsRemoteService.getOneData(this.formId).subscribe(
        (data: IData) => {
          this.loadData(data);
        },
        error => console.log(error, "error"),
        () => {
          this.initServices();
        }
      );
    }
  }

  loadData(data: IData) {
    this.maxAddedId = -1;

    // TODO: checking of all fields(automation, publish_settings etc)
    if (data !== undefined) {
      this.data = data;
      this.data["automation"]["automation_list"]
        .reverse()
        .forEach(automationItem => {
          if (automationItem["id"] > this.maxAddedId) {
            this.maxAddedId = automationItem["id"];
          }
        });
    } else {
      this.setDefaultData(data);
    }
  }

  initServices() {
    this.initPageServices();
    this.initPublishSettingsServices();
    this.initAutomationServices();
  }

  setDefaultData(data: IData) {
    this.data = {
      ...DataEntity.defaultData,
      ...data
    };
  }

  initPageServices() {
    this.activeMenuItem = PublishMenuItems.conditions;
    this.onChangeActiveMenuItemSubscription = this.vPublishSettingsService.onChangeActiveMenuItem.subscribe(
      (activeMenuItem: string) => {
        this.activeMenuItem = activeMenuItem;
      },
      error => console.log(error, "error"),
      () => {}
    );
  }

  initPublishSettingsServices() {
    this.onToggleStateSubscription = this.publishSettingsService.onToggleState.subscribe(
      (state: ISubMenus) => {
        this.setPublishSettingsState(state);
      },
      error => console.log(error, "error"),
      () => {}
    );
    this.onSavePublishSettingsSubscription = this.publishSettingsService.onSavePublishSettings.subscribe(
      (state: ISubMenus) => {
        this.savePublishSettings(state);
      },
      error => console.log(error, "error"),
      () => {}
    );

    this.onToggleOnlineCheckboxSubscription = this.publishSettingsService.onToggleOnlineCheckbox.subscribe(
      (key: string) => {
        this.toggleOnlineCheckbox(key);
      },
      error => console.log(error, "error"),
      () => {}
    );
    this.onTogglePdfCheckboxSubscription = this.publishSettingsService.onTogglePdfCheckbox.subscribe(
      (key: string) => {
        this.togglePdfCheckbox(key);
      },
      error => console.log(error, "error"),
      () => {}
    );
    this.onUpdateFormValueSubscription = this.publishSettingsService.onUpdateFormValue.subscribe(
      (value: any) => {
        this.updateFormValue(value);
      },
      error => console.log(error, "error"),
      () => {}
    );
  }

  initAutomationServices() {
    this.onAddAutomationItemSubscription = this.automationService.onAddAutomationItem.subscribe(
      () => {
        this.addAutomationItem();
      },
      error => console.log(error, "error"),
      () => {}
    );

    this.onRemoveAutomationItemSubscription = this.automationService.onRemoveAutomationItem.subscribe(
      (itemId: number) => {
        this.removeAutomationItem(itemId);
      },
      error => console.log(error, "error"),
      () => {}
    );

    this.onChangeAutomationItemNameSubscription = this.automationService.onChangeAutomationItemName.subscribe(
      (obj: object) => {
        this.changeAutomationItemName(obj["id"], obj["name"]);
      },
      error => console.log(error, "error"),
      () => {}
    );

    this.onChangeAutomationItemTypeSubscription = this.automationService.onChangeAutomationItemType.subscribe(
      (obj: object) => {
        this.changeAutomationItemType(obj["id"], obj["type_id"]);
      },
      error => console.log(error, "error"),
      () => {}
    );
  }

  setPublishSettingsState(state: ISubMenus) {
    this.data["publish_settings"] = { ...this.data["publish_settings"], state };
  }

  toggleOnlineCheckbox(key: string) {
    this.data["publish_settings"]["online_config"][key] = !this.data[
      "publish_settings"
    ]["online_config"][key];
  }

  togglePdfCheckbox(key: string) {
    this.data["publish_settings"]["pdf_config"][key] = !this.data[
      "publish_settings"
    ]["pdf_config"][key];
  }

  updateFormValue(formValue: object) {
    this.data["publish_settings"]["pdf_config"]["form_value"] = formValue;
  }

  savePublishSettings(state: object) {
    this.savePage();
  }

  setStateSub(newState: ISubMenus): void {
    this.data["publish_settings"]["state"] = newState;
  }

  getStateSub(): ISubMenus {
    return this.data["publish_settings"]["state"];
  }

  getOnlineConfig() {
    return this.data["publish_settings"]["online_config"];
  }

  getPdfConfig() {
    return this.data["publish_settings"]["pdf_config"];
  }

  getPublishSettingValidOrDefault(publishSettings): any {
    if (publishSettings) {
      return publishSettings;
    }
    return {
      state: PublishSettingsEntity.defaultStateSub,
      online_config: { ...PublishSettingsEntity.defaultOnlineConfig },
      pdf_config: { ...PublishSettingsEntity.defaultPdfConfig }
    };
  }

  savePage() {
    if (
      (this.data !== undefined ||
        this.data["publishSettings"] ||
        this.data["automation"]) &&
      !this.isDataSaving
    ) {
      this.spinnerText = "Data is saving...";
      this.isDataSaving = true;
      this.constructorIsSavingService.setIsSaving(this.isDataSaving);

      this.onSendDataSubscription = this.vPublishSettingsRemoteService
        .sendData(this.data, this.formId)
        .subscribe(res => {
          this.publishSettingsIsSavedService.setIsSaved(res["updated"]);

          this.isDataSaving = !this.saveFormService.getSavingStatus();
          this.constructorIsSavingService.setIsSaving(this.isDataSaving);

          if (this.isDataSaving) {
            this.spinnerText = "Other tabs are saving...";
          } else {
            this.spinnerText = "Data is loading...";
          }
        });
    }
    this.vConstructorDraftService.deleteDraftForm(this.draftId);
  }

  public saveDraftForm(): void {
    this.vConstructorDraftService.setDraftForm(this.draftId, this.data);
  }

  addAutomationItem(): number {
    return this.data["automation"]["automation_list"].push(
      {
        ...{ id: ++this.maxAddedId },
        ...AutomationEntity.defaultAutomation.automation_list[0]
      } //concat ES6
    );
  }

  removeAutomationItem(itemId: number): void {
    this.data["automation"]["automation_list"] = this.data["automation"][
      "automation_list"
    ].filter(automationItem => automationItem["id"] !== itemId);
  }

  changeAutomationItemName(itemId: number, name: string): void {
    this.data["automation"]["automation_list"] = this.data["automation"][
      "automation_list"
    ].map(automationItem => {
      if (automationItem["id"] === itemId) {
        automationItem["name"] = name;
      }
      return automationItem;
    });
  }

  changeAutomationItemType(itemId: number, type_id: number): void {
    const indexItem = this.data["automation"]["automation_list"].findIndex(
      item => item.id === itemId
    );
    this.data["automation"]["automation_list"][indexItem] = {
      ...this.data["automation"]["automation_list"][indexItem],
      type_id: type_id
    };
  }

  isLoading(): boolean {
    return (
      this.data !== undefined &&
      this.data["publish_settings"] !== undefined &&
      this.data["automation"] !== undefined &&
      !this.isDataSaving &&
      this.publishMenuItems !== undefined
    );
  }

  unsubscribeFromServices() {
    if(this.onURLSubscription) {
      this.onURLSubscription.unsubscribe();
    }
    if(this.onChangeActiveMenuItemSubscription) {
      this.onChangeActiveMenuItemSubscription.unsubscribe();
    }

    if(this.onGetDataSubscription) {
      this.onGetDataSubscription.unsubscribe();
    }
    if(this.onSendDataSubscription) {
      this.onSendDataSubscription.unsubscribe();
    }

    if(this.onToggleStateSubscription) {
      this.onToggleStateSubscription.unsubscribe();
    }
    if(this.onSavePublishSettingsSubscription) {
      this.onSavePublishSettingsSubscription.unsubscribe();
    }
    if(this.onToggleOnlineCheckboxSubscription) {
      this.onToggleOnlineCheckboxSubscription.unsubscribe();
    }
    if(this.onTogglePdfCheckboxSubscription) {
      this.onTogglePdfCheckboxSubscription.unsubscribe();
    }
    if(this.onUpdateFormValueSubscription) {
      this.onUpdateFormValueSubscription.unsubscribe();
    }

    if(this.onAddAutomationItemSubscription) {
      this.onAddAutomationItemSubscription.unsubscribe();
    }
    if(this.onRemoveAutomationItemSubscription) {
      this.onRemoveAutomationItemSubscription.unsubscribe();
    }
    if(this.onChangeAutomationItemNameSubscription) {
      this.onChangeAutomationItemNameSubscription.unsubscribe();
    }
    if(this.onChangeAutomationItemTypeSubscription) {
      this.onChangeAutomationItemTypeSubscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate([`/vertical-data-collection/`]);
  }

  ngOnDestroy(): void {
    this.saveDraftForm();
    this.unsubscribeFromServices();
    if (
      VFormPublishSettingsComponent.countSaveFormService > 1 &&
      this.saveFormSubscription
    ) {
      this.saveFormSubscription.unsubscribe();
      VFormPublishSettingsComponent.countSaveFormService--;
    }
  }
}
