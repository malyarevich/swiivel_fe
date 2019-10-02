import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { StepperService } from '@app/shared/stepper.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { DateTime } from 'luxon';
import { GeneralDataSource } from './general.datasource';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

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
  typeOptions = ['Registration', 'Application'].map(v => { return { title: v, value: v.toLocaleLowerCase() } })

  dataSource: GeneralDataSource = new GeneralDataSource(this.api);
  form: FormGroup;
  dublicate: boolean = false;
  filter: FormControl = new FormControl(null);
  destoyer$ = new Subject();
  sm: SelectionModel<any> = new SelectionModel(false);

  constructor(
    private stepperService: StepperService,
    private api: ApiService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef) {
    this.dataSource.loadFormsList();
    this.form = this.fb.group({
      name: [null, Validators.required],
      type: [[{ title: 'Registration', value: 'registration' }]]
    });
    this.form.get('type').valueChanges.pipe(
      takeUntil(this.destoyer$)
    ).subscribe(type => {
      if (type) { this.dataSource.loadFormsList(type[0].value); }
    });
  }

  ngOnInit() {
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
    if (!this.form.valid) return ;

    this.saveForm();
    this.stepperService.stepper = 'next';
  }

  saveForm() {
    let newForm: any = {};

    if (this.dublicate && this.sm.selected && this.sm.selected.length > 0) {
      newForm.example_form_id = this.sm.selected[0]._id;
    }
    newForm.name = this.form.get('name').value;
    newForm.type = this.form.get('type').value[0].value;
    this.api.saveNewForm(newForm).pipe(
      takeUntil(this.destoyer$)
    ).subscribe(data => {
      if (data) { sessionStorage.setItem('newForm', JSON.stringify(data)); }
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
    this.sm.toggle(item);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.destoyer$.next()
  }

}

