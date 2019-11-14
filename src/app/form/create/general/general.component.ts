import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormService } from '@app/form/form.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DateTime } from 'luxon';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, take, tap } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { cloneDeep, flatMap, get, isArrayLike, isPlainObject, isString, set, unset, values } from 'lodash';

@Component({
  selector: 'sw-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {



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
  public form: FormGroup;
  public filter: FormControl = new FormControl('');
  public forms = {};
  public forms$ = new BehaviorSubject<any[]>([]);
  // public sm: SelectionModel<any> = new SelectionModel(false);
  public extendsControl = new FormControl(false);
  public extendedForm;
  public get extends() {
    return this.extendsControl.value;
  }
  public saving = false;
  private destroyed$ = new Subject();
  private generalForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private formService: FormService,
    private cdr: ChangeDetectorRef,
    private api: ApiService
  ) {
    this.cdr.detach();
    this.generalForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      type: [[]]
    });
    this.formService.form$.subscribe(form => {
      if (form !== null) {
        this.form = form;
        this.generalForm.patchValue({
          name: this.form.get('name').value,
          type: this.typeOptions.filter(i => i.value === this.form.get('type').value)
        });
        if (!this.isNew) {
          this.generalForm.get('type').disable();
        }
        this.form.get('name').setValidators([Validators.required, Validators.minLength(3)]);
        if (this.isNew && !this.form.get('example_form_id')) {
          this.form.addControl('example_form_id', this.fb.control({ value: null, disabled: true }, Validators.required));
        }
        this.form.valueChanges.subscribe((val) => {
          if (Array.isArray(val.type) && val.type.length > 0) {
            this.form.get('type').setValue(val.type[0].value)
          }
        });
        this.generalForm.valueChanges.subscribe((val) => {
          this.form.get('name').setValue(val.name)
          if (Array.isArray(val.type) && val.type.length > 0) {
            this.form.get('type').setValue(val.type[0].value)
          }
        });
        this.cdr.reattach();
        this.cdr.markForCheck()
      }
    });
  }

  get isNew() {
    return !this.form.get('_id');
  }

  loadAndAppendForms(formType = 'registration') {
    return this.api.getFormsShortList(formType).pipe(
      tap(forms => {
        this.forms[formType] = forms;
        this.forms$.next(forms);
      }
      ));
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe((filterValue) => {
      let selectedType = this.form.get('type').value;
      if (filterValue && filterValue.length > 0) {
        filterValue = filterValue.toLowerCase();
        let forms = this.forms[selectedType];
        if (!forms) {
          this.loadAndAppendForms(selectedType).subscribe(() => {
            this.forms$.next(
              forms.filter(form => form.name.toLowerCase().includes(filterValue))
            );
          })
        } else {
          this.forms$.next(
            forms.filter(form => form.name.toLowerCase().includes(filterValue))
          );
        }
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
    this.extendsControl.valueChanges.subscribe((extend) => {
      if (!!extend) {
        let formType = this.form.get('type').value;
        if (!(formType in Object.keys(this.forms))) {
          this.loadAndAppendForms(formType).subscribe(() => {
            this.form.get('example_form_id').enable();
          })
        } else {
          this.form.get('example_form_id').enable();
        }
      } else {
        this.form.get('example_form_id').disable();
      }
    })

    this.form = this.formService.form;
  }

  get formsList() {
    return this.forms$.asObservable();
  }

  get extendedFormSrc() {
    if (this.extendedForm) return `http://34.73.126.99/api/v1/preview-pdf-form/${this.extendedForm._id}?api_token=123`;
    else return null;
  }

  // get selectedItem() {
  //   return this.sm.selected[0] ? {
  //     name: this.sm.selected[0].name,
  //     src: `http://34.73.126.99/api/v1/preview-pdf-form/${this.sm.selected[0]._id}?api_token=123`
  //   } : null;
  // }

  isSelected(item: any) {
    return this.extendedForm === item;
    // return this.sm.isSelected(item);
  }

  selectForm(item: any) {
    this.extendedForm = item;
    this.form.patchValue({ 'example_form_id': item._id });
    this.cdr.markForCheck();
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



  async prevStep() {
    await this.router.navigate(['forms-dashboard'])
  }


  nextStep() {
    this.saving = true;
    this.formService.saveForm().subscribe((saved) => {
      if (saved) {
        this.router.navigate(['form', saved._id, 'create', 'builder']);
      }

    }, (error) => {
      console.error(error);
      this.saving = false;
    }, () => {
      this.saving = false;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
