import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { BehaviorSubject, Observable, Subject, pipe, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Form, ISectionTab } from "@app/models/data-collection/form";
import { OnlineFormService } from "./services/online-form.service";
import {
  IMenuItems,
  IMainMenuNames,
  menuItems,
  mainMenuNames
} from "./models/menu.model";
import { SIGNATURE_TYPES, E_SIGNATURE_TYPES } from "./models/signature.model";

@Component({
  selector: "sw-online-form",
  templateUrl: "./online-form.component.html",
  styleUrls: ["./online-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormComponent implements OnInit, OnDestroy {
  formId: string;
  form: Form;
  fg: FormGroup;

  formNavigationState$: BehaviorSubject<object[]> = new BehaviorSubject(null);
  pagesPercents$: BehaviorSubject<object[]> = new BehaviorSubject([]);
  currentPosition$: BehaviorSubject<object> = new BehaviorSubject({});
  formErrors$: BehaviorSubject<object> = new BehaviorSubject({});

  fgValueChangesSubscription: Subscription;
  fgStatusChangesSubscription: Subscription;
  isFormStatusChanged: boolean = false;
  fieldListByPage: object = {};
  requiredListByPage: object = {};
  requiredValidator = Validators.compose([Validators.required]);
  SIGNATURE_TYPES: object = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES: object = E_SIGNATURE_TYPES;

  destroyedSaveForm$ = new Subject();
  _isReady$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private route: ActivatedRoute,
    private onlineFormService: OnlineFormService
  ) {}

  ngOnInit() {
    this._isReady$.subscribe();
    this.getForm();
  }

  get isReady$(): Observable<boolean> {
    return this._isReady$.asObservable();
  }

  getForm(): void {
    this.onlineFormService.setFromId(
      this.route.snapshot.paramMap.get("mongo_id")
    );
    //TODO: check if we need formId here
    this.route.params.subscribe(params => {
      this.formId = params.mongo_id;
    });

    this.onlineFormService.getOneForm().subscribe((form: Form) => {
      this.form = form;
      console.log(this.form);

      this.initForm();
      this.initNavigation();
      this.initPercents();
      this.initPosition();
      this.initRequiredList();
      this.initFormControls();
      if (this.onlineFormService.getFormGroup()) {
        this._isReady$.next(true);
      }
      this.fgStatusChangesSubscription = this.fg.statusChanges.subscribe(() => {
        this.pagesPercents$.next(
          this.getRecountedPagesPercentsByPage(
            this.currentPosition$.getValue()["page"]
          )
        );
      });
      this.fgValueChangesSubscription = this.fg.valueChanges.subscribe(() => {
        this.isFormStatusChanged = true;
      });
    });
  }

  calcPercentByPage(page): number {
    const filteredList = this.requiredListByPage[page].filter(key => {
      return (
        this.fg.controls[key].valid && this.fg.controls[key].value !== false
      );
    });
    return this.requiredListByPage[page].length > 0
      ? Math.round(
          (filteredList.length / this.requiredListByPage[page].length) * 100
        )
      : 100;
  }

  getRecountedPagesPercentsByPage(page): object[] {
    return this.pagesPercents$.getValue().map(elem => {
      if (page !== elem["page"]) {
        return elem;
      }
      return { ...elem, percent: this.calcPercentByPage(page) };
    });
  }

  initForm(): void {
    this.onlineFormService.initOneForm();
    this.fg = this.onlineFormService.getFormGroup();
  }

  initNavigation(): void {
    if (!this.formNavigationState$.getValue()) {
      this.initNavigationState();
      this.initTabsForEachPage();
    }
  }

  initNavigationState(): void {
    this.formNavigationState$.next(this.getFilteredSections());
  }

  initTabsForEachPage(): void {
    let newState: object[] = this.formNavigationState$.getValue().map(page => {
      const tabs = <ISectionTab[]>this.tabsByPage(page["page"]);
      return { page: page["page"], tabs };
    });

    newState = newState.filter(page => {
      const isEmpty = Object.values(mainMenuNames).find(item => {
        return page["tabs"][0]["_id"] === item;
      });
      return !isEmpty;
    });

    this.formNavigationState$.next(newState);
  }

  initConsentInfo(): ISectionTab[] {
    let tabs = [];
    if (this.form.consentInfo && this.form.consentInfo.consents.length > 0) {
      tabs = Object.values(this.form.consentInfo.consents).map(item => {
        return { _id: item["id"], name: item["title"] };
      });
    } else {
      tabs.push({ _id: mainMenuNames.consentInfo, name: "Consent section" });
    }
    return tabs;
  }

  initDocumentsForms(): ISectionTab[] {
    const tabs = [];
    tabs.push({ _id: "documents", name: "Documents for Parents" });
    tabs.push({ _id: "pdf-forms", name: "External Forms" });
    return tabs;
  }

  initGeneralInfo(): ISectionTab[] {
    let tabs = [];
    if (this.form.fields && this.form.fields.length > 0) {
      tabs = this.form.fields.filter(item => {
        return item.type === 114;
      });
    } else {
      tabs = [{ _id: "generalInfo", name: "General Information", type: 114 }];
    }
    return tabs;
  }

  initPacketIntroduction(): ISectionTab[] {
    let tabs = [];
    if (
      this.form.packetIntroduction &&
      this.form.packetIntroduction.packets.length > 0
    ) {
      tabs = Object.values(this.form.packetIntroduction.packets).map(item => {
        return { _id: item["id"], name: item["title"] };
      });
    } else {
      tabs.push({
        _id: mainMenuNames.packetIntroduction,
        name: "Introduction"
      });
    }
    return tabs;
  }

  initPayment(): ISectionTab[] {
    const tabs = [];
    tabs.push({ _id: mainMenuNames.payment, name: "Payment section" });
    return tabs;
  }

  initPaymentSettings(): ISectionTab[] {
    const tabs = [];
    // if (
    //   this.form.paymentSettings &&
    //   this.form.paymentSettings.paymentSettingsItems.length > 0
    // ) {
    //   this.sections = Object.values(
    //     this.form.paymentSettings.paymentSettingsItems
    //   ).map(item => {
    //     return { _id: item["id"], name: item["title"] };
    //   });
    // } else {
    //   this.sections = [
    //     { _id: "paymentSettings", name: "Payment Settings section" }
    //   ];
    // }
    tabs.push({
      _id: mainMenuNames.paymentSettings,
      name: "Payment Settings section"
    });
    return tabs;
  }

  initTermsConditions(): ISectionTab[] {
    const tabs = [];
    if (
      this.form.termsConditions &&
      this.form.termsConditions.termsConditionsItems.length > 0
    ) {
      // Object.values(
      //   this.form.termsConditions.termsConditionsItems
      // ).map(item => {
      //   return { _id: item["id"], name: item["title"] };
      // });
      tabs.push({
        _id: mainMenuNames.termsConditions + "__active",
        name: "Terms & Conditions section"
      });
    } else {
      tabs.push({
        _id: mainMenuNames.termsConditions,
        name: "Terms & Conditions section"
      });
    }

    return tabs;
  }

  initTuitionContract(): ISectionTab[] {
    const tabs = [];
    // if (
    //   this.form.paymentSettings &&
    //   this.form.paymentSettings.paymentSettingsItems.length > 0
    // ) {
    //   this.sections = Object.values(
    //     this.form.paymentSettings.paymentSettingsItems
    //   ).map(item => {
    //     return { _id: item["id"], name: item["title"] };
    //   });
    // } else {
    //   this.sections = [
    //     { _id: "paymentSettings", name: "Payment Settings section" }
    //   ];
    // }
    tabs.push({
      _id: mainMenuNames.tuitionContract,
      name: "Payment Settings section"
    });
    return tabs;
  }

  tabsByPage(page): ISectionTab[] {
    switch (page) {
      case mainMenuNames.consentInfo:
        return this.initConsentInfo();
        break;

      case mainMenuNames.documentsForms:
        return this.initDocumentsForms();
        break;

      case mainMenuNames.generalInfo:
        return this.initGeneralInfo();
        break;

      case mainMenuNames.packetIntroduction:
        return this.initPacketIntroduction();
        break;

      case mainMenuNames.payment:
        return this.initPayment();
        break;

      case mainMenuNames.paymentSettings:
        return this.initPaymentSettings();
        break;

      case mainMenuNames.termsConditions:
        return this.initTermsConditions();
        break;

      case mainMenuNames.tuitionContract:
        return this.initTuitionContract();
        break;

      default:
        return [{ _id: "id_" + Math.random(), name: "Not Configured Tab" }];
        break;
    }
  }

  getFilteredSections(): object[] {
    const activeMenuList: object[] = [];
    //TODO: remove after create packetIntroduction
    activeMenuList.push({ page: "packetIntroduction" });
    for (const page in this.form["activeSections"]) {
      if (
        this.form["activeSections"][page] &&
        this.form["activeSections"][page].isActive
      ) {
        activeMenuList.push({ page: page });
      }
    }
    return activeMenuList;
  }

  initPercents() {
    if (typeof this.form.pagesPercents !== "undefined" &&
      this.form.pagesPercents.length > 0) {
      this.pagesPercents$.next(this.form.pagesPercents);
    } else {
      this.formNavigationState$.getValue().forEach(item => {
        this.pagesPercents$.next([
          ...this.pagesPercents$.getValue(),
          { page: item["page"], percent: -1 }
        ]);
      });
    }
  }

  initPosition() {
    if (this.formNavigationState$.getValue().length > 0) {
      this.currentPosition$.next({
        page: this.formNavigationState$.getValue()[0]["page"],
        tab: 0
      });
    }
  }

  initRequiredList() {
    Object.values(mainMenuNames).forEach(name => {
      this.requiredListByPage[name] = [];
      this.fieldListByPage[name] = [];
    });
  }

  filterSignatureBySignatureAndKey(signature, key) {
    if (signature.isBothParents) {
      if (key.includes("_parent")) {
        return false;
      }
    } else {
      if (key.includes("_father") || key.includes("_mother")) {
        return false;
      }
    }

    if (signature.type === SIGNATURE_TYPES["WET"]) {
      if (key.includes("__external_") || key.includes("__system_")) {
        return false;
      }
    } else if (signature.eType === E_SIGNATURE_TYPES["EXTERNAL"]) {
      if (key.includes("__system_") || key.includes("__wet_")) {
        return false;
      }
    } else {
      //system
      if (key.includes("__external_") || key.includes("__wet_")) {
        return false;
      }
    }
    return true;
  }

  // Make lists with required fields and with control fields by page
  addToFieldLists(menuName: string, key: string, isRequired: boolean) {
    if (isRequired) {
      this.requiredListByPage[menuName].push(key);
    }
    this.fieldListByPage[menuName].push(key);
  }

  addControl(
    key: string,
    isValidate: boolean,
    validators = this.requiredValidator
  ): void {
    this.fg.addControl(
      key,
      new FormControl(
        {
          value: this.form.fieldsData[key] ? this.form.fieldsData[key] : "",
          disabled: false
        },
        isValidate ? validators : null
      )
    );
  }

  initConsentFormControls() {
    if (this.form.consentInfo && this.form.consentInfo.consents.length > 0) {
      const consentKeys = [
        "__checkbox",
        "__external_parent",
        "__external_father",
        "__external_mother",
        "__system_parent",
        "__system_father",
        "__system_mother",
        "__wet_parent",
        "__wet_father",
        "__wet_mother"
      ];

      consentKeys.forEach(key => {
        Object.values(this.form.consentInfo.consents).forEach(item => {
          if (
            item["id"] &&
            this.filterSignatureBySignatureAndKey(item["signature"], key)
          ) {
            const isRequired =
              key === "__checkbox"
                ? item["checkbox"]["isActive"]
                : item["signature"]["isRequire"];

            this.addToFieldLists(
              mainMenuNames.consentInfo,
              item["id"] + key,
              isRequired
            );
            this.addControl(item["id"] + key, isRequired);
          }
        });
      });
    }
  }

  getFieldsByFormFields(fields) {
    let aFields = [];
    Object.values(fields).forEach(field => {
      if (field["type"]) {
        if (field["type"] === 113 || field["type"] === 114) {
          aFields = aFields.concat(this.getFieldsByFormFields(field["fields"]));
        } else {
          aFields.push(field);
        }
      }
    });
    return aFields;
  }

  getComposedValidatorsByField(field) {
    let arrayValidators = [];

    if (field.options.required) {
      arrayValidators.push(Validators.required);
    }

    if (field.options.minFieldSize) {
      arrayValidators.push(Validators.minLength(field.options.minFieldSize));
    }

    if (field.options.maxFieldSize) {
      arrayValidators.push(Validators.maxLength(field.options.maxFieldSize));
    }

    return arrayValidators;
  }

  initGeneralInfoFormControls() {
    const aFields = this.getFieldsByFormFields(this.form.fields);
    aFields.forEach(field => {
      if (field["_id"]) {
        const aValidators = this.getComposedValidatorsByField(field);
        const validatorFn = !field.options.readonly
          ? Validators.compose(aValidators)
          : null;
        this.addControl(field["_id"], !(validatorFn === null), validatorFn);
        const isRequired = aValidators.find(validator => {
          return validator === Validators.required;
        });

        this.addToFieldLists(
          mainMenuNames.generalInfo,
          field["_id"],
          isRequired
        );
      }
    });
  }

  initTermsConditionsFormControls() {
    if (
      this.form.termsConditions &&
      this.form.termsConditions.termsConditionsItems.length > 0
    ) {
      const termsConditionsKeys = [
        "termsConditions__external_parent",
        "termsConditions__external_father",
        "termsConditions__external_mother",
        "termsConditions__system_parent",
        "termsConditions__system_father",
        "termsConditions__system_mother",
        "termsConditions__wet_parent",
        "termsConditions__wet_father",
        "termsConditions__wet_mother"
      ];

      const isRequired = this.form.termsConditions["signature"]["isRequire"];

      termsConditionsKeys
        .filter(key => {
          return this.filterSignatureBySignatureAndKey(
            this.form.termsConditions.signature,
            key
          );
        })
        .forEach(key => {
          this.addToFieldLists(mainMenuNames.termsConditions, key, isRequired);
          this.addControl(key, isRequired);
        });

      Object.values(this.form.termsConditions.termsConditionsItems).forEach(
        item => {
          if (item["id"]) {
            const key = item["id"] + "__checkbox";
            const isRequired = item["checkbox"]["isActive"];
            this.addToFieldLists(
              mainMenuNames.termsConditions,
              key,
              isRequired
            );
            this.addControl(key, isRequired);
          }
        }
      );
    }
  }

  initFormControls() {
    this.initConsentFormControls();
    this.initGeneralInfoFormControls();
    this.initTermsConditionsFormControls();
  }

  goToPage(pageName) {
    this.currentPosition$.next({ page: pageName, tab: 0 });
  }

  goToTab(tabIndex) {
    this.currentPosition$.next({
      page: this.currentPosition$.value["page"],
      tab: tabIndex
    });
  }

  goToPreviousStep() {
    const currentPageIndex = this.formNavigationState$
      .getValue()
      .findIndex(page => {
        return page["page"] === this.currentPosition$.value["page"];
      });
    if (this.currentPosition$.value["tab"] !== 0) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        tab: this.currentPosition$.value["tab"] - 1
      });
    } else if (currentPageIndex !== 0) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        page: this.formNavigationState$.getValue()[currentPageIndex - 1][
          "page"
        ],
        tab:
          this.formNavigationState$.getValue()[currentPageIndex - 1]["tabs"]
            .length - 1
      });
    }
  }

  goPreviousStep() {
    this.goToPreviousStep();
  }

  goToNextStep() {
    const currentPage = this.formNavigationState$.getValue().find(page => {
      return page["page"] === this.currentPosition$.value["page"];
    });
    const currentPageIndex = this.formNavigationState$
      .getValue()
      .findIndex(page => {
        return page["page"] === this.currentPosition$.value["page"];
      });
    if (currentPage["tabs"].length > this.currentPosition$.value["tab"] + 1) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        tab: this.currentPosition$.value["tab"] + 1
      });
    } else if (
      currentPageIndex + 1 <
      this.formNavigationState$.getValue().length
    ) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        page: this.formNavigationState$.getValue()[currentPageIndex + 1][
          "page"
        ],
        tab: 0
      });
    } else {
      //TODO: goToFinishPage
      console.log("TODO: goToFinishPage");
    }
  }

  saveAndNextStep() {
    if (this.isFormStatusChanged) {
      const savingObj = {
        pagesPercents: this.pagesPercents$.getValue()
      };
      //TODO: change to commented code when back-end will be ready
      // savingObj["fieldListByPage"] = this.fieldListByPage;
      // savingObj["currentPosition"] = this.currentPosition$.getValue();
      savingObj["fieldsData"] = this.fg.value;
      this.onlineFormService
        .sendForm(savingObj)
        .pipe(takeUntil(this.destroyedSaveForm$))
        .subscribe(
          () => {
            this.formErrors$.next({});
            this.goToNextStep();
            this.isFormStatusChanged = false;
          },
          error => {
            if (error.error.status === 0) {
              this.formErrors$.next(error.error.errors);
            }
          }
        );
    } else {
      this.goToNextStep();
    }
  }

  ngOnDestroy(): void {
    this._isReady$.unsubscribe();
    this.destroyedSaveForm$.next();
    this.fgStatusChangesSubscription.unsubscribe();
    this.fgValueChangesSubscription.unsubscribe();
  }
}
