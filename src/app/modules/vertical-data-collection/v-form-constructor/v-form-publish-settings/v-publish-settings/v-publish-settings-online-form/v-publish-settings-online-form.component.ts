import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { IOnlineStructure, PublishSettingsItems } from "../../models/publish-settings";

@Component({
  selector: "app-v-publish-settings-online-form",
  templateUrl: "./v-publish-settings-online-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings-online-form.component.scss"]
})
export class VPublishSettingsOnlineFormComponent implements OnInit {
  @Input() onlineConfig: object;
  @Output() onToggleOnlineCheckbox: EventEmitter<string> = new EventEmitter<string>();

  onlineStructure = PublishSettingsItems.onlineStructure;

  constructor() {}

  ngOnInit() { }

  toggleOnlineCheckBox(key: string) {
    this.onToggleOnlineCheckbox.emit(key);
  }
}
