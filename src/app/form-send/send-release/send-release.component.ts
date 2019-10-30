import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormSendService } from '../form-send.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';

@Component({
  selector: 'sw-send-release',
  templateUrl: './send-release.component.html',
  styleUrls: ['./send-release.component.scss']
})
export class SendReleaseComponent implements OnInit {

  public periodsList: any = [];
  public selectedPeriods: any = [];
  public accountsList: any[] = [];
  public periodsFilter: FormControl = new FormControl([]);
  public form: FormGroup;
  public showForm: boolean = false;
  public selectOptions = Array.from({ length: 30 }).map((_, i) => i);
  public mailingOptions = ['Use Mailing House', 'Self-mail'];
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };


  @ViewChild('link', { static: false }) link: ElementRef;

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private dataCollectionService: DataCollectionService
  ) {
    this.formSendService.$periodsList.subscribe(val => {
      this.periodsList = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$selectedPeriods.subscribe(val => {
      this.selectedPeriods = val;
      this.cdr.markForCheck();
    });
    this.formSendService.$accountsList.subscribe(val => {
      this.accountsList = val;
      this.cdr.markForCheck();
    });
    this.form = this.fb.group({
      name: [''],
      startDate: [''],
      endDate: [],
      email: this.fb.group({
        selected: [false],
        subject: [''],
        body: ['']
      }),
      mailing: this.fb.group({
        selected: [false],
        delay_days: [''],
        is_self_mail: [false],
        is_delay_days: [false],
        mailing_house_id: ['']
      })
    });

  }

  ngOnInit() {
  }

  addRound() {
    this.showForm = true;
  }

  cancelRound() {
    this.showForm = false;
  }

  saveRound() {
    console.log('ROUND', this.form.value);
    this.showForm = false;
  }


  isSelectedPeriod(id): boolean {
    return this.formSendService.isSelectedPeriod(id);
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  getSplits(item: any) {
    let res: string = '';
    if (item.splits && item.splits.length > 0) {
      item.splits.forEach((s, index) => {
        res += `${s.name}`;
        if (index < item.splits.length - 1) { res += ', '; }
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

  onExportZIP() {
    this.dataCollectionService
      .exportPDFFormZIP(this.formSendService.formId)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `forms.zip`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click()
        // this.clearLink(url);
      });
  }




}
