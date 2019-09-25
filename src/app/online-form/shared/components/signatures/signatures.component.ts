import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
// import { SystemSignatureService } from "../../../services/signatures/system-signature.service";

@Component({
  selector: "sw-online-form-signatures",
  templateUrl: "./signatures.component.html",
  styleUrls: ["./signatures.component.scss"]
})
export class SignaturesComponent implements OnInit {
  @Input() signature: any;

  constructor(
    // private readonly systemSignatureService: SystemSignatureService
  ) {}

  ngOnInit() {}
}
