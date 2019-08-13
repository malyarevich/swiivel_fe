import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  Host, ViewEncapsulation
} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Subscription } from "rxjs";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { isEmpty } from "lodash";
import { requireCheckboxesToBeCheckedValidator } from "src/app/utils/validators/require-checkboxes-to-be-checked.validator";
import { Form, FormSql } from "src/app/models/data-collection/form.model";
import { FinPeriod } from "src/app/models/fin-period.model";
import { menuItemModel } from "./menu";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import { SaveFormService } from "../../services/save-form.service";
import { GeneralInfoIsSavedService } from "../../services/general-info-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import { DataCollectionComponent } from "../../data-collection.component";
import { FormService } from "../../services/form.service";
import { FormPeriodsService } from "../../services/form-periods.service";
import { GeneralInfoIsFormExistService } from "../../services/general-info-is-form-exist.service";

@Component({
  selector: 'app-form-general-information',
  templateUrl: './form-general-information.component.html',
  styleUrls: ['./form-general-information.component.css'],
})
export class FormGeneralInformationComponent implements OnInit, OnDestroy {
  @ViewChild("generalInfo", { static: false }) generalInfo: ElementRef;
  @ViewChild("basicInfo", { static: false }) basicInfo: ElementRef;
  @ViewChild("period", { static: false }) period: ElementRef;
  @ViewChild("formDates", { static: false }) formDates: ElementRef;
  @ViewChild("eligibleAccounts", { static: false }) eligibleAccounts: ElementRef;

  static countSaveFormService: number = 0;
  saveFormSubscription: Subscription;

  formId: string = "";
  formDuplicateId = '';
  formTypeCreation = 0;
  startDate;
  fields = [];
  generalInfoForm: FormGroup;
  isOnSubmit: boolean = false;
  activeSection: number = 1;
  menu = {
    basic: <menuItemModel>{
      title: "Basic Form Information",
      target: 1,
      isActive: true,
      scrollTarget: "basicInfo"
    },
    period: <menuItemModel>{
      title: "Period",
      target: 2,
      isActive: false,
      scrollTarget: "period"
    },
    dates: <menuItemModel>{
      title: "Form Dates",
      target: 3,
      isActive: false,
      scrollTarget: "formDates"
    },
    eligible: <menuItemModel>{
      title: "Eligible Accounts",
      target: 4,
      isActive: false,
      scrollTarget: "eligibleAccounts"
    }
  };
  vDataCollection: DataCollectionComponent;
  draftId: string;
  // isFormPrepared = false;

  isSubmitted: boolean = false;
  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";
  isLoaded: boolean = false;

  periods: [FinPeriod];

  constructor(
    @Host() vDataCollection: DataCollectionComponent,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formService: FormService,
    private fb: FormBuilder,
    private parserFormatter: NgbDateParserFormatter,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private generalInfoIsFormExistService: GeneralInfoIsFormExistService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private generalInfoIsSavedService: GeneralInfoIsSavedService,
    private saveFormService: SaveFormService,
    private formPeriodsService: FormPeriodsService
  ) {
    this.vDataCollection = vDataCollection;
  }

  ngOnInit() {
    this.generalInfoIsSavedService.setIsSaved(false);
    // if (VFormGeneralInformationComponent.countSaveFormService < 1) {
    this.saveFormSubscription = this.saveFormService.onSaveForm.subscribe(
      () => {
        this.saveFormWithoutRedirect();
      }
    );
    // }
    FormGeneralInformationComponent.countSaveFormService++;
    this.activatedRoute.parent.parent.parent.parent.params.subscribe((params: Params) => {
      this.formId = params.hasOwnProperty('id') ? params.id : '';
    });
    this.draftId = this.formId + "_general-information";
    this.formPreparing(); // in this branch -> this.formInit();
    this.isLoaded = true;
    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
    this.generalInfoIsFormExistService.setIsExist(this.formId !== "");
  }

  isFormReady() {
    return (
      this.generalInfoForm !== undefined &&
      this.formId !== undefined &&
      this.isLoaded &&
      !this.isDataSaving
    );
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }

  validateBasicFormInfoFields(): void {
    if (this.isValidBasicFormInfoFields()) {
      this.nextStep(this.menu.period);
    } else {
      this.generalInfoForm.get('name').markAsTouched({ onlySelf: true });
      this.generalInfoForm.get('language').markAsTouched({ onlySelf: true });
    }
  }

  isValidBasicFormInfoFields(): boolean {
    return !(
      this.generalInfoForm.get('name').invalid ||
      this.generalInfoForm.get('language').invalid
    );
  }

