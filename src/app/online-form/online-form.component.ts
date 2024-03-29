import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {
  alphabeticValidator,
  alphanumericValidator,
  emailValidator,
  maxValueValidator,
  minValueValidator,
  numericValidator,
  phoneNumberValidator,
  urlValidator
} from '@app/core/validators';
import { ConsentItemInfo } from '@models/data-collection/consent.model';
import { Field, fieldValidators } from '@models/data-collection/field.model';
import { DocumentsModel } from '@models/data-collection/form-constructor/form-builder/documents.model';
import { TermsConditionsItem } from '@models/data-collection/form-constructor/form-builder/terms-conditions.model';
import {
  FormModel,
  IPagesPercent,
  ISectionTab
} from '@models/data-collection/form.model';
import { mainMenuNames } from '@models/data-collection/online-form/menu.model';
import {
  E_SIGNATURE_TYPES,
  SIGNATURE_TYPES
} from '@models/data-collection/signature.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { customTable } from './models/custom-table.model';
import {
  defaultCurrentPosition,
  ICurrentPosition,
  IFormNavigationState
} from './models/online-form.model';
import { OnlineFormService } from './services/online-form.service';

@Component({
  selector: 'sw-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() formId = '';
  @Input() accountId = '';
  @Input() isMenuShow = true;
  @Input() isFormReviewMode = false;
  @Input() isViewMode = false;
  @Input() isReviewMode = false;
  @Output() saveNext: EventEmitter<any> = new EventEmitter();
  @Output() goBack: EventEmitter<any> = new EventEmitter();
  // form: FormModel;
  // fg: FormGroup;
  form$: BehaviorSubject<FormModel> = new BehaviorSubject(null);
  fg$: BehaviorSubject<FormGroup> = new BehaviorSubject(null);
  isReady$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  formNavigationState$: BehaviorSubject<
    IFormNavigationState[]
  > = new BehaviorSubject(null);
  pagesPercents$: BehaviorSubject<IPagesPercent[]> = new BehaviorSubject([]);
  currentPosition$: BehaviorSubject<ICurrentPosition> = new BehaviorSubject(
    defaultCurrentPosition
  );
  formErrors$: BehaviorSubject<any> = new BehaviorSubject({});
  sectionGroupFieldsErrors$: BehaviorSubject<object> = new BehaviorSubject({});

  // keys
  consentKeys: string[] = [];
  termsConditionsKeys: string[] = [];

  fgValueChangesSubscription: Subscription;
  fgStatusChangesSubscription: Subscription;
  getOneFormSubscription: Subscription;

  isFormStatusChanged = false;
  fieldListByPage: object = {};
  fieldNameList: object = {};
  requiredListByPage: object = {};
  requiredValidator = Validators.compose([Validators.required]);
  SIGNATURE_TYPES: object = SIGNATURE_TYPES;
  E_SIGNATURE_TYPES: object = E_SIGNATURE_TYPES;

  destroyedSaveForm$ = new Subject();

  constructor(
    private onlineFormService: OnlineFormService,
    private location: Location
  ) {}

  static getFieldsForSectionByForms(forms: object[]): object {
    const oFields = {};
    // if (forms && forms.length > 0) {
    // forms.forEach((form: FormModel) => {
    // const key = form.id;

    // if(this.formErrors$.getValue()["fields"][key]) {
    //   oFields['forms'][key] = this.formErrors$.getValue()["fields"][key];
    // }
    // });
    // }
    return oFields;
  }

  static filterSignatureBySignatureAndKey(signature, key) {
    if (signature.isBothParents) {
      if (key.includes('_parent')) {
        return false;
      }
    } else {
      if (key.includes('_father') || key.includes('_mother')) {
        return false;
      }
    }

    if (signature.type === SIGNATURE_TYPES.WET) {
      if (key.includes('__external_') || key.includes('__system_')) {
        return false;
      }
    } else if (signature.eType === E_SIGNATURE_TYPES.EXTERNAL) {
      if (key.includes('__system_') || key.includes('__wet_')) {
        return false;
      }
    } else {
      // system
      if (key.includes('__external_') || key.includes('__wet_')) {
        return false;
      }
    }
    return true;
  }

  ngOnInit() {
    this.getForm();
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (
      (changes.formId && changes.formId.previousValue !== undefined) ||
      (changes.accountId && changes.accountId.previousValue !== undefined)
    ) {
      this.isReady$.next(false);
      this.form$.next(null);
      this.fg$.next(null);
      this.formNavigationState$.next(null);
      this.pagesPercents$.next([]);
      this.currentPosition$.next(defaultCurrentPosition);
      this.formErrors$.next({});
      this.sectionGroupFieldsErrors$.next({});
      this.getForm();
    }
  }

  isHaveSense(): boolean {
    return (
      this.form$.getValue().activeSections &&
      Object.keys(this.form$.getValue().activeSections).length > 0 &&
      this.form$.getValue().activeSections.constructor === Object
    );
  }

  loadingProcess() {
    this.initForm();
    this.initNavigation();
    this.initPercents();
    this.initPosition();
    this.initRequiredList();
    this.initFormControls();

    this.onlineFormService.setFormGroup(this.fg$.getValue());
    this.isReady$.next(true);
    // if (!this.isViewMode$.getValue()) {
    this.fgStatusChangesSubscription = this.fg$
      .getValue()
      .statusChanges.subscribe(() => {
        this.pagesPercents$.next(
          this.getRecountedPagesPercentsByPage(
            this.currentPosition$.getValue().page
          )
        );
      });
    this.fgValueChangesSubscription = this.fg$
      .getValue()
      .valueChanges.subscribe(() => {
        this.isFormStatusChanged = true;
      });
    // }
  }

  failedLoading() {
    this.isReady$.next(true);
  }

  formSubscriber(form: FormModel) {
    this.form$.next(form);
    console.log('FormModel by BE: ', this.form$.getValue());
    if (this.isHaveSense()) {
      this.loadingProcess();
    } else {
      this.failedLoading();
    }
  }

  getForm(): void {
    this.onlineFormService.setFromId(this.formId);
    this.onlineFormService.setAccountId(
      this.accountId === '' ? undefined : this.accountId
    );
    // TODO: check if we need formId here
    // this.route.params.subscribe(params => {
    //   this.formId = params.mongo_id;
    // });
    if (this.isViewMode) {
      if (this.getOneFormSubscription) {
        this.getOneFormSubscription.unsubscribe();
      }
      if (this.accountId === '') {
        // template by id
        this.getOneFormSubscription = this.onlineFormService
          .getTemplateForm()
          .subscribe((form: FormModel) => {
            this.formSubscriber(form);
          });
      } else {
        // by preview for person
        this.getOneFormSubscription = this.onlineFormService
          .getTemplateFormByAccount()
          .subscribe((form: FormModel) => {
            this.formSubscriber(form);
          });
      }
    } else {
      // form by link
      if (this.getOneFormSubscription) {
        this.getOneFormSubscription.unsubscribe();
      }
      this.getOneFormSubscription = this.onlineFormService
        .getOneForm()
        .subscribe((form: FormModel) => {
          this.formSubscriber(form);
        });
    }
  }

  calcPercentByPage(page): number {
    const filteredList = this.requiredListByPage[page].filter(key => {
      return (
        this.fg$.getValue().controls[key].valid &&
        this.fg$.getValue().controls[key].value !== false
      );
    });
    return this.requiredListByPage[page].length > 0
      ? Math.round(
          (filteredList.length / this.requiredListByPage[page].length) * 100
        )
      : 100;
  }

  getRecountedPagesPercentsByPage(page): IPagesPercent[] {
    return this.pagesPercents$.getValue().map(elem => {
      if (page !== elem.page) {
        return elem;
      }
      return { ...elem, percent: this.calcPercentByPage(page) };
    });
  }

  initForm(): void {
    this.onlineFormService.initOneForm();
    this.fg$.next(this.onlineFormService.getFormGroup());
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
    let newState: IFormNavigationState[] = this.formNavigationState$
      .getValue()
      .map(page => {
        const tabs = this.tabsByPage(page.page) as ISectionTab[];
        return { page: page.page, tabs };
      });

    newState = newState.filter(page => {
      const isEmpty = Object.values(mainMenuNames).find(item => {
        return page.tabs[0]._id === item;
      });
      return !isEmpty;
    });

    this.formNavigationState$.next(newState);
  }

  initConsentInfo(): ISectionTab[] {
    let tabs = [];
    if (
      this.form$.getValue().consentInfo &&
      this.form$.getValue().consentInfo.consents.length > 0
    ) {
      tabs = Object.values(this.form$.getValue().consentInfo.consents).map(
        (item: ConsentItemInfo) => {
          return { _id: item.id, name: item.title };
        }
      );
    } else {
      tabs.push({ _id: mainMenuNames.consentInfo, name: 'Consent section' });
    }
    return tabs;
  }

  initDocumentsForms(): ISectionTab[] {
    const tabs = [];
    tabs.push({ _id: 'documents', name: 'Documents for Parents' });
    tabs.push({ _id: 'pdf-forms', name: 'External Forms' });
    return tabs;
  }

  initGeneralInfo(): ISectionTab[] {
    let tabs = [];
    if (
      this.form$.getValue().fields &&
      this.form$.getValue().fields.length > 0
    ) {
      tabs = this.form$.getValue().fields.filter(item => {
        return item.type === 114;
      });
    } else {
      tabs = [{ _id: 'generalInfo', name: 'General Information', type: 114 }];
    }
    return tabs;
  }

  initPacketIntroduction(): ISectionTab[] {
    const tabs = [];
    // if (
    //   this.form$.getValue().packetIntroduction &&
    //   this.form$.getValue().packetIntroduction.packets &&
    //   this.form$.getValue().packetIntroduction.packets.length > 0
    // ) {
    //   tabs = Object.values(this.form$.getValue().packetIntroduction.packets).map(item => {
    //     return { _id: item["id"], name: item["title"] };
    //   });
    // } else {
    //   tabs.push({
    //     _id: mainMenuNames.packetIntroduction,
    //     name: "Introduction"
    //   });
    // }
    if (
      this.form$.getValue().packetIntroduction &&
      this.form$.getValue().packetIntroduction.content !== ''
    ) {
      tabs.push({
        _id: mainMenuNames.packetIntroduction + '__active',
        name: 'Introduction'
      });
    } else {
      tabs.push({
        _id: mainMenuNames.packetIntroduction,
        name: 'Introduction'
      });
    }

    return tabs;
  }

  initPayment(): ISectionTab[] {
    const tabs = [];
    tabs.push({ _id: mainMenuNames.payment, name: 'Payment section' });
    return tabs;
  }

  initPaymentSettings(): ISectionTab[] {
    const tabs = [];
    // if (
    //   this.form$.getValue().paymentSettings &&
    //   this.form$.getValue().paymentSettings.paymentSettingsItems.length > 0
    // ) {
    //   this.sections = Object.values(
    //     this.form$.getValue().paymentSettings.paymentSettingsItems
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
      name: 'Payment Settings section'
    });
    return tabs;
  }

  initTermsConditions(): ISectionTab[] {
    const tabs = [];
    if (
      this.form$.getValue().termsConditions &&
      this.form$.getValue().termsConditions.termsConditionsItems &&
      this.form$.getValue().termsConditions.termsConditionsItems.length > 0
    ) {
      // Object.values(
      //   this.form$.getValue().termsConditions.termsConditionsItems
      // ).map(item => {
      //   return { _id: item["id"], name: item["title"] };
      // });
      tabs.push({
        _id: mainMenuNames.termsConditions + '__active',
        name: 'Terms & Conditions section'
      });
    } else {
      tabs.push({
        _id: mainMenuNames.termsConditions,
        name: 'Terms & Conditions section'
      });
    }

    return tabs;
  }

  initTuitionContract(): ISectionTab[] {
    const tabs = [];
    // if (
    //   this.form$.getValue().paymentSettings &&
    //   this.form$.getValue().paymentSettings.paymentSettingsItems.length > 0
    // ) {
    //   this.sections = Object.values(
    //     this.form$.getValue().paymentSettings.paymentSettingsItems
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
      name: 'Payment Settings section'
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
        return [{ _id: 'id_' + Math.random(), name: 'Not Configured Tab' }];
        break;
    }
  }

  getFilteredSections(): IFormNavigationState[] {
    const activeMenuList: IFormNavigationState[] = [];
    // TODO: remove after create packetIntroduction
    // activeMenuList.push({ page: "packetIntroduction" });
    for (const page in this.form$.getValue().activeSections) {
      if (
        this.form$.getValue().activeSections[page] &&
        this.form$.getValue().activeSections[page].isActive
      ) {
        activeMenuList.push(Object.create({ page }));
      }
    }
    return activeMenuList;
  }

  initPercents() {
    // by default when page loads
    this.formNavigationState$.getValue().forEach(item => {
      this.pagesPercents$.next([
        ...this.pagesPercents$.getValue(),
        { page: item.page, percent: -1 } as IPagesPercent
      ]);
    });
    // also load by server
    if (
      typeof this.form$.getValue().pagesPercents !== 'undefined' &&
      this.form$.getValue().pagesPercents.length > 0
    ) {
      const pagePercentByServer: object = {};
      this.form$.getValue().pagesPercents.forEach(elem => {
        pagePercentByServer[elem.page] = elem.percent;
      });
      this.pagesPercents$.next(
        this.pagesPercents$.getValue().map(elem => {
          return { ...elem, percent: pagePercentByServer[elem.page] };
        })
      );
    }
  }

  initPosition() {
    if (this.formNavigationState$.getValue().length > 0) {
      this.currentPosition$.next({
        page: this.formNavigationState$.getValue()[0].page,
        tab: 0
      });
    }
  }

  initRequiredList() {
    Object.values(mainMenuNames).forEach((name: string) => {
      this.requiredListByPage[name] = [];
      this.fieldListByPage[name] = [];
    });
  }

  // Make lists with required fields and with control fields by page
  addToFieldLists(
    menuName: string,
    key: string,
    isRequired: boolean = false,
    label: string = 'hiddenField'
  ) {
    if (isRequired) {
      this.requiredListByPage[menuName].push(key);
    }
    this.fieldListByPage[menuName].push(key);
    this.fieldNameList[key] = label;
  }

  addControl(
    key: string,
    isRequired: boolean = false,
    validators: ValidatorFn[] = [],
    defaultValue: string | boolean | number | object | object[] = '',
    isDisabled: boolean = false
  ): void {
    isRequired = isDisabled ? false : isRequired;
    let controlValidators: ValidatorFn[] = [];
    if (validators.length === 0 && !isRequired) {
      controlValidators = [];
    } else if (
      validators.length > 0 &&
      isRequired &&
      !validators.includes(this.requiredValidator)
    ) {
      controlValidators = []
        .concat(validators)
        .concat([this.requiredValidator]);
    } else if (isRequired) {
      controlValidators.push(this.requiredValidator);
    } else {
      controlValidators = validators;
    }

    this.fg$.getValue().addControl(
      key,
      new FormControl(
        {
          value:
            this.form$.getValue().fieldsData &&
            this.form$.getValue().fieldsData[key]
              ? this.form$.getValue().fieldsData[key]
              : defaultValue,
          disabled: isRequired ? false : isDisabled // || this.isViewMode$.getValue()
        },
        // isRequired ? validators : null
        Validators.compose(controlValidators)
      )
    );
  }

  initConsentFormControls() {
    if (
      this.form$.getValue().consentInfo &&
      this.form$.getValue().consentInfo.consents.length > 0
    ) {
      const consentKeys = [
        '__checkbox',
        '__external_parent',
        '__external_father',
        '__external_mother',
        '__system_parent',
        '__system_father',
        '__system_mother',
        '__wet_parent',
        '__wet_father',
        '__wet_mother'
      ];

      consentKeys.forEach(key => {
        Object.values(this.form$.getValue().consentInfo.consents).forEach(
          (item: ConsentItemInfo) => {
            if (
              item.id &&
              OnlineFormComponent.filterSignatureBySignatureAndKey(
                item.signature,
                key
              )
            ) {
              this.consentKeys.push(item.id + key);
              const isRequired =
                key === '__checkbox'
                  ? item.checkbox.isActive
                  : item.signature.isRequire;
              const label = key === '__checkbox' ? 'Checkbox' : 'Signature';

              this.addToFieldLists(
                mainMenuNames.consentInfo,
                item.id + key,
                isRequired,
                label
              );
              this.addControl(item.id + key, isRequired);
            }
          }
        );
      });
    }
  }

  initDocumentsFormControls(documents) {
    if (documents && documents.length > 0) {
      documents.forEach(document => {
        const key = document.id;
        const isRequired = true; // document["isRequired"];
        const label = document.name;

        if (document.isUpload) {
          this.addToFieldLists(
            mainMenuNames.documentsForms,
            key,
            isRequired,
            label
          );
          this.addControl(key, isRequired);
        }
      });
    }
  }

  initFormsFormControls(forms) {
    if (forms && forms.length > 0) {
      forms.forEach(form => {
        if (form.form !== null) {
          const pdfFile = form.form.fieldsPdf;
          if (pdfFile) {
            pdfFile.forEach(pdfPage => {
              pdfPage.forEach(pdfField => {
                if (pdfField.id) {
                  const key = pdfField.id;
                  const isRequired =
                    pdfField.linkedField &&
                    pdfField.linkedField.options &&
                    pdfField.linkedField.options.required;
                  const label =
                    pdfField.linkedField && pdfField.linkedField.name
                      ? pdfField.linkedField.name
                      : 'Field';
                  this.addToFieldLists(
                    mainMenuNames.documentsForms,
                    key,
                    isRequired,
                    label
                  );
                  this.addControl(key, isRequired);
                }
              });
            });
          }
        }
      });
    }
  }

  getFieldsByFormFields(fields): any[] {
    let aFields = [];
    if (fields && fields.length > 0) {
      Object.values(fields).forEach((field: Field) => {
        if (field.type) {
          if (field.type === 113 || field.type === 114) {
            aFields = aFields.concat(this.getFieldsByFormFields(field.fields));
          } else {
            aFields.push(field);
          }
        }
      });
    }
    return aFields;
  }

  getComposedValidatorsByField(field): ValidatorFn[] {
    const arrayValidators: ValidatorFn[] = [];
    // arrayValidators.push(Validators.required);
    // if (
    //   field.options &&
    //   field.options.validators &&
    //   field.options.validators.phone &&
    //   field.options.validators.verifyPhone
    // ) {
    //   arrayValidators.push(phoneNumberValidator);
    // }

    if (field.options && field.options.required && !field.options.readonly) {
      arrayValidators.push(Validators.required);
    }

    // arrayValidators.push(
    //   minValueValidator(100)
    // );

    // if (
    //   field.options &&
    //   field.options.validators &&
    //   field.options.validators.minLength
    // ) {
    //   arrayValidators.push(
    //     Validators.minLength(field.options.validators.minLength)
    //   );
    // }

    // if (
    //   field.options &&
    //   field.options.validators &&
    //   field.options.validators.maxLength
    // ) {
    //   arrayValidators.push(
    //     Validators.maxLength(field.options.validators.maxLength)
    //   );
    // }

    if (field.options && field.options.validators) {
      // console.log("field.options.validators:", field.options.validators);
      Object.keys(field.options.validators).forEach(key => {
        switch (key) {
          case fieldValidators.CurrencyCanada:
            if (field.options.validators[key]) {
              // arrayValidators.push(currencyCanadaValidator);
            }
            break;
          case fieldValidators.CurrencyUS:
            if (field.options.validators[key]) {
              // arrayValidators.push(currencyUSValidator);
            }
            break;
          case fieldValidators.Criteria:
            if (field.options.validators[key]) {
              // field.options.validators[key].forEach(criteria => {
              // switch (criteria.title) {
              switch (field.options.validators[key]) {
                case fieldValidators.Alphabetic:
                  arrayValidators.push(alphabeticValidator());
                  break;
                case fieldValidators.Alphanumeric:
                  arrayValidators.push(alphanumericValidator());
                  break;
                case fieldValidators.Url:
                  arrayValidators.push(urlValidator());
                  break;

                default:
                  console.log(
                    'unhandled criteria',
                    field.options.validators[key]
                  );
                  break;
              }
              // });
            }
            break;
          case fieldValidators.DecimalPlace:
            if (field.options.validators[key]) {
              arrayValidators.push(numericValidator());
            }
            break;
          case fieldValidators.Email:
            if (field.options.validators[key]) {
              arrayValidators.push(emailValidator());
            }
            break;
          case fieldValidators.Percentage:
            if (field.options.validators[key]) {
              arrayValidators.push();
            }
            break;
          case fieldValidators.max:
            if (field.options.validators[key]) {
              arrayValidators.push(
                maxValueValidator(field.options.validators.max as number)
              );
            }
            break;
          case fieldValidators.maxLength:
            if (field.options.validators[key]) {
              arrayValidators.push(
                Validators.maxLength(field.options.validators.maxLength)
              );
            }
            break;
          case fieldValidators.min:
            if (field.options.validators[key]) {
              arrayValidators.push(
                minValueValidator(field.options.validators.min as number)
              );
            }
            break;
          case fieldValidators.minLength:
            // console.log("minLength", field.options.validators);
            if (field.options.validators[key]) {
              arrayValidators.push(
                Validators.minLength(field.options.validators.minLength)
              );
            }
            break;
          case fieldValidators.phone:
            if (
              field.options.validators[key] &&
              field.options.validators.verifyPhone
            ) {
              arrayValidators.push(phoneNumberValidator());
            }
            break;
          case fieldValidators.verifyPhone:
            break;
          case fieldValidators.required:
            // console.log('options: ', field.options)
            if (field.options.validators[key] && !field.options.readonly) {
              arrayValidators.push(Validators.required);
            }
            break;

          default:
            console.log('New validator case: ', key);
            break;
        }
      });
    }
    // console.log('arrayValidators', arrayValidators);
    return arrayValidators;
  }

  initCustomTable(body) {
    body.people.forEach(people => {
      body.subjects.forEach(subject => {
        const isRequired = false;
        const validators = [this.requiredValidator];
        const defaultValue = false;
        const isDisabled = false;
        this.addControl(
          `${people.id}__${subject.id}`,
          isRequired,
          validators,
          defaultValue,
          isDisabled
        );
        // this.addControl(field._id);
      });
    });
  }

  initGeneralInfoFormControls(fields) {
    const aFields = this.getFieldsByFormFields(fields);
    if (aFields.length > 0) {
      aFields.forEach(field => {
        const defaultValue =
          field.options && field.options.default
            ? field.options.default
            : field.type === 105
            ? []
            : '';
        if (field._id) {
          const aValidators = !field.options.readonly
            ? this.getComposedValidatorsByField(field)
            : [];
          // console.log('validatorFn', validatorFn);
          this.addControl(
            field._id,
            field.options.required,
            aValidators,
            defaultValue,
            field.options.readonly
          );
          const isRequired = field.options.required;
          // aValidators.find(validator => {
          //   return validator === Validators.required;
          // }) && !field.options.readonly;

          this.addToFieldLists(
            mainMenuNames.generalInfo,
            field._id,
            isRequired,
            field.name
          );
        }
      });
    }
    this.initCustomTable(customTable);
  }

  initPacketIntroductionFormControls() {
    if (
      this.form$.getValue().packetIntroduction &&
      this.form$.getValue().packetIntroduction.content
    ) {
      const key = mainMenuNames.packetIntroduction;
      this.addToFieldLists(mainMenuNames.packetIntroduction, key);
      this.addControl(key);
    }
  }

  initTermsConditionsFormControls() {
    if (
      this.form$.getValue().termsConditions &&
      this.form$.getValue().termsConditions.termsConditionsItems.length > 0
    ) {
      const termsConditionsKeys = [
        'termsConditions__external_parent',
        'termsConditions__external_father',
        'termsConditions__external_mother',
        'termsConditions__system_parent',
        'termsConditions__system_father',
        'termsConditions__system_mother',
        'termsConditions__wet_parent',
        'termsConditions__wet_father',
        'termsConditions__wet_mother'
      ];

      const isRequired = this.form$.getValue().termsConditions.signature
        .isRequire;

      termsConditionsKeys
        .filter(key => {
          return OnlineFormComponent.filterSignatureBySignatureAndKey(
            this.form$.getValue().termsConditions.signature,
            key
          );
        })
        .forEach(key => {
          const label = 'Checkbox';
          this.termsConditionsKeys.push(key);
          this.addToFieldLists(
            mainMenuNames.termsConditions,
            key,
            isRequired,
            label
          );
          this.addControl(key, isRequired);
        });

      Object.values(
        this.form$.getValue().termsConditions.termsConditionsItems
      ).forEach((item: TermsConditionsItem) => {
        if (item.id) {
          const key = item.id + '__checkbox';
          this.termsConditionsKeys.push(key);
          // tslint:disable-next-line:no-shadowed-variable
          const isRequired = item.checkbox.isActive;
          const label = 'Signature';
          this.addToFieldLists(
            mainMenuNames.termsConditions,
            key,
            isRequired,
            label
          );
          this.addControl(key, isRequired);
        }
      });
    }
  }

  initFormControls() {
    this.initConsentFormControls();
    this.initDocumentsFormControls(this.form$.getValue().documents);
    this.initFormsFormControls(this.form$.getValue().forms);
    this.initGeneralInfoFormControls(this.form$.getValue().fields);
    this.initPacketIntroductionFormControls();
    this.initTermsConditionsFormControls();
  }

  goToPage(pageName) {
    this.currentPosition$.next({ page: pageName, tab: 0 });
  }

  goToTab(tabIndex) {
    this.currentPosition$.next({
      page: this.currentPosition$.value.page,
      tab: tabIndex
    });
  }

  goToPreviousStep() {
    const currentPageIndex = this.formNavigationState$
      .getValue()
      .findIndex(page => {
        return page.page === this.currentPosition$.value.page;
      });
    if (this.currentPosition$.value.tab !== 0) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        tab: this.currentPosition$.value.tab - 1
      });
      this.goBack.emit(false);
    } else if (currentPageIndex !== 0) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        page: this.formNavigationState$.getValue()[currentPageIndex - 1].page,
        tab:
          this.formNavigationState$.getValue()[currentPageIndex - 1].tabs
            .length - 1
      });
      this.goBack.emit(false);
    } else {
      // TODO: need business clarification for this branch of code
      // this.goBackLocation();
      this.goBack.emit(true);
    }
  }

  goPreviousStep() {
    this.goToPreviousStep();
  }

  goToNextStep() {
    const currentPage = this.formNavigationState$.getValue().find(page => {
      return page.page === this.currentPosition$.value.page;
    });
    const currentPageIndex = this.formNavigationState$
      .getValue()
      .findIndex(page => {
        return page.page === this.currentPosition$.value.page;
      });
    if (currentPage.tabs.length > this.currentPosition$.value.tab + 1) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        tab: this.currentPosition$.value.tab + 1
      });
      this.saveNext.emit(false);
    } else if (
      currentPageIndex + 1 <
      this.formNavigationState$.getValue().length
    ) {
      this.currentPosition$.next({
        ...this.currentPosition$.value,
        page: this.formNavigationState$.getValue()[currentPageIndex + 1].page,
        tab: 0
      });
      this.saveNext.emit(false);
    } else {
      // TODO: goToFinishPage
      console.log('TODO: goToFinishPage');
      this.saveNext.emit(true);
    }
  }

  getFieldsForSectionGroupByFormFields(fields): object {
    const oFields = {};
    Object.values(fields).forEach((field: Field) => {
      if (field.type) {
        if (field.type === 113 || field.type === 114) {
          const nestedNode = this.getFieldsForSectionGroupByFormFields(
            field.fields
          );
          if (
            !(
              Object.keys(nestedNode).length === 0 &&
              nestedNode.constructor === Object
            )
          ) {
            oFields[field._id] = nestedNode;
          }
        } else {
          if (
            this.formErrors$.getValue().fields &&
            this.formErrors$.getValue().fields[field._id]
          ) {
            oFields[field._id] = this.formErrors$.getValue().fields[field._id];
          }
        }
      }
    });
    return oFields;
  }

  getFieldsForSectionByDocuments(documents: object[]): object {
    const oFields: FormModel | any = {};
    if (documents && documents.length > 0) {
      documents.forEach((document: DocumentsModel) => {
        const key = document.id;

        if (
          this.formErrors$.getValue().fields &&
          this.formErrors$.getValue().fields[key]
        ) {
          oFields.documents[key] = this.formErrors$.getValue().fields[key];
        }
      });
    }
    return oFields;
  }

  getFieldsForSectionByConsent(consents: object[]): object {
    const oFields = {};
    consents.forEach((section: FormModel) => {
      const sectionErrors = {};

      this.consentKeys.forEach(key => {
        if (
          key.includes(section.id) &&
          this.formErrors$.getValue().fields &&
          this.formErrors$.getValue().fields[key]
        ) {
          sectionErrors[key] = this.formErrors$.getValue().fields[key];
        }
      });

      if (
        !(
          Object.keys(sectionErrors).length === 0 &&
          sectionErrors.constructor === Object
        )
      ) {
        oFields[section.id] = sectionErrors;
      }
    });
    return oFields;
  }

  getFieldsForSectionByTermsConditions(termsConditionsItems: object[]): object {
    const oFields = {};
    termsConditionsItems.forEach(section => {
      const sectionErrors = {};

      this.termsConditionsKeys.forEach(key => {
        if (
          this.formErrors$.getValue().fields &&
          this.formErrors$.getValue().fields[key]
        ) {
          sectionErrors[key] = this.formErrors$.getValue().fields[key];
        }
      });

      if (
        !(
          Object.keys(sectionErrors).length === 0 &&
          sectionErrors.constructor === Object
        )
      ) {
        oFields[mainMenuNames.termsConditions + '__active'] = sectionErrors;
      }
    });
    return oFields;
  }

  composeSectionGroupFieldsErrors(): object {
    const generalInfo = this.getFieldsForSectionGroupByFormFields(
      this.form$.getValue().fields
    ); // OK
    const documents = this.getFieldsForSectionByDocuments(
      this.form$.getValue().documents
    );
    const forms = OnlineFormComponent.getFieldsForSectionByForms(
      this.form$.getValue().forms
    );
    const consentInfo = this.getFieldsForSectionByConsent(
      this.form$.getValue().consentInfo.consents
    );
    const termsConditions = this.getFieldsForSectionByTermsConditions(
      this.form$.getValue().termsConditions.termsConditionsItems
    );
    return Object.assign(
      {},
      generalInfo,
      documents,
      forms,
      consentInfo,
      termsConditions
    );
  }

  saveAndNextStep() {
    if (
      this.isFormStatusChanged &&
      this.currentPosition$.getValue().page !== 'packetIntroduction' &&
      this.accountId === ''
    ) {
      const savingObj = {
        pagesPercents: this.pagesPercents$.getValue(),
        fieldListByPage: undefined,
        currentPosition: undefined,
        fieldsData: undefined
      };
      // TODO: change to commented code when back-end will be ready
      savingObj.fieldListByPage = this.fieldListByPage;
      savingObj.currentPosition = this.currentPosition$.getValue();
      savingObj.fieldsData = this.fg$.getValue().value;

      if (this.isViewMode) {
        this.onlineFormService
          .sendFormTemplate(savingObj)
          .pipe(takeUntil(this.destroyedSaveForm$))
          .subscribe(
            () => {
              this.formErrors$.next({});
              this.sectionGroupFieldsErrors$.next(
                this.composeSectionGroupFieldsErrors()
              );
              this.goToNextStep();
              this.isFormStatusChanged = false;
            },
            error => {
              if (error && error.error && error.error.status === 0) {
                this.formErrors$.next(error.error.errors);
                Object.keys(this.fg$.getValue().controls).forEach(controlId => {
                  this.fg$.getValue().controls[controlId].markAsDirty();
                });
                this.fg$.getValue().updateValueAndValidity();
              }
              this.sectionGroupFieldsErrors$.next(
                this.composeSectionGroupFieldsErrors()
              );
              // console.log(this.formErrors$.getValue());
              // console.log(this.sectionGroupFieldsErrors$.getValue());
            }
          );
      } else {
        this.onlineFormService
          .sendForm(savingObj)
          .pipe(takeUntil(this.destroyedSaveForm$))
          .subscribe(
            () => {
              this.formErrors$.next({});
              this.sectionGroupFieldsErrors$.next(
                this.composeSectionGroupFieldsErrors()
              );
              this.goToNextStep();
              this.isFormStatusChanged = false;
            },
            error => {
              if (error && error.error && error.error.status === 0) {
                this.formErrors$.next(error.error.errors);
                Object.keys(this.fg$.getValue().controls).forEach(controlId => {
                  this.fg$.getValue().controls[controlId].markAsDirty();
                });
                this.fg$.getValue().updateValueAndValidity();
              }
              this.sectionGroupFieldsErrors$.next(
                this.composeSectionGroupFieldsErrors()
              );
              // console.log(this.formErrors$.getValue());
              // console.log(this.sectionGroupFieldsErrors$.getValue());
            }
          );
      }
    } else {
      // console.log("goNext");
      this.goToNextStep();
    }
  }

  goBackLocation() {
    this.location.back();
  }

  onMainNavAction(event) {
    switch (event) {
      case 'save':
        this.saveAndNextStep();
        break;
      case 'cancel':
        this.goBackLocation();
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.destroyedSaveForm$.next();
    if (this.fgStatusChangesSubscription) {
      this.fgStatusChangesSubscription.unsubscribe();
    }
    if (this.fgValueChangesSubscription) {
      this.fgValueChangesSubscription.unsubscribe();
    }
    if (this.getOneFormSubscription) {
      this.getOneFormSubscription.unsubscribe();
    }
  }
}
