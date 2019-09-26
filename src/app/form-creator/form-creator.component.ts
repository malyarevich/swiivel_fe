import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';
import { ActivatedRoute } from '@angular/router';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperService } from '@shared/stepper.service';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreatorComponent implements OnInit {

  workarea: string;
  sections = [
    {name: 'Packet Introduction', workarea: 'intro', component: SidebarIntroComponent, active: true, expanded: true},
    {name: 'Form Fields', workarea: 'fields', component: SidebarFieldsComponent, active: false, expanded: false},
    {name: 'Additional Documents', workarea: 'addDocs', component: SidebarDocumentsFormsComponent, active: false, expanded: false},
    {name: 'CONSENT', workarea: 'consent', component: SidebarConsentComponent, active: false, expanded: false},
    {name: 'TUITION CONTRACT', workarea: '', component: null, active: false, expanded: false},
    {name: 'PAYMENT SETTINGS', workarea: '', component: null, active: false, expanded: false},
    {name: 'TERMS AND CONDITIONS', workarea: 'tac', component: SidebarTermsConditionsComponent, active: false, expanded: false},
    {name: 'FORM PAYMENT', workarea: '', component: null, active: false, expanded: false},
  ];

  @ViewChild('stepper', { static: false }) steppert: CdkStepper;

  constructor(private route: ActivatedRoute, private stepperService: StepperService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('mongo_id')) {
        console.info(`Edit form with ID ${params.get('mongo_id')}`);
      } else {
        console.info(`Create New Form`)
      }
    });
    this.stepperService.stepper$.subscribe((step: string) => {
      if (step === 'next') {
        this.steppert.next();
      } else if (step === 'prev') {
        this.steppert.previous();
      }
    })
    // console.log(route)
  }

  switchWorkarea(workarea: string) {
    this.workarea = workarea;
  }

  prevStep() {
    this.steppert.previous()
  }

  nextStep() {
    this.steppert.next();
  }

}
