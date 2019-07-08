import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Host
} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormUtils} from "../../utils/form.utils";
import {Form, FormSql} from "../../model/form.model";
import {isEmpty} from "lodash";
import {VFormService} from "../../services/v-form.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {requireCheckboxesToBeCheckedValidator} from "../../../../utils/validators/require-checkboxes-to-be-checked.validator";
import {GeneralInfoIsValidService} from "../../services/general-info-is-valid.service";
import {menuItemModel} from "./menu";
import {SaveFormService} from "../../services/save-form.service";
import {GeneralInfoIsSavedService} from "../../services/general-info-is-saved.service";
import {ConstructorIsSavingService} from "../../services/constructor-is-saving.service";
import {VDataCollectionComponent} from "../../v-data-collection.component";
import {Subscription} from "rxjs";
import {VFormPeriodsService} from "../../services/v-form-periods.service";
import {FinPeriod} from "../../../../models/fin-period.model";
import { GeneralInfoIsFormExistService } from '../../services/general-info-is-form-exist.service';

@Component({
  selector: "app-v-form-general-information",
  templateUrl: "./v-form-general-information.component.html",
  styleUrls: ["./v-form-general-information.component.css"]
})
export class VFormGeneralInformationComponent implements OnInit, OnDestroy {
  @ViewChild("generalInfo") generalInfo: ElementRef;
  @ViewChild("basicInfo") basicInfo: ElementRef;
  @ViewChild("period") period: ElementRef;
  @ViewChild("formDates") formDates: ElementRef;
  @ViewChild("eligibleAccounts") eligibleAccounts: ElementRef;

  static countSaveFormService: number = 0;
  saveFormSubscription: Subscription;

  searchText: string;
  formId: string = "";
  formDublicateId: string = "";
  startDate;
  fields = [];
  generalInfoForm: FormGroup;
  formsDublicate: FormSql[];
  isOnSubmit: boolean = false;
  activeSection: number = 1;
  formTypeCreation: number = 0;
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
  vDataCollection: VDataCollectionComponent;
  draftId: string;
  // isFormPrepared = false;

  isSubmitted: boolean = false;
  isDataSaving: boolean = false;
  spinnerText: string = "Data is loading...";
  isLoaded: boolean = false;

  periods: [FinPeriod];

  constructor(
    @Host() vDataCollection: VDataCollectionComponent,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formUtils: FormUtils,
    private formService: VFormService,
    private fb: FormBuilder,
    private parserFormatter: NgbDateParserFormatter,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private generalInfoIsFormExistService: GeneralInfoIsFormExistService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private generalInfoIsSavedService: GeneralInfoIsSavedService,
    private saveFormService: SaveFormService,
    private formPeriodsService: VFormPeriodsService,
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
    VFormGeneralInformationComponent.countSaveFormService++;
    this.activatedRoute.parent.url.subscribe(urlPath => {
      const url = urlPath[urlPath.length - 1].path;
      this.formId = url != "v-form-constructor" ? url : "";
    });
    this.draftId = this.formId + "_general-information";
    this.formPreparing(); // in this branch -> this.formInit();
    // this.formInit();
    this.getAllForm();
    this.isLoaded = true;
    this.constructorIsSavingService.setIsSaving(this.isDataSaving);
    // console.log(this.formId !== "");
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
  
  // onFormChanges() {
  //   this.generalInfoForm.valueChanges.subscribe(val => {
  //     // console.log("rerender");
  //     // console.log(this.generalInfoForm.value);
  //   });
  // }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        control.markAsTouched({onlySelf: true});
        this.validateAllFormFields(control);
      }
    });
  }

  isValidBasicFormInfoFields(): boolean {
    return !(
      this.generalInfoForm.get("name").invalid ||
      this.generalInfoForm.get("language").invalid
    );
  }

  validateBasicFormInfoFields(): void {
    if (this.isValidBasicFormInfoFields()) {
      this.nextStep(this.menu.period);
    } else {
      this.generalInfoForm.get("name").markAsTouched({onlySelf: true});
      this.generalInfoForm.get("language").markAsTouched({onlySelf: true});
    }
  }

  isValidPeriodFields(): boolean {
    // console.log(this.generalInfoForm.get('name').invalid);
    return !this.generalInfoForm.get("periodCheckboxGroup").invalid;
  }

  validatePeriodFields(): void {
    if (this.isValidBasicFormInfoFields() && this.isValidPeriodFields()) {
      this.nextStep(this.menu.dates);
    } else {
      this.generalInfoForm
        .get("periodCheckboxGroup")
        .markAsTouched({onlySelf: true});
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
      this.generalInfoForm.get("startDate").markAsTouched({onlySelf: true});
      this.generalInfoForm.get("endDate").markAsTouched({onlySelf: true});
    }
  }

  useDublicate(form: FormSql) {
    this.formDublicateId = form.mongo_id;
  }

  getAllForm(): void {
    this.formService.getFormsList().subscribe(forms => {
      this.formsDublicate = forms.data;
    });
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
      example_form_id: this.formDublicateId,
      chosen_way_to_create_new_form: this.formTypeCreation
    };

    this.formService.sendForm(form).subscribe((res: any) => {
      this.router.navigate([
        `/vertical-data-collection/v-form-constructor/${res.id}/form-builder`
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

  composeForm() {
    if (this.formId !== "" && this.generalInfoForm.valid) {
      return {
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
        example_form_id: this.formDublicateId
          ? this.formDublicateId
          : undefined,
        chosen_way_to_create_new_form: this.formTypeCreation
      };
    } else {
      return;
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
              startDate: this.parserFormatter.parse(form.formDates["startDate"]),
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
    this.formPeriodsService.getAll().subscribe((res) => {
      this.periods = res;
      if (this.periods.length) {
        let group = {};
        this.periods.map(period => group[period.id] = new FormControl(false));
        let periodCheckboxGroup = new FormGroup(group, requireCheckboxesToBeCheckedValidator());
        this.generalInfoForm.setControl('periodCheckboxGroup', periodCheckboxGroup);
      }
      // this.isFormPrepared = true;
      
      this.formInit();
    });
  }

  getDayparting() {
    let hrs = new Date().getHours();
    if (hrs >= 6 && hrs < 11) return "morning";
    if (hrs >= 11 && hrs < 19) return "afternoon";
    if (hrs >= 19 && hrs <= 23) return "evening";
    return "night";
  }

  onScrollTo(target) {
    this[target].nativeElement.scrollIntoView({behavior: "smooth"});
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
  //   this.router.navigate([`/vertical-data-collection/`]);
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
      VFormGeneralInformationComponent.countSaveFormService > 1 &&
      this.saveFormSubscription
    ) {
      this.saveFormSubscription.unsubscribe();
      VFormGeneralInformationComponent.countSaveFormService--;
    }
  }
}
