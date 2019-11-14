import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSendService } from '@form-send/form-send.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperService } from '@app/shared/stepper.service';
import { FormService } from '../form.service';

@Component({
  selector: 'sw-send',
  templateUrl: 'send.component.html',
  styleUrls: ['send.component.scss']
})
export class SendComponent implements OnInit {

  @ViewChild('stepper', { static: false }) steppert: CdkStepper;
  constructor(
    private route: ActivatedRoute,
    private stepperService: StepperService,
    private formSendService: FormSendService,
    private formService: FormService,
  ) {}

  ngOnInit() {
    this.route.parent.parent.paramMap.subscribe(params => {
      console.log('Activeted ROUT FORM SEND', params);
      if (params.has('formId')) {
        this.formSendService.initFormSend(params.get('formId'));
      } else {
        this.formService.form$.subscribe((form) => {
          //  console.log(form);
          const formId = form.value._id;
          if(formId) {
            console.log('sendComponent id', formId);
            this.formSendService.initFormSend(formId);
          }
        });
      }
    });

    this.stepperService.stepper$.subscribe((step: string) => {
      if (step === 'next') {
        this.steppert.next();
      } else if (step === 'prev') {
        this.steppert.previous();
      }
    });
  }

}
