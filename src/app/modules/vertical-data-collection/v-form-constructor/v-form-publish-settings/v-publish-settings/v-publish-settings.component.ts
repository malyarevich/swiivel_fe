import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { ISubMenus } from "../models/publish-settings";

@Component({
  selector: "app-v-publish-settings",
  templateUrl: "./v-publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings.component.scss"]
})
export class VPublishSettingsComponent implements OnInit {
  @Input() publish_settings: object;
  @Output() onToggleOnlineCheckbox: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTogglePdfCheckbox: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUpdateFormValue: EventEmitter<object> = new EventEmitter<object>();
  @Output() onSavePublishSettings: EventEmitter<object> = new EventEmitter<object>();

  constructor() {}

  ngOnInit() { }

  toggleOnlineCheckbox(key: string) {
    this.onToggleOnlineCheckbox.emit(key);
  }

  togglePdfCheckbox(key: string) {
    this.onTogglePdfCheckbox.emit(key);
  }

  updateFormValue(formValues: object) {
    this.onUpdateFormValue.emit(formValues);
  }

  savePublishSettings(state: object) {
    this.onSavePublishSettings.emit(state);
  }
}