  isValidPeriodFields(): boolean {
    return !this.generalInfoForm.get("periodCheckboxGroup").invalid;
  }

  validatePeriodFields(): void {
    if (this.isValidBasicFormInfoFields() && this.isValidPeriodFields()) {
      this.nextStep(this.menu.dates);
    } else {
      this.generalInfoForm
        .get("periodCheckboxGroup")
        .markAsTouched({ onlySelf: true });
    }
  }

  isValidDatesFields(): boolean {
    return !(
      this.generalInfoForm.get("startDate").invalid ||
      this.generalInfoForm.get("endDate").invalid
    );
  }

  validateDatesFields(): void {
    if (
      this.isValidBasicFormInfoFields() &&
      this.isValidPeriodFields() &&
      this.isValidDatesFields()
    ) {
      this.nextStep(this.menu.eligible);
    } else {
      this.generalInfoForm.get("startDate").markAsTouched({ onlySelf: true });
      this.generalInfoForm.get("endDate").markAsTouched({ onlySelf: true });
    }
  }

  setDuplicatedFormId(id: string) {
    this.formDuplicateId = id;
  }
  setFormTypeCreation(type) {
    this.formTypeCreation = type;
  }

  onSubmit() {
    if (!this.isSubmitted) {
      this.isSubmitted = true;
      this.validateAllFormFields(this.generalInfoForm);
      if (!this.generalInfoForm.valid) {
        this.isSubmitted = false;
        return;
      }
      this.generalInfoForm.clearValidators();
      this.isOnSubmit = true;
      this.saveForm();
    }
  }

  onSubmitDestroy() {
    this.validateAllFormFields(this.generalInfoForm);
    if (!this.generalInfoForm.valid) return;
    this.generalInfoForm.clearValidators();
    this.isOnSubmit = true;
    this.saveFormWithoutRedirect();
  }

  saveForm() {
    const form: Form = {
      _id: this.formId,
      name: this.generalInfoForm.value.name,
      fields: this.fields,
      formDates: {
        startDate: this.parserFormatter.format(
          this.generalInfoForm.value.startDate
        ),
        endDate: this.parserFormatter.format(this.generalInfoForm.value.endDate)
      },
      language: this.generalInfoForm.value.language,
      formPeriods: this.generalInfoForm.value.periodCheckboxGroup,
      eligible: this.generalInfoForm.value.eligible,
      step: 0,
      example_form_id: this.formDuplicateId,
      chosen_way_to_create_new_form: this.formTypeCreation
    };

    this.formService.sendForm(form).subscribe((res: any) => {
      this.router.navigate([
        `/data-collection/form-constructor/${res.id}/form-builder`
      ]);
    });
  }

  saveFormWithoutRedirect() {
    // console.log("saveFormWithoutRedirect");
    if (!this.isDataSaving) {
      if (!this.generalInfoForm) {
        return;
      }
      const form: Form = this.composeForm();
      if (form === undefined) {
        return;
      }
      this.spinnerText = "Data is saving...";
      this.isDataSaving = true;
      this.constructorIsSavingService.setIsSaving(this.isDataSaving);
      this.formService.sendForm(form).subscribe((res: any) => {
        this.generalInfoIsSavedService.setIsSaved(res["updated"]);

        this.isDataSaving = !this.saveFormService.getSavingStatus();
        this.constructorIsSavingService.setIsSaving(this.isDataSaving);
        if (this.isDataSaving) {
          this.spinnerText = "Other tabs are saving...";
        } else {
          this.spinnerText = "Data is loading...";
        }
      });
    }
  }

  public saveDraftForm(): void {
    // console.log("SAVE draft");
    if (this.formId !== "" && this.generalInfoForm.valid) {
      this.vDataCollection.setDraftForm(this.draftId, this.composeForm());
    }
  }

  cleanDraftForm(): void {
    this.vDataCollection.deleteDraftForm(this.draftId);
  }

  composeForm(): Form {
    if (this.formId !== "" && this.generalInfoForm.valid) {
      return <Form>{
        _id: this.formId,
        name: this.generalInfoForm.value.name,
        fields: this.fields,
        language: this.generalInfoForm.value.language,
        formDates: {
          startDate: this.parserFormatter.format(
            this.generalInfoForm.value.startDate
          ),
          endDate: this.parserFormatter.format(
            this.generalInfoForm.value.endDate
          )
        },
        formPeriods: this.generalInfoForm.value.periodCheckboxGroup,
        eligible: this.generalInfoForm.value.eligible,
        step: 0,
        example_form_id: this.formDuplicateId
          ? this.formDuplicateId
          : undefined,
        chosen_way_to_create_new_form: this.formTypeCreation
      };
    } else {
      return <Form>null;
    }
  }

