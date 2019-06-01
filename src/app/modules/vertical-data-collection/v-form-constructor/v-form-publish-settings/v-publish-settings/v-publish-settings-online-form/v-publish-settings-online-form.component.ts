import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ICheckbox } from "../v-publish-settings.component";

@Component({
  selector: "app-v-publish-settings-online-form",
  templateUrl: "./v-publish-settings-online-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings-online-form.component.scss"]
})
export class VPublishSettingsOnlineFormComponent implements OnInit {
  @Input() online: IOnline;
  @Output() onToggleCheckbox: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  toggleOnlineCheckBox(index: number) {
    this.onToggleCheckbox.emit(index);
  }
}

export interface IOnline {
  title: string;
  checkBoxList: ICheckbox[];
}
