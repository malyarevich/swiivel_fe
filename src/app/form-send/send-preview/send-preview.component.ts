import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSendService } from '../form-send.service';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit {

  id: string;
  formType: string = 'generic';
  filter: FormControl = new FormControl('');
  buttonOptions = [
    {
      label: 'Generic Form',
      value: 'generic'
    },
    {
      label: 'Account Form',
      value: 'account'
    }
  ]

  constructor(
    private formSendService: FormSendService
  ) {
    this.id = this.formSendService.formId;
  }

  ngOnInit() { }

  onBack(event): void {
    if (event) {
      console.log('onBack', event);
    }
  }

  onSaveNext(event): void {
    if (event) {
      console.log('onSaveNext', event);
    }
  }

}