  setLocalForm(form: Form): void {
    // console.log(form)
    if (!isEmpty(form)) {
      this.fields = form.fields;
      this.generalInfoForm.patchValue({
        name: form.name,
        language: form.language
          ? form.language
          : this.generalInfoForm.value.language,
        endDate: this.parserFormatter.parse(form.formDates["endDate"]),
        startDate: this.parserFormatter.parse(form.formDates["startDate"]),
        periodCheckboxGroup: form.formPeriods
          ? form.formPeriods
          : this.generalInfoForm.value.periodCheckboxGroup,
        eligible: form.eligible
      });
      this.menu.dates.isActive = this.menu.eligible.isActive = this.menu.period.isActive = true;
    }
  }

  formPreparing() {
    this.generalInfoForm = new FormGroup({
      name: new FormControl("", {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])
      }),
      language: new FormControl(),
      // periodCheckboxGroup: new FormControl(),
      endDate: new FormControl(new Date(1971, 10, 10), Validators.required),
      startDate: new FormControl(new Date(1971, 10, 10), Validators.required),
      eligible: new FormControl("allParents", Validators.required)

      // allParent: new FormControl('Y')
    });

    this.initPeriods();
  }

  formInit() {
    const form = this.vDataCollection.getDraftForm(this.draftId);
    if (!isEmpty(form)) {
      // console.log("loading draftForm");
      this.setLocalForm(form); //draftForm
    } else if (this.formId) {
      this.formService.getOneForm(this.formId).subscribe(
        (form: Form) => {
          if (!isEmpty(form)) {
            this.fields = form.fields;
            this.generalInfoForm.patchValue({
              name: form.name,
              language: form.language ? form.language : "english",
              endDate: this.parserFormatter.parse(form.formDates["endDate"]),
              startDate: this.parserFormatter.parse(
                form.formDates["startDate"]
              ),
              periodCheckboxGroup: form.formPeriods ? form.formPeriods : {},
              eligible: form.eligible
            });
            this.menu.dates.isActive = this.menu.eligible.isActive = this.menu.period.isActive = true;
          }
        },
        error => console.log(error, "error")
      );
    }

    this.onFormStatusChanges();
    // this.onFormChanges();
  }

  initPeriods() {
    this.formPeriodsService.getAll().subscribe(res => {
      this.periods = res;
      if (this.periods.length) {
        let group = {};
        this.periods.map(period => (group[period.id] = new FormControl(false)));
        let periodCheckboxGroup = new FormGroup(
          group,
          requireCheckboxesToBeCheckedValidator()
        );
        this.generalInfoForm.setControl(
          "periodCheckboxGroup",
          periodCheckboxGroup
        );
      }
      // this.isFormPrepared = true;

      this.formInit();
    });
  }

  onScrollTo(target) {
    this[target].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  setActiveSection(value) {
    this.activeSection = value.target;
    this.onScrollTo(value.scrollTarget);
  }

  isInvalidCheckboxGroup(groupName: string): boolean {
    return (
      this.generalInfoForm.controls[groupName].touched &&
      this.generalInfoForm.controls[groupName].errors &&
      this.generalInfoForm.controls[groupName].errors
        .requireOneCheckboxToBeChecked
    );
  }

  addHiddenClass(isNeedToHide: boolean): string {
    return isNeedToHide ? "hidden_block" : "";
  }

  onFormStatusChanges(): void {
    this.generalInfoForm.statusChanges.subscribe(val => {
      switch (val) {
        case "VALID":
          this.generalInfoIsValidService.setIsValid(true);
          break;
        case "INVALID":
          this.generalInfoIsValidService.setIsValid(false);
          break;
      }
    });
  }

  nextStep(item) {
    item.isActive = true;
    this.activeSection = item.target;
    this.onScrollTo(item.scrollTarget);
  }

  // goBack() {
  //   this.router.navigate([`/data-collection/`]);
  // }

  ngOnDestroy() {
    // console.log("OnDestroy");
    if (this.isOnSubmit) {
      this.cleanDraftForm();
      return;
    }
    this.saveDraftForm();
    if (
      this.router.routerState.snapshot.url.indexOf("general-information") >
        -1 ||
      this.router.routerState.snapshot.url.indexOf("form-builder") > -1 ||
      this.router.routerState.snapshot.url.indexOf("publish-settings") > -1
    ) {
      // this.saveDraftForm();
    }

    if (
      FormGeneralInformationComponent.countSaveFormService > 1 &&
      this.saveFormSubscription
    ) {
      this.saveFormSubscription.unsubscribe();
      FormGeneralInformationComponent.countSaveFormService--;
    }
  }
}
