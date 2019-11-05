import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormService } from '@app/form/form.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DateTime } from 'luxon';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnDestroy {

  public buttonOptions = [
    {
      label: 'CREATE NEW FORM',
      value: false
    },
    {
      label: 'DUPLICATE EXISTING',
      value: true
    }
  ];
  public typeOptions = ['Registration', 'Application'].map(v => { return { title: v, value: v.toLocaleLowerCase() } });
  public newForm: boolean = true;
  public generalForm: FormGroup;
  public filter: FormControl = new FormControl('');
  public forms = {};
  public forms$ = new BehaviorSubject<any[]>([]);
  public sm: SelectionModel<any> = new SelectionModel(false);

  private destroyed$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private formService: FormService,
    private cdr: ChangeDetectorRef,
    private api: ApiService
  ) {
    this.generalForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: [[{title: 'Registration', value: 'registration'}]],
      dublicate: [false]
    });
    this.api.getFormsShortList('registration').subscribe((forms) => {
      this.forms['registration'] = forms;
      this.forms$.next(forms);
    });
    this.generalForm.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(v => {
      this.setValueToForm(v);
    });
    this.formService.form$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((form: FormGroup) => {
      console.log('Form value changes', form);
      if (form) {
        if (form.value._id) { this.newForm = false; }
        this.initForm(form);
      }
      this.generalForm.get('dublicate').valueChanges.pipe(
        takeUntil(this.destroyed$)
      ).subscribe(v => {
        if (!v) { this.sm.clear(); }
      });
      this.generalForm.get('type').valueChanges.pipe(
        takeUntil(this.destroyed$)
      ).subscribe(type => {
        if (type) type = type[0].value;
        if (!(type in this.forms)) {
          this.sm.clear();
          this.api.getFormsShortList(type).subscribe((forms) => {
            this.forms[type] = forms;
            this.forms$.next(forms);
          });
        } else {
          this.forms$.next(this.forms[type]);
        }
      });
    });
    this.filter.valueChanges.subscribe((filterValue) => {
      let selectedType = this.generalForm.get('type').value;
      if (selectedType) selectedType = selectedType[0].value;
      if (filterValue && filterValue.length > 0) {
        let forms = this.forms[selectedType];
        filterValue = filterValue.toLowerCase();
        this.forms$.next(
          forms.filter(form => form.name.toLowerCase().startsWith(filterValue))
        );
      } else {
        this.forms$.next(
          this.forms[selectedType]
        );
      }
    });
    this.formsList.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(forms => {
      this.cdr.markForCheck()
    });
  }

  get formsList() {
    return this.forms$.asObservable();
  }

  get selectedItem() {
    return this.sm.selected[0] ? {
      name: this.sm.selected[0].name,
      src: `http://34.73.126.99/api/v1/preview-pdf-form/${this.sm.selected[0]._id}?api_token=123`
    } : null;
  }

  isSelected(item: any) {
    return this.sm.isSelected(item);
  }

  selectForm(item: any) {
    this.sm.select(item);
    this.generalForm.patchValue({ 'example_form_id': item._id });
    this.cdr.markForCheck();
  }

  initForm(form: FormGroup): void {
    const { name, type } = form.value;
    this.generalForm.patchValue({
      name,
      type: [this.typeOptions.find(i => i.value === type)]
    });
  }

  getDate(): string {
    const currentTime = DateTime.local().hour;
    let res: string;

    if (currentTime <= 4 || currentTime >= 21) {
      res = 'night';
    } else if (currentTime <= 11 && currentTime >= 5) {
      res = 'morning';
    } else if (currentTime <= 17 && currentTime >= 12) {
      res = 'afternoon';
    } else if (currentTime <= 20 && currentTime >= 18) {
      res = 'evening';
    }
    return res;
  }

  setValueToForm(formValue: any) {
    console.log('FORM VALUE', formValue);
  }

  prevStep() {
    
  }

  nextStep() {
    this.router.navigate(['../builder'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
