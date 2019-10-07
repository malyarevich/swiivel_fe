import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ISignature } from 'src/app/models/data-collection/signature.model';
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES,
  TUITION_CONTRACT_SPLIT_TYPES
} from "src/app/enums";

@Component({
  selector: "app-signature-sidebar",
  templateUrl: "./signature-sidebar.component.html",
  styleUrls: ["./signature-sidebar.component.scss"]
})
export class SignatureSidebarComponent implements OnInit {
  @Input() signature: ISignature;
  @Output() onChangeSignature: EventEmitter<ISignature> = new EventEmitter;
  SIGNATURE_TYPES = SIGNATURE_TYPES;

  constructor() {}

  ngOnInit() {}

  changeSignatureType(event) {
    console.log(event);
    // this.signature.type = event;
    this.onChangeSignature.emit(this.signature);
  }
  
  changeSignatureEType(event) {
    console.log(event);
    // this.signature.type = event;
    this.onChangeSignature.emit(this.signature);
  }
  
  changeSignatureIsBoth() {
    this.signature.isBothParents = !this.signature.isBothParents;
    this.onChangeSignature.emit(this.signature);
  }
}