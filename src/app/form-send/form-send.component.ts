import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSendService } from './form-send.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperService } from '@app/shared/stepper.service';

@Component({
  selector: 'sw-form-send',
  templateUrl: './form-send.component.html',
  styleUrls: ['./form-send.component.scss']
})
export class FormSendComponent implements OnInit {

  @ViewChild('stepper', { static: false }) steppert: CdkStepper;
  constructor(
    private route: ActivatedRoute,
    private stepperService: StepperService,
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
    this.stepperService.stepper$.subscribe((step: string) => {
      if (step === 'next') {
        this.steppert.next();
      } else if (step === 'prev') {
        this.steppert.previous();
      }
    });
  }

}
