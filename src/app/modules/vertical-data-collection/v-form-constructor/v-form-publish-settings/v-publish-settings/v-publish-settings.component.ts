import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { IPublishSettings } from "../../../model/publish-settings.model";

@Component({
  selector: "app-v-publish-settings",
  templateUrl: "./v-publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings.component.scss"]
})
export class VPublishSettingsComponent implements OnInit {
  @Input() publish_settings: IPublishSettings;

  constructor() {}

  ngOnInit() { }
}
