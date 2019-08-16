import { Component, Input, OnInit } from "@angular/core";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../enums";

@Component({
  selector: "app-signatures",
  templateUrl: "./signatures.component.html",
  styleUrls: ["./signatures.component.scss"]
})
export class SignaturesComponent implements OnInit {
  @Input() signature: any;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor() {}

  ngOnInit() {}
}
