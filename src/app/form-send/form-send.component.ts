import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSendService } from './form-send.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperService } from '@app/shared/stepper.service';
import { FormService } from '@app/form/form.service';

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
    private formService: FormService,
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    this.route.parent.paramMap.subscribe(params => {
      console.log('Activated route for form-send/id', params);
      if (params.has('id')) {
        this.formSendService.initFormSend(params.get('id'));
      } else {
        this.route.parent.parent.paramMap.subscribe(params => {
          console.log('Activated route for form/id/send', params);
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
