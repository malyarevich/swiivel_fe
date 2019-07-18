import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VPublishSettingsAutomationService {
  onAddAutomationItem: EventEmitter<any> = new EventEmitter();
  onRemoveAutomationItem: EventEmitter<number> = new EventEmitter();
  onChangeAutomationItemName: EventEmitter<object> = new EventEmitter();
  onChangeAutomationItemType: EventEmitter<object> = new EventEmitter();
  onSwitchAutomationItemContent: EventEmitter<object> = new EventEmitter();

  isHideAutomationItemContent: boolean[] = [];

  addAutomationItem() {
    this.onAddAutomationItem.emit();
  }

  removeAutomationItem(value: number) {
    this.onRemoveAutomationItem.emit(value);
  }

  changeAutomationItemName(value: object) {
    this.onChangeAutomationItemName.emit(value);
  }

  changeAutomationItemType(value: object) {
    this.onChangeAutomationItemType.emit(value);
  }
  
  switchAutomationItemContent(id: number) {
    this.isHideAutomationItemContent[id] = !this.isHideAutomationItemContent[id];
    const obj = {"id": id, "value": this.isHideAutomationItemContent[id]};
    this.onSwitchAutomationItemContent.emit(obj);
  }

}
