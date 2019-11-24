import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { StepperService } from '@app/shared/stepper.service';
import { DateTime } from 'luxon';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil, withLatestFrom } from 'rxjs/operators';
import { FormCreatorService } from '../form-creator.service';
import { GeneralDataSource } from './general.datasource';


@Component({
  selector: 'sw-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, OnDestroy {
  buttonOptions = [
    {
      label: 'CREATE NEW FORM',
      value: false
    },
    {
      label: 'DUPLICATE EXISTING',
      value: true
    }
  ];
  typeOptions = ['Registration', 'Application'].map(v => ({ title: v, value: v.toLocaleLowerCase() }));

  // dataSource: GeneralDataSource = new GeneralDataSource(this.api);

  form: FormGroup;
  forms = {};
  forms$ = new BehaviorSubject<any[]>([]);
  get formsList() {
    return this.forms$.asObservable();
  }
  dublicate = new FormControl(false);
  filter: FormControl = new FormControl(null);
  destroyed$ = new Subject();
  sm: SelectionModel<any> = new SelectionModel(false);
  saving = false;
  constructor(
    private stepperService: StepperService,
    private api: ApiService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private formCreatorService: FormCreatorService) {


    this.filter.valueChanges.subscribe((filterValue) => {
      let selectedType = this.form.get('type').value;
      if (selectedType) { selectedType = selectedType[0].value; }
      if (filterValue && filterValue.length > 0) {
        const forms = this.forms[selectedType];
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
    this.formsList.subscribe(forms => {
      this.cdr.markForCheck();
    });
    this.formCreatorService.form$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(form => {
      this.form = form || this.fb.group({
        name: [null, Validators.required],
        type: [[{ title: 'Registration', value: 'registration' }]]
      });
      console.log('Form Template', form);

      this.form.get('type').valueChanges.pipe(
        takeUntil(this.destroyed$)
      ).subscribe(type => {
        if (type) { type = type[0].value; }
        if (!(type in this.forms)) {
          this.api.getFormsShortList(type).subscribe((forms) => {
            this.forms[type] = forms;
            this.forms$.next(forms);
          });
        } else {
          this.forms$.next(this.forms[type]);
        }
      });
      if (form) {
        this.form.get('type').patchValue([this.typeOptions.find(item => item.value === form.get('type').value)]);
      }
    });
  }

  ngOnInit() {
    this.dublicate.valueChanges.subscribe((fromExisting) => {
      if (!!fromExisting) {
        this.form.addControl('example_form_id', this.fb.control(null, { validators: Validators.required }));
      } else {
        try {
          this.form.removeControl('example_form_id');
        } catch (error) {
          console.warn(error);
        }
      }
    });
  }

  get selectedItem() {
    return this.sm.selected[0] ? {
      name: this.sm.selected[0].name,
      src: `http://34.73.126.99/api/v1/preview-pdf-form/${this.sm.selected[0]._id}?api_token=123`
    } : null;
  }

  prevStep(): void {
    this.stepperService.stepper = 'prev';
  }

  nextStep(): void {
    if (!this.form.valid) { return; }
    this.saving = true;
    this.saveForm().then((response) => {
      this.saving = false;
      this.stepperService.stepper = 'next';
    }).catch(error => {
      console.error(error);
      this.saving = false;
    });
  }

  saveForm() {
    return new Promise((resolve, reject) => {
      if (this.form.valid) {
        this.form.value.type = this.form.value.type[0].value;
        if ('form_example_id' in this.form.value) {
          this.api.updateGeneralForm(this.form.value, this.form.value._id).subscribe(resolve);
        } else {
          this.api.saveNewForm({ name: this.form.value.name, type: this.form.value.type }).subscribe((response) => {
            resolve(response);
          });
        }
      } else {
        reject(this.form.errors);
      }
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

  isSelected(item: any) {
    return this.sm.isSelected(item);
  }

  selectForm(item: any) {
    this.sm.select(item);
    this.form.patchValue({ example_form_id: item._id });
    this.cdr.markForCheck();
  }

  afterPdfLoadComplete(event) {
    console.log('afterr', event);
  }
  pdfError(error) {
    console.log(error);
  }

  loadComplete(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
