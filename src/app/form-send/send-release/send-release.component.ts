import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IRound } from '@app/form-send/models/send.model';
import { FormService } from '@app/form/form.service';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { DateTime } from 'luxon';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormSendService } from '../form-send.service';

@Component({
  selector: 'sw-send-release',
  templateUrl: './send-release.component.html',
  styleUrls: ['./send-release.component.scss']
})
export class SendReleaseComponent implements OnInit, OnDestroy {
  public roundsList$: BehaviorSubject<IRound[]> = new BehaviorSubject([]);
  public formId$: BehaviorSubject<string> = new BehaviorSubject(null);
  public periodsList: any = [];
  public selectedPeriods: any = [];
  public accountsList: any[] = [];
  public selectedAccountsList: any[] = [];
  public periodsFilter: FormControl = new FormControl([]);
  public form: FormGroup;
  public isNew = false;
  public showForm = false;
  public selectOptions = Array.from({ length: 30 }).map((_, i) => i);
  public mailingOptions = ['Use Mailing House', 'Self-mail'];
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };
  destroyed$ = new Subject();

  @ViewChild('link', { static: false }) link: ElementRef;
  roundId: any;

  get roundsList(): IRound[] {
    return this.roundsList$.getValue() ? this.roundsList$.getValue() : [];
  }

  set roundsList(value: IRound[]) {
    this.roundsList$.next(value);
  }

  get formId(): string {
    return this.formId$.getValue() ? this.formId$.getValue() : null;
  }

  set formId(value: string) {
    this.formId$.next(value);
  }

  constructor(
    private formSendService: FormSendService,
    private formService: FormService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private dataCollectionService: DataCollectionService
  ) {
    this.formSendService.$periodsList.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      this.periodsList = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$selectedPeriods.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      this.selectedPeriods = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$accountsList.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      this.accountsList = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$selectedAccounts.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      this.selectedAccountsList = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$roundsList.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      this.roundsList = val;
      this.cdr.markForCheck();
    });
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      types: fb.group({
        email: this.fb.group({
          selected: [false],
          subject: ['', [Validators.required]],
          body: ['', [Validators.required]],
          buttonText: ['']
        }),
        mailing: this.fb.group({
          selected: [false],
          delay_days: [''],
          is_self_mail: ['Use Mailing House'],
          is_delay_days: [false],
          mailing_house_id: ['']
        })
      })
    });
  }

  ngOnInit() {
    // if (this.formService.formId) {
    //   this.formId = this.formService.formId;
    //   this.formSendService.initFormSend(this.formId);
    // }
    this.formService.formId$.pipe(takeUntil(this.destroyed$)).subscribe((formId) => {
      if (formId) {
        this.formId = formId;
        this.formSendService.initFormSend(formId);
        // console.log('this.formId', this.formId);

        this.roundsList$.pipe(takeUntil(this.destroyed$)).subscribe(rounds => {
          // console.log('roundsList$', rounds);
          this.formSendService.previewRoundList = this.formSendService.getPreviewRoundsListByRounds(
            rounds
          );
        });
      }
    });
    // console.log('this.formId', this.formId);
    // this.id = this.formSendService.formId
    //   ? this.formSendService.formId
    //   : this.formService.form.value._id
    //     ? this.formService.form.value._id
    //     : 'no id';

    // console.log('this.formId', this.formId);

  }

  addRound() {
    this.isNew = true;
    this.showForm = true;
  }

  cancelRound() {
    this.form.reset();
    this.showForm = false;
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
    this.showForm = false;
  }

  isSelectedPeriod(id): boolean {
    return this.formSendService.isSelectedPeriod(id);
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  getSplits(item: any) {
    let res = '';
    if (item.splits && item.splits.length > 0) {
      item.splits.forEach((s, index) => {
        res += `${s.name}`;
        if (index < item.splits.length - 1) {
          res += ', ';
        }
      });
    }
    return res;
  }

  getPeriodsLength() {
    return `(${this.periodsList.length})`;
  }

  checkboxAction(item, e) {
    this.formSendService.togglePeriods(item, e);
    this.cdr.markForCheck();
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
    this.form.patchValue({
      name: i.name,
      start_date: DateTime.fromString(i.start_date, 'yyyy-MM-dd').toFormat(
        'MM/dd/yyyy'
      ),
      end_date: DateTime.fromString(i.end_date, 'yyyy-MM-dd').toFormat(
        'MM/dd/yyyy'
      )
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
        ...i.types.mailing
      });
    }
    this.formSendService.selectedAccounts = i.accounts;
    this.showForm = true;
  }

  deleteRound(i) {
    this.formSendService.deleteRound(i);
  }

  nextStep() {
    this.formSendService.nextStep();
  }

  prevStep() {
    this.formSendService.prevStep();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete();
  }
}
