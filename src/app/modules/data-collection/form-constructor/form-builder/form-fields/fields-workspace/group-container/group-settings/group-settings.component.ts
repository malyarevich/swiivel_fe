import { Component, Input, OnInit } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";

@Component({
  selector: "app-group-settings",
  templateUrl: "./group-settings.component.html",
  styleUrls: ["./group-settings.component.scss"]
})
export class GroupSettingsComponent implements OnInit {
  @Input() inputGroup;
  @Input() form: Form;

  tab: string = "settings";

  constructor() {}

  ngOnInit() {}
}
