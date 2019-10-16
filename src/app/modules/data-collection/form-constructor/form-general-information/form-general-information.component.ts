import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
// import { StepperService } from '@app/shared/stepper.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { DateTime } from 'luxon';
import { GeneralDataSource } from './general.datasource';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { FormCreatorService } from '../form-creator.service';


@Component({
  selector: 'app-form-general-information',
  templateUrl: './form-general-information.component.html',
  styleUrls: ['./form-general-information.component.scss'],
})
export class FormGeneralInformationComponent implements OnInit, OnDestroy {
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

  pdfLoading: boolean = false;
  pdfError: boolean = false;
  dataSource: GeneralDataSource = new GeneralDataSource(this.api);
  form: FormGroup;
  dublicate: boolean = false;
  filter: FormControl = new FormControl(null);
  destoyer$ = new Subject();
  sm: SelectionModel<any> = new SelectionModel(false);
  formId: string = '';

  constructor(
    // private stepperService: StepperService,
    private api: ApiService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
    // private formCreatorService: FormCreatorService
  ) {
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
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        this.dataSource.filter(filterValue.toLowerCase())
      } else {
        this.dataSource.filter('');
      }
    });
    this.route.parent.parent.parent.parent.params.pipe(
      takeUntil(this.destoyer$)
    ).subscribe((params: Params) => {
      this.formId = params.hasOwnProperty('id') ? params.id : '';
      if (this.formId) {
        this.getOldForm(this.formId);
      }
    });
  }

  ngOnInit() {
  }

  getOldForm(id: string) {
    this.api.getFormTemplate(id).subscribe(res => {
      if (res) {
        this.form.patchValue({
          name: res.name,
          type: [this.typeOptions.find(item => item.value === res.type)]
        });
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
    // this.stepperService.stepper = 'prev';
  }

  nextStep(): void {
    if (!this.form.valid) return;

    this.saveForm();
  }



  saveForm() {
    let newForm: any = {};

    if (this.dublicate && this.sm.selected && this.sm.selected.length > 0) {
      newForm.example_form_id = this.sm.selected[0]._id;
    }
    newForm._id = this.formId;
    newForm.name = this.form.get('name').value;
    newForm.type = this.form.get('type').value[0].value;
    if (this.formId) {
      this.api.updateGeneralForm(newForm, this.formId).pipe(
        takeUntil(this.destoyer$)
      ).subscribe(data => {
        if (data) {
          this.router.navigate([`/form-constructor/${data._id}/form-builder`]);
        }
      });
    } else {
      this.api.saveNewForm(newForm).pipe(
        takeUntil(this.destoyer$)
      ).subscribe(data => {
        if (data) {
          this.router.navigate([`/form-constructor/${data._id}/form-builder`]);
        }
      });
    }
  }

  onProgress(progressData: PDFProgressData) {
    this.pdfError = false
    console.log('progressData', progressData);
    if (progressData.loaded === progressData.total) {
      this.pdfLoading = false;
    }
  }

  onError(error: any) {
    if (error) {
      this.pdfError = true;
      this.pdfLoading = false;
    }
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
    if (!this.isSelected(item)) { this.pdfLoading = true; }
    this.sm.toggle(item);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.destoyer$.next()
  }
}
