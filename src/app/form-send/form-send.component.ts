import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSendService } from './form-send.service';

@Component({
  selector: 'sw-form-send',
  templateUrl: './form-send.component.html',
  styleUrls: ['./form-send.component.scss']
})
export class FormSendComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formSendService: FormSendService,
  ) {
    this.route.paramMap.subscribe(params => {
      console.log('Activeted ROUT FORM SEND', params);
      if (params.has('id')) {
        this.formSendService.initFormSend(params.get('id'));
      }
    });
  }

  ngOnInit() {
  }

}
