import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormService } from '@app/form/form.service';
import { Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { isArray } from 'util';

@Component({
  selector: 'sw-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {

  public expandedSection: string;
  public expanded: boolean = false;

  public form: FormGroup;

  private destroyed$ = new Subject();

  constructor(
    private formService: FormService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      activeSections: this.fb.group({
        packetIntroduction: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        formFields: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        consent: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        termsConditionals: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        documentsForms: this.fb.group({ isActive: [false], showSideInfo: [false] })
      })
    });
    this.formService.form$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((form: FormGroup )=> {
      if (form) {
        this.initForm(form);
      }
    });
    this.formService.section$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(section => {
      this.expandedSection = section;
    });
  }

  ngOnInit() {
  }
  // isActive: [false], showSideInfo: [false]

  initForm(form: any): void {
    if (!form.get('activeSections')) {
      form.addControl('activeSections', this.fb.group({
        packetIntroduction: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        formFields: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        consent: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        termsConditionals: this.fb.group({ isActive: [false], showSideInfo: [false] }),
        documentsForms: this.fb.group({ isActive: [false], showSideInfo: [false] })
      }));
    } else {
      if (!form.get('activeSections.packetIntroduction')) {
        form.get('activeSections').addControl('packetIntroduction', this.fb.group({isActive: [false], showSideInfo: [false]}));
      }
      if (!form.get('activeSections.formFields')) {
        form.get('activeSections').addControl('formFields', this.fb.group({isActive: [false], showSideInfo: [false]}));
      }
      if (!form.get('activeSections.consent')) {
        form.get('activeSections').addControl('consent', this.fb.group({isActive: [false], showSideInfo: [false]}));
      }
      if (!form.get('activeSections.termsConditionals')) {
        form.get('activeSections').addControl('termsConditionals', this.fb.group({isActive: [false], showSideInfo: [false]}));
      }
      if (!form.get('activeSections.documentsForms')) {
        form.get('activeSections').addControl('documentsForms', this.fb.group({isActive: [false], showSideInfo: [false]}));
      }
    }
    this.form = form;
    this.cdr.markForCheck();
  }
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
    if (section !== this.expandedSection) {
      this.expanded = true;
      this.formService.section = section;
    }
  }

  addTermsConditionsItem() {
    let termsConditionsItem = {
      title: "",
      id: "",
      text: "",
      checkbox: {
        isActive: false,
        checked: false,
        text: ""
      }
    };
    if (!isArray(this.form.get('termsConditions.termsConditionsItems').value)) {
      this.form.get('termsConditions.termsConditionsItems').patchValue([]);
    }
    let tmp = this.form.get('termsConditions.termsConditionsItems').value;
    tmp.push(termsConditionsItem);
    this.form.get('termsConditions.termsConditionsItems').patchValue(tmp);
  }


  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
