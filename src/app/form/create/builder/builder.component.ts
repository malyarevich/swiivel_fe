import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormService } from '@app/form/form.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { isArray } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'sw-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent implements OnInit, OnDestroy {

  public expandedSection: string = 'packetIntroduction';
  public expanded: boolean = false;

  public form: FormGroup;
  public formSubscription: Subscription;
  public sectionsNames = ['packetIntroduction','formFields', 'consent', 'termsConditionals', 'documentsForms'];

  private destroyed$ = new Subject();

  constructor(
    private formService: FormService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.cdr.detach();

    this.formService.stage$.next(1);
    this.formService.form$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((form: FormGroup )=> {
      if (form) {
        this.form = form;
        let changedForm;
        if (!this.form.get('attachments')) {
          if (!changedForm) changedForm = cloneDeep(form);
          changedForm.addControl('attachments', this.fb.group({ }));
        }
        if (!this.form.get('packetIntroduction')) {
          if (!changedForm) changedForm = cloneDeep(form);
          changedForm.addControl('packetIntroduction', this.fb.group({
            sectionName: ['Packet Introduction'],
            sectionWidth: ['full'],
            content: ['']
          }));
        }
        if (!this.form.get('consentInfo')) {
          if (!changedForm) changedForm = cloneDeep(form);
          changedForm.addControl('consentInfo', this.fb.group({
            sectionName: ['Consent Section'],
            sectionWidth: ['full'],
            consents: this.fb.array([])
          }));
        }
        if (!this.form.get('activeSections')) {
          if (!changedForm) changedForm = cloneDeep(form);
          changedForm.addControl('activeSections', this.fb.group({
            packetIntroduction: this.fb.group({ isActive: [false], showSideInfo: [false] }),
            formFields: this.fb.group({ isActive: [false], showSideInfo: [false] }),
            consent: this.fb.group({ isActive: [false], showSideInfo: [false] }),
            termsConditionals: this.fb.group({ isActive: [false], showSideInfo: [false] }),
            documentsForms: this.fb.group({ isActive: [false], showSideInfo: [false] })
          }));
        } else {
          if (!changedForm) changedForm = cloneDeep(form);
          let changedFields = 0;
          for (const section of this.sectionsNames) {
            if (!changedForm.get(['activeSections', section])) {
              changedFields++;
              (changedForm.get('activeSections') as FormGroup).addControl(section, this.fb.group({isActive: [false], showSideInfo: [false]}));
            }
            else {
              this.form.get(['activeSections', section, 'showSideInfo']).setValue(false);
            }
          }
          if (changedFields === 0) changedForm = null;
        }
        if (changedForm) {
          this.formService.form = changedForm;
        } else {
          this.cdr.markForCheck();
          if (this.formSubscription) this.formSubscription.unsubscribe();
          this.formSubscription = this.form.valueChanges.subscribe((value) => {
            console.groupCollapsed('Form value changed');
            console.log(value);
            console.groupEnd();
          });
        }
        this.cdr.reattach();
      }
    });
    
  }

  ngOnInit() {
  }
  // isActive: [false], showSideInfo: [false]

  
  activeToggle(field) {
    console.log(field, this.form.get('activeSections.formFields'))
  }

  isOpen(): boolean {
    return this.expanded;
  }

  isExpanded(section: string): boolean {
    return this.expandedSection === section;
  }

  getIcon(): string {
    return this.expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  toggleSection(): void {
    this.expanded = !this.expanded;
  }

  onClick(section: string, event?: MouseEvent): void {
    // if (event) {
    //   if (!(event.target as HTMLElement).classList.contains('sidebar_section')) {
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    //     console.log('button')
    //   }
    // }
    let showControl = this.form.get(['activeSections', section, 'showSideInfo']);
    if (showControl.value === false) {
      let activeSections = {};
      for (const sectionName of this.sectionsNames) {
        activeSections[sectionName] = {showSideInfo: false};
      }
      activeSections[section]['showSideInfo'] = true;
      this.form.get('activeSections').patchValue(activeSections);
      this.expandedSection = section;
    } else {
      console.log(this.form.get('activeSections').pristine)
      showControl.setValue(false);
      this.expandedSection = null;
    }
    this.cdr.markForCheck()
  }

  addTermsConditionsItem() {
    let termsConditionsItem = this.fb.group({
      title: [""],
      id: [""],
      text: [""],
      checkbox: this.fb.group({
        isActive: false,
        checked: false,
        text: ""
      })
    });
    (this.form.get('termsConditions.termsConditionsItems') as FormArray).push(termsConditionsItem);
  }

  prevStep() {
    console.log(this.formService.form);;
    this.router.navigate(['form', this.form.value._id, 'create', 'general']);
  }

  nextStep() {
    this.formService.saveForm().subscribe((res) => {
      this.router.navigate(['form', res._id, 'create', 'review']);
    });
  }


  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
