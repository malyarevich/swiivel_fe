import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import {
  IOnlineStructure,
  PublishSettingsEntity
} from "../../../../model/publish-settings.model";
import { VPublishSettingsPublishSettingsService } from "../../../../services/v-publish-settings-publish-settings.service";

@Component({
  selector: "app-v-publish-settings-online-form",
  templateUrl: "./v-publish-settings-online-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings-online-form.component.scss"]
})
export class VPublishSettingsOnlineFormComponent implements OnInit {
  @Input() onlineConfig: IOnlineStructure;

  onlineStructure = PublishSettingsEntity.onlineStructure;

  constructor(
    private publishSettingsService: VPublishSettingsPublishSettingsService
  ) {}

  ngOnInit() {}

  toggleOnlineCheckBox(key: string) {
    this.publishSettingsService.toggleOnlineCheckbox(key);
  }
}
