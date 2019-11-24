import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel, ISectionTab } from '@models/data-collection/form.model';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from '@models/data-collection/online-form/menu.model';
import { ICurrentPosition, IFormNavigationState } from '../models/online-form.model';

@Component({
  selector: 'sw-online-form-packet-introduction',
  templateUrl: './online-form-packet-introduction.component.html',
  styleUrls: ['./online-form-packet-introduction.component.scss']
})
export class OnlineFormPacketIntroductionComponent implements OnInit {
  @Input() form: FormModel;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
  @Input() fg: FormGroup;

  packets: ISectionTab[];

  constructor() {}

  ngOnInit() {
    this.fg.patchValue({...this.fg.value, [mainMenuNames.packetIntroduction]: ''});
  }

  isExist(): boolean {
    return (
      typeof this.form.packetIntroduction !== 'undefined' &&
      this.form.packetIntroduction &&
      this.form.packetIntroduction.content !== ''
    );
    // return (
    //   typeof this.form.packetIntroduction !== "undefined" &&
    //   this.form.packetIntroduction.packets &&
    //   this.form.packetIntroduction.packets.length > 0
    // );
  }

  isShowPacket(packetIndex: number): boolean {
    return this.currentPosition.tab === packetIndex;
  }
}
