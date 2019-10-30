import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES
} from '@app/models/data-collection/signature.model';
// import { SystemSignatureService } from "../../../services/signatures/system-signature.service";

@Component({
  selector: 'sw-online-form-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss']
})
export class SignaturesComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() signature: any;
  @Input() button: any = {};
  @Input() sourcePage: string; // id for FormControl

  SIGNATURE_TYPES: object = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES: object = E_SIGNATURE_TYPES;

  placeholderText: object = {
    father: 'Father\'s Signature',
    mother: 'Mother\'s Signature',
    parent: 'Parent\'s Signature'
  };

  isDisabled = false;

  constructor() {}

  ngOnInit() {}
}
