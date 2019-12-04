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
    private cdr: ChangeDetectorRef
  ) {
    this.formSendService.$periodsList
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.periodsList = val;
        this.cdr.markForCheck();
      });
    this.formSendService.$selectedPeriods
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.selectedPeriods = val;
        this.cdr.markForCheck();
      });
    this.formSendService.$accountsList
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.accountsList = val;
        this.cdr.markForCheck();
      });
    this.formSendService.$selectedAccounts
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.selectedAccountsList = val;
        this.cdr.markForCheck();
      });
    this.formSendService.$roundsList
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.roundsList = val;
        this.cdr.markForCheck();
      });
  }

  ngOnInit() {
    // if (this.formService.formId) {
    //   this.formId = this.formService.formId;
    //   this.formSendService.initFormSend(this.formId);
    // }
    this.formService.formId$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(formId => {
        if (formId) {
          this.formId = formId;
          this.formSendService.initFormSend(formId);
          // console.log('this.formId', this.formId);

          this.roundsList$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(rounds => {
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

  nextStep() {
    this.formSendService.nextStep();
  }

  prevStep() {
    this.formSendService.prevStep();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
