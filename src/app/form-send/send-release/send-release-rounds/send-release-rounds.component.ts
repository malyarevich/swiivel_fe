import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IRound } from '@app/form-send/models/send.model';
import { DataCollectionService } from '@app/forms-dashboard/data-collection.service';
import { DateTime } from 'luxon';
import { FormSendService } from '../../form-send.service';

@Component({
  selector: 'sw-send-release-rounds',
  templateUrl: './send-release-rounds.component.html',
  styleUrls: ['./send-release-rounds.component.scss']
})
export class SendReleaseRoundsComponent implements OnInit {
  @Input() link: ElementRef;
  @Input() roundsList: IRound[];
  public form: FormGroup;
  public isNew = false;
  public showForm = false;
  roundId: any;
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };

  constructor(
    private formSendService: FormSendService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private dataCollectionService: DataCollectionService
  ) {
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

  ngOnInit() {}

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

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
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
}
