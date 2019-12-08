import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { FormManagementDataSource } from '@app/form-management/form-management.datasource';
import { FormManagementService } from '@app/form-management/form-management.service';
import { CheckService } from '@app/services/check.service';
import { DateService } from '@app/services/date.service';
import { FormService } from '@app/services/form.service';
import { UtilsService } from '@core/utils.service';
import { FormModel } from '@models/data-collection/form.model';
import { FormManagementDocumentModel } from '@models/form-management/form-management-document.model';
import { FormManagementSubmissionModel } from '@models/form-management/form-management-submission-model';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';
import { DialogComponent } from '@shared/popup/dialog.component';

@Component({
  selector: 'sw-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
})
export class FormManagementComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;
  @ViewChild('link', { static: false }) link: ElementRef;
  public form: FormManagementDocumentModel;
  public formSubmissions: FormManagementSubmissionModel;

  public tabsArray = ['Submissions', 'Log'];
  public activeTab = this.tabsArray[0];
  public activeIdForm: string;
  public dataSource: FormManagementDataSource = new FormManagementDataSource(this.formManagementService);
  public showSpinner = false;
  public isPopupOpen = false;
  public copyLink = '';
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };
  public colors = ButtonColorsEnum;
  public bulkOptions = ['Export Submissions', 'Export Documents'];

  constructor(
    private checkService: CheckService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    public formManagementService: FormManagementService,
    public formService: FormService,
    public dateService: DateService,
    public utilsService: UtilsService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    this.activeIdForm = this.route.snapshot.paramMap.get('id');

    if (this.router.getCurrentNavigation().extras.state &&
      this.router.getCurrentNavigation().extras.state.form) {
      this.form = this.convertForm(this.router.getCurrentNavigation().extras.state.form);
    }
  }

  ngOnInit(): void {
    this.dataSource.uploadDocument(this.activeIdForm).subscribe();
    this.dataSource.uploadSubmission(this.activeIdForm).subscribe();
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
    });
    this.dataSource.getDocument().subscribe((data) => {
      if (!this.router.getCurrentNavigation() && !this.checkService.isEmptyObject(data)) {
        this.form = data;
        this.cdr.detectChanges();
      }
    });
    this.dataSource.getDocumentSubmission().subscribe((data) => {
      this.formSubmissions = data;
      this.cdr.detectChanges();
    });
  }

  backPageClick(): void {
    this.router.navigate(['/forms-dashboard']);
  }

  convertForm(form: FormModel): FormManagementDocumentModel {
    return {
      name: form.name,
      status: form.status,
      type: form.type,
      dashboard_block: {
        last_updated: {
          date: this.dateService.getDateTime(form.updated_at)
        },
        created: {
          date: this.dateService.getDateTime(form.created_at)
        },
      },
    };
  }

  changeFormStatus(evt: {ids: number[], status: string}): void {
    this.formManagementService.changeStatus(evt.ids, evt.status).subscribe((item) => {
      this.form.status = item[evt.ids[0]];
      this.cdr.detectChanges();
    });
  }

  popupClosed(): void {
    this.utilsService.copyTextToClipboard(this.copyLink)
      .then(() => {})
      .catch(() => console.log('Could not copy text'));
    this.copyLink = '';
    this.isPopupOpen = false;
  }

  copyLinkPopupOpen(): void {
    this.isPopupOpen = true;
    this.copyLink = this.formService.createSharedUrl(this.form._id);
    this.dialog.open();
  }

  exportPDF(): void {
    this.formManagementService
      .exportDPFForm(this.form._id)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `form-${this.form._id}.pdf`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
        this.clearLink(url);
      });
  }

  clearLink(url) {
    this.download = {
      url: null,
      filename: null
    };
    window.URL.revokeObjectURL(url);
    this.cdr.markForCheck();
  }

  editForm(): void {
    this.router.navigate(['/form/' + this.form._id]);
  }

  bulkAction(evt: any): void {
    console.log(evt);
  }

}
