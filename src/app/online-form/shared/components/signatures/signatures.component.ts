import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup } from '@angular/forms';
// import { SystemSignatureService } from "../../../services/signatures/system-signature.service";




@Component({
  selector: "sw-online-form-signatures",
  templateUrl: "./signatures.component.html",
  styleUrls: ["./signatures.component.scss"]
})
export class SignaturesComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() signature: any;
  @Input() sourcePage: string; //id for FormControl

  SIGNATURE_TYPES: object = {
    ESIGN: 'esign',
    WET: 'wet',
  }

  E_SIGNATURE_TYPES: object = {
    SYSTEM: 'system',
    EXTERNAL: 'external',
  }

  placeholderText: object = {
    "father": "Father's Signature",
    "mother": "Mother's Signature",
    "parent": "Parent's Signature"
  }

  isDisabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
