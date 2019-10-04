import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SidebarConsentComponent } from './sidebar/consent.component';
import { SidebarDocumentsFormsComponent } from './sidebar/documents-forms.component';
import { SidebarFieldsComponent } from './sidebar/fields.component';
import { SidebarIntroComponent } from './sidebar/intro.component';
import { SidebarTermsConditionsComponent } from './sidebar/terms-conditions.component';
import { ActivatedRoute } from '@angular/router';
import { CdkStepper } from '@angular/cdk/stepper';
import { StepperService } from '@shared/stepper.service';
import { FormCreatorService } from './form-creator.service';
import { ApiService } from '@app/core/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'sw-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreatorComponent implements OnInit {
  defaults = {
    'packetIntroduction': {
      'sectionName': 'Packet Introduction',
      'sectionWidth': 'full'
    },
    'documentsForms': {
      'documents': {
        'sectionName': 'Documents for Parents',
        'sectionWidth': 'full'
      },
      'formsPDF': {
        'sectionName': 'School Forms',
        'sectionWidth': 'full'
      },
    },
    'consent': {
      'sectionName': 'Parent Consent',
      'sectionWidth': 'full'
    },
    'termsConditions': {
      'sectionName': 'Terms and Conditions',
      'sectionWidth': 'full'
    }
  };
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
  data;
  form_id;
  action = 'create';
  destroyed$ = new Subject();

  @ViewChild('stepper', { static: false }) steppert: CdkStepper;

  constructor(
    private route: ActivatedRoute,
    private service: FormCreatorService,
    private stepperService: StepperService,
    private api: ApiService,
    private cdr: ChangeDetectorRef) {

   }

   ngOnDestroy() {
     this.destroyed$.next(true);
     this.destroyed$.complete();
   }


  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      if (params.has('mongo_id')) {
        console.info(`Edit form with ID ${params.get('mongo_id')}`);
        this.api.getFormTemplate(params.get('mongo_id')).subscribe(v => {
          console.log('form creator', v)
          this.form_id = params.get('mongo_id');
          if (v) {
              this.service.formId = params.get('mongo_id');
              this.service.formTemplate = v;
              this.cdr.detectChanges()
            }
          this.sections.forEach((section) => {
            if (section.active === true && section.expanded === true) {
              this.switchWorkarea(section.workarea);
              return
            }
          });
          this.switchWorkarea(this.sections[0].workarea);
        });
      } else {
        // this.service.createForm(this.defaults);
        console.info(`Create New Form`);
        this.service.formId = null;
        this.service.formTemplate = null;
      }
    });
    this.stepperService.stepper$.subscribe((step: string) => {
      if (step === 'next') {
        this.nextStep();
      } else if (step === 'prev') {
        this.prevStep();
      }
    })
    // console.log(route)
  }

  switchWorkarea(workarea: string) {
    this.workarea = workarea;
  }

  prevStep() {
    if (this.steppert) {
      this.steppert.previous()
    }
  }

  nextStep() {
    if (this.steppert) {
      this.steppert.next();
    }
  }

}
