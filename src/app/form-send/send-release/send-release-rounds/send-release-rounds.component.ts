import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IMailingHouse, IRound } from '@app/form-send/models/send.model';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormSendService } from '../../form-send.service';

@Component({
  selector: 'sw-send-release-rounds',
  templateUrl: './send-release-rounds.component.html',
  styleUrls: ['./send-release-rounds.component.scss']
})
export class SendReleaseRoundsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() link: ElementRef;
  @Input() mailingHouseList: IMailingHouse[];
  @Input() accountsList: any[];
  @Input() selectedAccountsList: any[];
  @Input() roundsList: IRound[];

  public form: FormGroup;
  public isNew = false;
  public isShowForm = false;
  roundId: any;
  public mailingOptions = ['Use Mailing House', 'Self-mail'];
  public mailingHouseOptions = [
    {
      id: 0,
      title: 'Has no choose'
    },
    {
      id: 1,
      title: 'Fake Mailing House 1'
    },
    {
      id: 2,
      title: 'Fake Mailing House 2'
    }
  ];
  public selectOptions = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    title: i
  }));
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };

  destroyed$ = new Subject();

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private dataCollectionService: DataCollectionService
  ) {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      types: fb.group({
        email: this.fb.group({
          selected: [false],
          subject: [null],
          body: [null],
          buttonText: [null]
        }),
        mailing: this.fb.group({
          selected: [false],
          delay_days: [null],
          is_self_mail: [null],
          is_delay_days: [null],
          mailing_house_id: [null],
          radio_mailing_type: [null],
          select_delay_days: [null],
          select_mailing_house: [null]
        })
      })
    });
  }

  ngOnInit() {
    if (this.roundsList.length === 0) {
      this.addRound();
    } else {
      this.cancelRound();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.roundsList) {
      if (this.roundsList.length === 0) {
        this.addRound();
      } else {
        this.cancelRound();
      }
    }
  }

  setDefaultFormValues() {
    this.form.get('types.email.buttonText').setValue('Start Form');
    this.form.get('types.mailing.delay_days').setValue(0);
    this.form.get('types.mailing.is_self_mail').setValue(0);
    this.form.get('types.mailing.is_delay_days').setValue(0);
    this.form.get('types.mailing.radio_mailing_type').setValue(this.mailingOptions[0]);
  }

  addRound() {
    this.isNew = true;
    this.isShowForm = true;
    this.form.reset();
    this.setDefaultFormValues();
    this.formSendService.selectedAccounts = [];
  }

  cancelRound() {
    this.form.reset();
    this.formSendService.selectedAccounts = [];
    this.isShowForm = false;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  saveRound() {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return;
    }
    this.formSendService.saveRound(this.form.value, this.isNew, this.roundId);
    this.form.reset();
    this.formSendService.selectedAccounts = [];
    this.isShowForm = false;
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  refreshFormValidationBySelector(selector: string, newValidator: ValidatorFn | ValidatorFn[]) {
    this.form.get(selector).setValidators(newValidator);
    this.form.get(selector).updateValueAndValidity();
  }

  changeEmailSelected(event) {
    if (event) {
      this.refreshFormValidationBySelector('types.email.subject', [Validators.required]);
      this.refreshFormValidationBySelector('types.email.body', [Validators.required]);
    } else {
      this.refreshFormValidationBySelector('types.email.subject', []);
      this.refreshFormValidationBySelector('types.email.body', []);
    }
  }

  changeMailingSelected(event) {
    if (event && this.form.get('types.mailing.is_self_mail').value === 0) {
      this.refreshFormValidationBySelector('types.mailing.select_mailing_house', [Validators.required]);
      this.refreshFormValidationBySelector('types.mailing.mailing_house_id', [Validators.required]);
    } else {
      this.refreshFormValidationBySelector('types.mailing.select_mailing_house', []);
      this.refreshFormValidationBySelector('types.mailing.mailing_house_id', []);
    }
  }

  isSelfMail(): boolean {
    return (
      this.form
        .get('types')
        .get('mailing')
        .get('is_self_mail').value === 1
    );
  }

  isMailHouse(): boolean {
    return !(
      this.form
        .get('types')
        .get('mailing')
        .get('is_self_mail').value === 1
    );
  }

  changeMailingType(event: string) {
    this.form
      .get('types')
      .get('mailing')
      .get('is_self_mail')
      .setValue(this.mailingOptions[1] === event ? 1 : 0);
    this.changeMailingSelected(true);
  }

  changeMailingHouse(event) {
    this.form
      .get('types')
      .get('mailing')
      .get('mailing_house_id')
      .setValue(event && event[0] && event[0].id ? event[0].id : null);
    this.form
      .get('types')
      .get('mailing')
      .get('select_mailing_house')
      .setValue(
        event && event.length > 0 ? event : null
        // : this.mailingHouseList
        //   ? [this.mailingHouseList[0]]
        //   : [this.mailingHouseOptions[0]]
      );
  }

  changeDelayDays(event) {
    this.form
      .get('types')
      .get('mailing')
      .get('delay_days')
      .setValue(event && event[0] && event[0].id ? event[0].id : 0);
    this.form
      .get('types')
      .get('mailing')
      .get('select_delay_days')
      .setValue(event && event.length > 0 ? event : [this.selectOptions[0]]);
  }

  changeIsDelayDays(event) {
    this.form
      .get('types')
      .get('mailing')
      .get('is_delay_days')
      .setValue(event ? 1 : 0);
  }

  getReleaseType(item) {
    let res = '';
    if (!!item.types.email) {
      res += 'Email';
    }
    if (!!item.types.email && !!item.types.mailing) {
      res += ', ';
    }
    if (!!item.types.mailing) {
      res += 'Mailing';
    }
    return res;
  }

  getTypes(type: string) {
    return `/assets/images/icons/types-${type}.svg`;
  }

  onExportZIP() {
    this.dataCollectionService
      .exportPDFFormZIP(this.formSendService.formId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(url => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `forms.zip`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
      });
  }

  toggleAccount(item: any, e: boolean) {
    if (item.data) {
      item.data.forEach(i => {
        this.formSendService.toggleAccounts(i, e);
      });
    } else {
      this.formSendService.toggleAccounts(item, e);
    }
  }

  isSelectedAccount(i): boolean {
    return this.formSendService.isSelectedAccounts(i);
  }

  allChildrenSelected(i): boolean {
    return this.formSendService.allChildrenSelected(i);
  }

  someChildrenSelected(i): boolean {
    return this.formSendService.someChildrenSelected(i);
  }

  editRound(i) {
    this.isNew = false;
    this.roundId = i.id;
    this.form.reset();

    const start_date = DateTime.fromString(i.start_date, 'yyyy-MM-dd').invalid
      ? DateTime.fromString(i.start_date, 'yyyy/MM/dd').toFormat('MM/dd/yyyy')
      : DateTime.fromString(i.start_date, 'yyyy-MM-dd').toFormat('MM/dd/yyyy');
    const end_date = DateTime.fromString(i.end_date, 'yyyy-MM-dd').invalid
      ? DateTime.fromString(i.end_date, 'yyyy/MM/dd').toFormat('MM/dd/yyyy')
      : DateTime.fromString(i.end_date, 'yyyy-MM-dd').toFormat('MM/dd/yyyy');

    this.form.patchValue({
      name: i.name,
      start_date,
      end_date
    });
    if (!!i.types.email) {
      this.form.get('types.email').patchValue({
        selected: true,
        ...i.types.email
      });
    }
    if (!!i.types.mailing) {
      this.form.get('types.mailing').patchValue({
        selected: true,
        ...i.types.mailing,
        ...{
          radio_mailing_type: this.mailingOptions[i.types.mailing.is_self_mail],
          select_delay_days: this.selectOptions.filter(
            elem => i.types.mailing.delay_days === elem.id
          ),
          select_mailing_house: this.mailingHouseList
            ? this.mailingHouseList.filter(
                elem => i.types.mailing.mailing_house_id === elem.id
              )
            : this.mailingHouseOptions.filter(
                elem => i.types.mailing.mailing_house_id === elem.id
              )
        }
      });
      this.changeMailingSelected(true);
    }
    this.formSendService.selectedAccounts = i.accounts;
    this.isShowForm = true;
  }

  deleteRound(i) {
    this.formSendService.deleteRound(i);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
