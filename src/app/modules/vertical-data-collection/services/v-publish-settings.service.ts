import { EventEmitter, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  IAutomation,
  IAutomationTemplateListItem,
  IAutomationLogicListItem,
  IData
} from "../model/publish-settings.model";

@Injectable()
export class VPublishSettingsService {
  onChangeActiveMenuItem: EventEmitter<string> = new EventEmitter();

  constructor() {}

  changeActiveMenuItem(activeMenuItem: string) {
    this.onChangeActiveMenuItem.emit(activeMenuItem);
  }
  
}


