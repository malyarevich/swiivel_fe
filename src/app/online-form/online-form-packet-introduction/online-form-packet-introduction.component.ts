import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '@app/models/data-collection/form';

@Component({
  selector: 'sw-online-form-packet-introduction',
  templateUrl: './online-form-packet-introduction.component.html',
  styleUrls: ['./online-form-packet-introduction.component.scss']
})
export class OnlineFormPacketIntroductionComponent implements OnInit {
  @Input() form: Form;
  @Input() formNavigationState: any;
  @Input() currentPosition: object;
  @Input() formErrors: any;
  @Input() fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
