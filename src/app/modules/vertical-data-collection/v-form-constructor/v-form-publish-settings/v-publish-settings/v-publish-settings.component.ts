import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { IPublishSettings } from "../../../model/publish-settings.model";
import { VPublishSettingsRemoteService } from '../../../services/v-publish-settings-remote.service';
import { VPublishSettingsService } from '../../../services/v-publish-settings.service';
import { PublishMenuItems } from "../../../model/publish-menu-items";

@Component({
  selector: "app-v-publish-settings",
  templateUrl: "./v-publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings.component.scss"]
})
export class VPublishSettingsComponent implements OnInit {
  @Input() publish_settings: IPublishSettings;
  @Input() id: string;

  isSaving: boolean = false;

  constructor(
    private vPublishSettingsRemoteService: VPublishSettingsRemoteService,
    private vPublishSettingsService: VPublishSettingsService
  ) {}

  ngOnInit() { }

  savePublishSettings() {
    this.isSaving = true;
    this.vPublishSettingsRemoteService.sendData({"publish_settings": this.publish_settings}, this.id).subscribe(
      () => {
        this.isSaving = false;
        console.log("Publish Settings successfully saved!");
        // this.vPublishSettingsService.changeActiveMenuItem(PublishMenuItems.automation);
      },
      (error) => {
        this.isSaving = false;
        console.error(error);
        console.log("Error saving publish settings!");
      },
      () => {
        this.isSaving = false;
        this.vPublishSettingsService.changeActiveMenuItem(PublishMenuItems.automation);
      }
    );

  }
}
