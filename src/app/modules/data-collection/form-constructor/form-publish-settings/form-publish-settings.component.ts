import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as cloneDeep from "lodash/cloneDeep";
import { PublishMenuItems } from "../../model/publish-menu-items";

import { SaveFormService } from "../../services/save-form.service";
import { ConstructorDraftService } from "../../services/constructor-draft.service";
import { Subscription } from "rxjs";
import { PublishSettingsIsSavedService } from "../../services/publish-settings-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import {
  IData,
  PublishSettingsEntity,
  AutomationEntity,
  DataEntity,
  ISubMenus,
  IPdfConfig
} from "../../model/publish-settings.model";
import { PublishSettingsService } from "../../services/publish-settings.service";
import { PublishSettingsRemoteService } from "../../services/publish-settings-remote.service";
import { PublishSettingsPublishSettingsService } from "../../services/publish-settings-publish-settings.service";
import { PublishSettingsAutomationService } from "../../services/publish-settings-automation.service";
import { IAutomationListItem } from "src/app/models/data-collection/form-constructor/form-publish-settings/publish-settings.model";

//TODO: remove excess functional
@Component({
  selector: "app-form-publish-settings",
  templateUrl: "./form-publish-settings.component.html",
  styleUrls: ["./form-publish-settings.component.scss"]
})
export class FormPublishSettingsComponent implements OnInit {
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
  isSavedOnServer: boolean = true;

  // Tabs information
  data: IData;

  maxAddedId: number;

