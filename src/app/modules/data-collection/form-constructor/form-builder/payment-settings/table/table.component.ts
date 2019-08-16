import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-settings-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class PaymentSettingsTableComponent implements OnInit {
  @Input() tableTitle: string = 'Bais Medrash Winter Dormitory Fee';

  constructor() {}

  ngOnInit() {}
}
