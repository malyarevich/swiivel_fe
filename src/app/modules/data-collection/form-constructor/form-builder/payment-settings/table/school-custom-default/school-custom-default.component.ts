import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-settings-table-school-custom-default",
  templateUrl: "./school-custom-default.component.html",
  styleUrls: ["./school-custom-default.component.scss"]
})
export class VPaymentSettingsTableSchoolCustomDefaultComponent implements OnInit {
  @Input() optionValues: object = {};
  @Input() isSelected: boolean = false;

  constructor() {}

  ngOnInit() {}
}
