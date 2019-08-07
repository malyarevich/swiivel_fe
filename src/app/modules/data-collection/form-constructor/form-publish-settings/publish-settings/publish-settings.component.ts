import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import { IPublishSettings } from "../../../model/publish-settings.model";
import { PublishSettingsRemoteService } from '../../../services/publish-settings-remote.service';
import { PublishSettingsService } from '../../../services/publish-settings.service';
import { PublishMenuItems } from "../../../model/publish-menu-items";

@Component({
  selector: "app-publish-settings",
  templateUrl: "./publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./publish-settings.component.scss"]
})
export class PublishSettingsComponent implements OnInit {
  @Input() publish_settings: IPublishSettings;
  @Input() id: string;

  isSaving: boolean = false;

  constructor(
    private vPublishSettingsRemoteService: PublishSettingsRemoteService,
    private vPublishSettingsService: PublishSettingsService
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
