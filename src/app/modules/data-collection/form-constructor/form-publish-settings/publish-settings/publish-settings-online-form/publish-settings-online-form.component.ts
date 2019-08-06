import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import {
  IOnlineStructure,
  PublishSettingsEntity
} from "../../../../model/publish-settings.model";
import { PublishSettingsPublishSettingsService } from "../../../../services/publish-settings-publish-settings.service";

@Component({
  selector: "app-v-publish-settings-online-form",
  templateUrl: "./publish-settings-online-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./publish-settings-online-form.component.scss"]
})
export class PublishSettingsOnlineFormComponent implements OnInit {
  @Input() onlineConfig: IOnlineStructure;

  onlineStructure = PublishSettingsEntity.onlineStructure;

  constructor(
    private publishSettingsService: PublishSettingsPublishSettingsService
  ) {}

  ngOnInit() {}

  toggleOnlineCheckBox(key: string) {
    this.publishSettingsService.toggleOnlineCheckbox(key);
  }
}