  // Loading states
  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vConstructorDraftService: ConstructorDraftService,
    private publishSettingsIsSavedService: PublishSettingsIsSavedService,
    private vPublishSettingsService: PublishSettingsService,
    private vPublishSettingsRemoteService: PublishSettingsRemoteService,
    private publishSettingsService: PublishSettingsPublishSettingsService,
    private automationService: PublishSettingsAutomationService,
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
    // if (VFormPublishSettingsComponent.countSaveFormService < 1) {
    this.saveFormSubscription = this.saveFormService.onSaveForm.subscribe(
      () => {
        this.savePage();
      }
    );
    // }
    FormPublishSettingsComponent.countSaveFormService++;

    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
    this.publishSettingsIsSavedService.setIsSaved(false);
  }

  isDataComplete(data: IData) {
    return !!(data && data.automation && data.publish_settings);
  }

  initPage() {
    let draftData: IData;
    draftData = this.vConstructorDraftService.getDraftForm(this.draftId);

    if (this.isDataComplete(draftData)) {
      this.loadData(draftData);
      this.initServices();
    } else {
      this.onGetDataSubscription = this.vPublishSettingsRemoteService
        .getOneData(this.formId)
        .subscribe(
          (data: IData) => {
            this.loadData(data);
          },
          error => {
            console.error(error, "error");
          },
          () => {
            this.initServices();
          }
        );
    }
  }

  loadData(data: IData) {
    this.maxAddedId = -1;

    // TODO: checking of all fields(automation, publish_settings etc)
    if (this.isDataComplete(data)) {
      this.data = data;
      this.data.automation.automation_list
        // .reverse()
        .forEach(automationItem => {
          automationItem["_id"] =
            automationItem["id"] !== undefined
              ? automationItem["id"]
              : automationItem["_id"];
          if (automationItem["_id"] > this.maxAddedId) {
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
    if (!data.automation) {
      delete data.automation;
    }
    if (!data.publish_settings) {
      delete data.publish_settings;
    }
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
      error => {
        console.error(error, "error");
      },
      () => {}
    );
  }

  initPublishSettingsServices() {
    this.onToggleStateSubscription = this.publishSettingsService.onToggleState.subscribe(
      (state: ISubMenus) => {
        this.setPublishSettingsState(state);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );
    this.onSavePublishSettingsSubscription = this.publishSettingsService.onSavePublishSettings.subscribe(
      (state: ISubMenus) => {
        this.savePublishSettings(state);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );

    this.onToggleOnlineCheckboxSubscription = this.publishSettingsService.onToggleOnlineCheckbox.subscribe(
      (key: string) => {
        this.toggleOnlineCheckbox(key);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );
    this.onTogglePdfCheckboxSubscription = this.publishSettingsService.onTogglePdfCheckbox.subscribe(
      (key: string) => {
        this.togglePdfCheckbox(key);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );
    this.onUpdateFormValueSubscription = this.publishSettingsService.onUpdateFormValue.subscribe(
      (value: any) => {
        this.updateFormValue(value);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );
  }

  initAutomationServices() {
    this.onAddAutomationItemSubscription = this.automationService.onAddAutomationItem.subscribe(
      () => {
        this.addAutomationItem();
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );

    this.onRemoveAutomationItemSubscription = this.automationService.onRemoveAutomationItem.subscribe(
      (itemId: number) => {
        this.removeAutomationItem(itemId);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );

    this.onChangeAutomationItemNameSubscription = this.automationService.onChangeAutomationItemName.subscribe(
      (obj: object) => {
        this.changeAutomationItemName(obj["_id"], obj["name"]);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );

    this.onChangeAutomationItemTypeSubscription = this.automationService.onChangeAutomationItemType.subscribe(
      (obj: object) => {
        this.changeAutomationItemType(obj["_id"], obj["type_id"]);
      },
      error => {
        console.error(error, "error");
      },
      () => {}
    );
  }

  setPublishSettingsState(state: ISubMenus) {
    this.data.publish_settings = { ...this.data.publish_settings, state };
  }

  toggleOnlineCheckbox(key: string) {
    this.isSavedOnServer = false;
    this.data.publish_settings.online_config[key] = !this.data
      .publish_settings.online_config[key];
  }

  togglePdfCheckbox(key: string) {
    this.isSavedOnServer = false;
    this.data.publish_settings.pdf_config[key] = !this.data.publish_settings.pdf_config[key];
  }

  updateFormValue(formValue: IPdfConfig["form_value"]) {
    this.isSavedOnServer = false;
    this.data.publish_settings.pdf_config["form_value"] = formValue;
  }

  savePublishSettings(state: object) {
    this.savePage();
  }

  getStateSub(): ISubMenus {
    return this.data.publish_settings["state"];
  }

  getOnlineConfig() {
    return this.data.publish_settings.online_config;
  }

  getPdfConfig() {
    return this.data.publish_settings.pdf_config;
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

  getAutomationListItemSavingEdition(item: IAutomationListItem) {
    return {
      id: item["id"],
      name: item["name"],
      type_id: item["type_id"],
      template_id: item["template_id"],
      logics: item["logics"]
    };
  }

  prepareDataToSaving(data: IData): IData {
    let finishData = cloneDeep(data);
    delete finishData.automation["logic_list"];
    delete finishData.automation["template_list"];
    delete finishData.automation["type_list"];
    finishData.automation.automation_list = finishData.automation.automation_list.map(item => {
      if (item.id !== 0) {
        item = this.getAutomationListItemSavingEdition(item);
      } else {
        delete item["_id"];
      }
      return item;
    });
    return finishData;
  }

  savePage() {
    if (this.data !== undefined && !this.isDataSaving) {
      this.spinnerText = "Data is saving...";
      this.isDataSaving = true;
      this.constructorIsSavingService.setIsSaving(this.isDataSaving);

      const preparedData = this.prepareDataToSaving(this.data);

      this.onSendDataSubscription = this.vPublishSettingsRemoteService
        .sendData(preparedData, this.formId)
        .subscribe(
          res => {
            this.publishSettingsIsSavedService.setIsSaved(res["updated"]);

            this.isDataSaving = !this.saveFormService.getSavingStatus();
            this.constructorIsSavingService.setIsSaving(this.isDataSaving);

            if (this.isDataSaving) {
              this.spinnerText = "Other tabs are saving...";
            } else {
              this.spinnerText = "Data is loading...";
            }
            this.isSavedOnServer = true;
          },
          error => {
            console.error(error, "error");
            this.isSavedOnServer = true;
          },
          () => {}
        );
    }
    this.vConstructorDraftService.deleteDraftForm(this.draftId);
  }

  public saveDraftForm(): void {
    this.vConstructorDraftService.setDraftForm(this.draftId, this.data);
  }

  addAutomationItem(): number {
    this.isSavedOnServer = false;
    return this.data.automation.automation_list.push(
      {
        ...{ _id: ++this.maxAddedId },
        ...AutomationEntity.defaultAutomation.automation_list[0]
      } //concat ES6
    );
  }

  removeAutomationItem(itemId: number): void {
    this.isSavedOnServer = false;
    this.data.automation.automation_list = this.data.automation.automation_list.filter(automationItem => automationItem["_id"] !== itemId);
  }

  changeAutomationItemName(itemId: number, name: string): void {
    this.isSavedOnServer = false;
    this.data.automation.automation_list = this.data.automation.automation_list.map(automationItem => {
      if (automationItem["_id"] === itemId) {
        automationItem["name"] = name;
      }
      return automationItem;
    });
  }

  changeAutomationItemType(itemId: number, type_id: number): void {
    this.isSavedOnServer = false;
    this.data.automation.automation_list = this.data.automation.automation_list.map(automationItem => {
      if (automationItem["_id"] === itemId) {
        automationItem["type_id"] = type_id;
      }
      return automationItem;
    });
  }

  isLoading(): boolean {
    return (
      this.data !== undefined &&
      !this.isDataSaving &&
      this.publishMenuItems !== undefined
    );
  }

  unsubscribeFromServices() {
    if (this.onURLSubscription) {
      this.onURLSubscription.unsubscribe();
    }
    if (this.onChangeActiveMenuItemSubscription) {
      this.onChangeActiveMenuItemSubscription.unsubscribe();
    }

    if (this.onGetDataSubscription) {
      this.onGetDataSubscription.unsubscribe();
    }
    if (this.onSendDataSubscription) {
      this.onSendDataSubscription.unsubscribe();
    }

    if (this.onToggleStateSubscription) {
      this.onToggleStateSubscription.unsubscribe();
    }
    if (this.onSavePublishSettingsSubscription) {
      this.onSavePublishSettingsSubscription.unsubscribe();
    }
    if (this.onToggleOnlineCheckboxSubscription) {
      this.onToggleOnlineCheckboxSubscription.unsubscribe();
    }
    if (this.onTogglePdfCheckboxSubscription) {
      this.onTogglePdfCheckboxSubscription.unsubscribe();
    }
    if (this.onUpdateFormValueSubscription) {
      this.onUpdateFormValueSubscription.unsubscribe();
    }

    if (this.onAddAutomationItemSubscription) {
      this.onAddAutomationItemSubscription.unsubscribe();
    }
    if (this.onRemoveAutomationItemSubscription) {
      this.onRemoveAutomationItemSubscription.unsubscribe();
    }
    if (this.onChangeAutomationItemNameSubscription) {
      this.onChangeAutomationItemNameSubscription.unsubscribe();
    }
    if (this.onChangeAutomationItemTypeSubscription) {
      this.onChangeAutomationItemTypeSubscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate([`/vertical-data-collection/`]);
  }

  ngOnDestroy(): void {
    if (!this.isSavedOnServer) {
      this.saveDraftForm();
    }
    this.unsubscribeFromServices();
    if (
      FormPublishSettingsComponent.countSaveFormService > 1 &&
      this.saveFormSubscription
    ) {
      this.saveFormSubscription.unsubscribe();
      FormPublishSettingsComponent.countSaveFormService--;
    }
  }
}
