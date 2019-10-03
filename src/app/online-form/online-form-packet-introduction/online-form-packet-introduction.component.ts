import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { cloneDeep } from "lodash";
import { Form, ISectionTab } from "@app/models/data-collection/form";

@Component({
  selector: "sw-online-form-packet-introduction",
  templateUrl: "./online-form-packet-introduction.component.html",
  styleUrls: ["./online-form-packet-introduction.component.scss"]
})
export class OnlineFormPacketIntroductionComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  packets: ISectionTab[];

  constructor() {}

  ngOnInit() {
    // console.log(this.formNavigationState);
    if (this.formNavigationState) {
      this.initPackets();
    }
  }

  initPackets() {
    if (this.form.packetIntroduction) {
      this.packets = <ISectionTab[]>cloneDeep(
        this.form.packetIntroduction.packets
      ).map(item => {
        return { ...item, _id: item.id, name: item.title };
      });
    } else {
      this.packets = <ISectionTab[]>cloneDeep(
        this.form.packetIntroduction.packets
      ).map(item => {
        return { ...item, _id: item.id, name: item.title };
      });
    }
  }

  isExist(): boolean {
    return (
      typeof this.form.packetIntroduction !== "undefined" &&
      this.form.packetIntroduction.packets &&
      this.form.packetIntroduction.packets.length > 0
    );
  }

  isShowPacket(packetIndex: number): boolean {
    return this.currentPosition["tab"] === packetIndex;
  }
}
