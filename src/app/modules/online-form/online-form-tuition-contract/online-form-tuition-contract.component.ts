import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {
  TuitionContract,
  TuitionContractSignature
} from "../../vertical-data-collection/v-form-constructor/v-form-builder/v-tuition-contract/models/tuition-contract.model";
import {E_SIGNATURE_TYPES, SIGNATURE_TYPES, TUITION_CONTRACT_SPLIT_TYPES} from "../../../enums";
import {SystemSignatureService} from "../../../services/online-form/signatures/system-signature.service";
import {SignatureCreateResponse} from "../model/signature-create-response.model";
import {Form} from "../../vertical-data-collection/model/form.model";

@Component({
  selector: 'app-online-form-tuition-contract',
  templateUrl: './online-form-tuition-contract.component.html',
  styleUrls: ['./online-form-tuition-contract.component.css']
})
export class OnlineFormTuitionContractComponent implements OnInit {
  @Input() form: Form;

  TUITION_CONTRACT_SPLIT_TYPES = TUITION_CONTRACT_SPLIT_TYPES;
  SIGNATURE_TYPES = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES = E_SIGNATURE_TYPES;

  signature: TuitionContractSignature;

  constructor(private readonly systemSignatureService: SystemSignatureService) {
  }

  ngOnInit() {
    this.signature = cloneDeep(this.form.tuitionContract.signature)
  }

  onSystemSign() {
    Object.keys(this.signature.signed).map((item) => {
      if (this.signature.signed[item]) this.saveSystemSign(item, 'tuitionContract');
    });
  }

  saveSystemSign(personsType, itemType) {

    this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
      .subscribe((res: SignatureCreateResponse) => {
        this.form.tuitionContract.signature.signed[personsType] = res.created;
      });
  }

  isDisabledSign(personsType) {
    return this.form.tuitionContract.signature.signed[personsType]
  }

}
