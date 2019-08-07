import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { Form } from "../../../modules/data-collection/model/form.model";
import { E_SIGNATURE_TYPES, SIGNATURE_TYPES } from "../../../enums";
import { SystemSignatureService } from "../../../services/signatures/system-signature.service";
import { SignatureCreateResponse } from "../../../models/shared/signatures/signature-create-response.model";

@Component({
  selector: "app-signatures",
  templateUrl: "./signatures.component.html",
  styleUrls: ["./signatures.component.scss"]
})
export class SignaturesComponent implements OnInit {
  @Input() signature: any;
  // @Input() signature: TermsConditionsSignature;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  constructor( ) {}

  ngOnInit() {}
}
