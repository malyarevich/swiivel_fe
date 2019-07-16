import { EventEmitter, Injectable } from "@angular/core";
import { ISubMenus } from '../model/publish-settings.model';

@Injectable({
  providedIn: "root"
})
export class VPublishSettingsPublishSettingsService {


  onToggleState: EventEmitter<ISubMenus> = new EventEmitter();
  onSavePublishSettings: EventEmitter<object> = new EventEmitter();

  onToggleOnlineCheckbox: EventEmitter<string> = new EventEmitter();
  onTogglePdfCheckbox: EventEmitter<string> = new EventEmitter();
  onUpdateFormValue: EventEmitter<any> = new EventEmitter();

  // isHideAutomationItemContent: boolean[] = [];

  toggleState(state: ISubMenus) {
    this.onToggleState.emit(state);
  }

  savePublishSettings(state: object) {
    this.onSavePublishSettings.emit(state);
  }

  toggleOnlineCheckbox(key: string) {
    this.onToggleOnlineCheckbox.emit(key);
  }

  togglePdfCheckbox(key: string) {
    this.onTogglePdfCheckbox.emit(key);
  }

  updateFormValue(value: any) {
    this.onUpdateFormValue.emit(value);
  }

  // changeAutomationItemName(value: object) {
  //   this.onChangeAutomationItemName.emit(value);
  // }

  // changeAutomationItemType(value: object) {
  //   this.onChangeAutomationItemType.emit(value);
  // }
  
  // switchAutomationItemContent(id: number) {
  //   this.isHideAutomationItemContent[id] = !this.isHideAutomationItemContent[id];
  //   const obj = {"id": id, "value": this.isHideAutomationItemContent[id]};
  //   this.onSwitchAutomationItemContent.emit(obj);
  // }

}
