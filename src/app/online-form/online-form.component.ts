import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Form } from '@app/models/data-collection/form';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from './models/menu.model';
import { OnlineFormService } from './services/online-form.service';

@Component({
  selector: 'sw-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormComponent implements OnInit {
  formId: string;
  form: Form;
  fg: FormGroup;

  formNavigationState: any[] = [];
  pagesPercents: any[] = [];
  currentPosition: any = {};

  saveFormSubscription: Subscription;
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
      this.route.snapshot.paramMap.get('mongo_id')
    );
    // TODO: check if we need formId here
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
      this.initFormControls();
      if (this.onlineFormService.getFormGroup()) {
        this._isReady$.next(true);
      }
    });
  }

  initForm(): void {
    this.onlineFormService.initOneForm();
    this.fg = this.onlineFormService.getFormGroup();
  }

  initNavigation(): void {
    this.initNavigationState();
    this.initTabsForEachPage();
  }

  initNavigationState(): void {
    this.formNavigationState = this.getFilteredSections();
  }

  initTabsForEachPage(): void {
    this.formNavigationState = this.formNavigationState.map(page => {
      return { ...page, tabs: this.tabsByPage(page.page) };
    });
  }

  initConsentInfo(): any[] {
    let tabs = [];
    if (this.form.consentInfo && this.form.consentInfo.consents.length > 0) {
      tabs = Object.values(this.form.consentInfo.consents).map(
        (item: any) => {
          return { _id: item.id, name: item.title };
        }
      );
    } else {
      tabs.push({ _id: mainMenuNames.consentInfo, name: 'Consent section' });
    }
    return tabs;
  }

  initDocumentsForms(): any[] {
    const tabs = [];
    tabs.push({ _id: 'documents', name: 'Documents for Parents' });
    tabs.push({ _id: 'pdf-forms', name: 'External Forms' });
    return tabs;
  }

  initGeneralInfo(): any[] {
    let tabs = [];
    if (this.form.fields && this.form.fields.length > 0) {
      tabs = this.form.fields.filter(item => {
        return item.type === 114;
      });
    } else {
      tabs = [{ _id: 'generalInfo', name: 'General Information', type: 114 }];
    }
    return tabs;
  }

  initPacketIntroduction(): any[] {
    const tabs = [];
    tabs.push({ _id: mainMenuNames.packetIntroduction, name: 'Introduction' });
    tabs.push({
      _id: mainMenuNames.packetIntroduction + '2',
      name: 'Introduction 2'
    });
    return tabs;
  }

  initPayment(): any[] {
    const tabs = [];
    tabs.push({ _id: mainMenuNames.payment, name: 'Payment section' });
    return tabs;
  }

  initPaymentSettings(): any[] {
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
      name: 'Payment Settings section'
    });
    return tabs;
  }

  initTermsConditions(): any[] {
    const tabs = [];
    // if (
    //   this.form.termsConditions &&
    //   this.form.termsConditions.termsConditionsItems.length > 0
    // ) {
    //   this.sections = Object.values(
    //     this.form.termsConditions.termsConditionsItems
    //   ).map(item => {
    //     return { _id: item["id"], name: item["title"] };
    //   });
    // } else {
    //   this.sections = [
    //     { _id: "termsConditions", name: "Terms & Conditions section" }
    //   ];
    // }
    tabs.push({
      _id: mainMenuNames.termsConditions,
      name: 'Terms & Conditions section'
    });
    return tabs;
  }

  initTuitionContract(): any[] {
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
      name: 'Payment Settings section'
    });
    return tabs;
  }

  tabsByPage(page): any[] {
    const tabs = [];
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

  getFilteredSections(): object[] {
    const activeMenuList: object[] = [];
    // TODO: remove after create packetIntroduction
    activeMenuList.push({ page: 'packetIntroduction' });
    for (const page in this.form.activeSections) {
      if (
        this.form.activeSections[page] &&
        this.form.activeSections[page].isActive
      ) {
        activeMenuList.push({ page });
      }
    }
    return activeMenuList;
  }

  initPercents() {
    this.formNavigationState.map(item => {
      this.pagesPercents.push({ page: item.page, percent: 33 });
    });
  }

  initPosition() {
    if (this.formNavigationState.length > 0) {
      this.currentPosition = {
        page: this.formNavigationState[0].page,
        tab: 0
      };
    }
  }

  initConsentFormControls() {
    if (this.form.consentInfo && this.form.consentInfo.consents.length > 0) {
      const consentKeys = [
        '_agree',
        '_external_parent',
        '_external_father',
        '_external_mother',
        '_system_parent',
        '_system_father',
        '_system_mother',
        '_wet_parent',
        '_wet_father',
        '_wet_mother'
      ];

      consentKeys.forEach(key => {
        Object.values(this.form.consentInfo.consents).forEach((item: any) => {
          if (item.id) {
            // const aValidators = !this.field.options.readonly ? Validators.compose(this.getComposed()) : {};
            this.fg.addControl(item.id + key, new FormControl(
              {
                value: this.form.fieldsData[item.id + key],
                disabled: false
              },
              // aValidators
            ));
          }
        });
      });
    }
  }

  initFormControls() {
    this.initConsentFormControls();
  }

  goToPage(pageName) {
    this.currentPosition = { page: pageName, tab: 0 };
  }

  goToTab(tabIndex) {
    this.currentPosition = {
      page: this.currentPosition.page,
      tab: tabIndex
    };
  }

  goToPreviousStep() {
    const currentPageIndex = this.formNavigationState.findIndex(page => {
      return page.page === this.currentPosition.page;
    });
    if (this.currentPosition.tab !== 0) {
      this.currentPosition = {
        ...this.currentPosition,
        tab: this.currentPosition.tab - 1
      };
    } else if (currentPageIndex !== 0) {
      this.currentPosition = {
        ...this.currentPosition,
        page: this.formNavigationState[currentPageIndex - 1].page,
        tab: this.formNavigationState[currentPageIndex - 1].tabs.length - 1
      };
    }
  }

  goPreviousStep() {
    this.goToPreviousStep();
    // console.log("goPreviousStep");
  }

  goToNextStep() {
    const currentPage = this.formNavigationState.find(page => {
      return page.page === this.currentPosition.page;
    });
    const currentPageIndex = this.formNavigationState.findIndex(page => {
      return page.page === this.currentPosition.page;
    });
    if (currentPage.tabs.length > this.currentPosition.tab + 1) {
      this.currentPosition = {
        ...this.currentPosition,
        tab: this.currentPosition.tab + 1
      };
    } else if (currentPageIndex + 1 < this.formNavigationState.length) {
      this.currentPosition = {
        ...this.currentPosition,
        page: this.formNavigationState[currentPageIndex + 1].page,
        tab: 0
      };
    } else {
      // TODO: goToFinishPage
      console.log('TODO: goToFinishPage');
    }
  }

  saveAndNextStep() {
    this.onlineFormService
      .sendForm({
        fieldsData: this.fg.value,
        pagesPercents: this.pagesPercents
      })
      .subscribe(() => {
        this.goToNextStep();
      });
    // console.log("saveAndNextStep");
  }

  ngOnDestroy(): void {
    this._isReady$.unsubscribe();
    if (this.saveFormSubscription) {
      this.saveFormSubscription.unsubscribe();
    }
  }
}
