import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Form} from "../../../../model/form.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES} from "../../../../../../enums";
import {TermsConditionsSignature} from "../../../../v-form-constructor/v-form-builder/v-terms-conditions/model/terms-conditions.model";
import {SystemSignatureService} from "../../../services/signatures/system-signature.service";
import {SignatureCreateResponse} from "../../../model/signature-create-response.model";

@Component({
  selector: 'app-online-form-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss'],
})
export class SignaturesComponent implements OnInit {
  @Input() signature: TermsConditionsSignature;

  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;


  constructor(private readonly systemSignatureService: SystemSignatureService) { }

  ngOnInit() { }

}
