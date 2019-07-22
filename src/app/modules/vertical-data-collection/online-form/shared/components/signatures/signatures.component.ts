import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../../../../enums";
import { SystemSignatureService } from "../../../services/signatures/system-signature.service";
import {TermsConditionsSignature} from "../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/terms-conditions.model";


@Component({
  selector: "app-online-form-signatures",
  templateUrl: "./signatures.component.html",
  styleUrls: ["./signatures.component.scss"]
})
export class SignaturesComponent implements OnInit {
  @Input() signature: TermsConditionsSignature;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor(
    private readonly systemSignatureService: SystemSignatureService
  ) {}

  ngOnInit() {}
}
