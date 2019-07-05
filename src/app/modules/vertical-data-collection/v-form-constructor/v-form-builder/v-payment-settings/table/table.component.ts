import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-v-payment-settings-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class VPaymentSettingsTableComponent implements OnInit {
  @Input() tableTitle: string = 'Bais Medrash Winter Dormitory Fee';

  constructor() {}

  ngOnInit() {}
}
