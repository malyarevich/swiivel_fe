import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { FormManagementDataSource } from '@app/form-management/form-management.datasource';
import { FormManagementService } from '@app/form-management/form-management.service';
import { CheckService } from '@app/services/check.service';
import { DateService } from '@app/services/date.service';
import { FormService } from '@app/services/form.service';
import { UtilsService } from '@core/utils.service';
import { FormSendService } from '@form-send/form-send.service';
import { IGroupAccount } from '@form-send/models/send.model';
import { FormModel } from '@models/data-collection/form.model';
import { FormManagementDocumentModel } from '@models/form-management/form-management-document.model';
import { FormManagementSectionsModel } from '@models/form-management/form-management-sections.model';
import { FormManagementSubmissionModel } from '@models/form-management/form-management-submission-model';
import { ExpandUserItem } from '@models/user-item';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

enum popupModeEnum {
  COPY = 'copy',
  SUBMISSIONS = 'submissions',
}

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
})
export class FormManagementComponent implements OnInit, OnDestroy {
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;
  @ViewChild('link', { static: false }) link: ElementRef;
  public dialogParams = {
    'copy': {
      title: 'Copy',
      action: 'Copy'
    },
    'submissions': {
      title: 'Bulk Submissions Export',
      action: 'Export'
    }
  };
  public form: FormManagementDocumentModel;
  public formSubmissions: FormManagementSubmissionModel;
  public dialogForm: FormGroup;
  public dialogRecipientsForm: FormGroup;
  public icons = IconsEnum;

  public displayedColumns = ['name', 'email', 'role'];
  public users: ExpandUserItem[];

  public uploadDocumentSubscription: Subscription;
  public submissionsSubscription: Subscription;
  public loadingSubscription: Subscription;
  public documentSubscription: Subscription;
  public documentSubmissionSubscription: Subscription;

  public bulkExportSubmissionSubscription: Subscription;
  public usersSubscription: Subscription;
  public exportSubmissionSubscription: Subscription;
  public exportSubmissionListSubscription: Subscription;

  public tabsArray = ['Submissions', 'Log'];
  public activeTab = this.tabsArray[0];
  public activeIdForm: string;
  public dataSource: FormManagementDataSource = new FormManagementDataSource(this.formManagementService);
  public showSpinner = false;
  public isPopupOpen = false;
  public submissionFields: FormManagementSectionsModel[];
  public isAllSubmissionFieldsSelected = false;
  public dialogExportViewArray = ['CSV', 'PDF'];
  public dialogExportView = this.dialogExportViewArray[0];
  public downloadOptions = [{
    title: 'Group by Account Alphabetically',
    value: 'alphabetically',
  }, {
    title: 'Group by Grade',
    value: 'grade',
  }, {
    title: 'Group by Document Type',
    value: 'document_type',
  }];
  public popupEnum = popupModeEnum;
  public popupMode = popupModeEnum.COPY;
  public copyLink = '';
  public download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };
  public groupAccountsList: IGroupAccount[] = [];
  public colors = ButtonColorsEnum;
  public bulkOptions = ['Export Submissions', 'Export Documents'];
  public destroyed$ = new Subject();

  constructor(
    private checkService: CheckService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public formManagementService: FormManagementService,
    public formService: FormService,
    public dateService: DateService,
    public utilsService: UtilsService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private formSendService: FormSendService
  ) {

    this.formSendService.$accountsList
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => {
        this.groupAccountsList = val;
        this.cdr.markForCheck();
      });

    this.activeIdForm = this.route.snapshot.paramMap.get('id');

    if (this.router.getCurrentNavigation().extras.state &&
      this.router.getCurrentNavigation().extras.state.form) {
      this.form = this.convertForm(this.router.getCurrentNavigation().extras.state.form);
    }

    this.dialogForm = this.fb.group({
      export_pdf_select_all: [false],
      export_pdf_select_cover: [false],
      export_pdf_search: [''],
      export_pdf_general_info: [false],
      export_pdf_split: [false],
      export_pdf_group: null,
      submission_export_options: [''],
    });

    this.dialogRecipientsForm = this.fb.group({
      name: [null],
      email: [null],
      role: [null]
    });
  }

  // todo use formgroup for fields generating

  ngOnInit(): void {
    this.formSendService.initFormSend(this.activeIdForm);
    this.bulkExportSubmissionSubscription = this.formManagementService.bulkExportSubmission(this.activeIdForm).subscribe(item => console.log(item));
    this.usersSubscription = this.formManagementService.getUsers().subscribe(users => this.users = users);
    // this.formManagementService.getSubmissionsForExport(this.activeIdForm).subscribe(item => console.log(item));
    this.exportSubmissionListSubscription = this.formManagementService.getSubmissionList(this.activeIdForm).subscribe(data => {
      this.submissionFields = this.convertSubmissionFields(data.fields);
    });
    this.uploadDocumentSubscription = this.dataSource.uploadDocument(this.activeIdForm).subscribe();
    this.submissionsSubscription = this.dataSource.uploadSubmission(this.activeIdForm).subscribe();
    this.loadingSubscription = this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
    });
    this.documentSubscription = this.dataSource.getDocument().subscribe((data) => {
      if (!this.router.getCurrentNavigation() && !this.checkService.isEmptyObject(data)) {
        this.form = data;
        this.detectChanges();
      }
    });
    this.documentSubmissionSubscription = this.dataSource.getDocumentSubmission().subscribe((data) => {
      this.formSubmissions = data;
      this.detectChanges();
    });
  }

  detectChanges(): void {
    setTimeout(() => {
      if (this.cdr && !(this.cdr as ViewRef).destroyed) {
        this.cdr.detectChanges();
      }
    });
  }

  backPageClick(): void {
    this.router.navigate(['/forms-dashboard']);
  }

  convertSubmissionFields(sections: FormManagementSectionsModel[]): FormManagementSectionsModel[] {
    sections.forEach((section) => {
      section.isSelected = false;
      section.isOpen = false;
      if (section.fields) {
        section.fields.forEach(field => {
          field.isSelected = false;
          field.isOpen = false;
        });
      }
    });
    return sections;
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
      this.detectChanges();
    });
  }

  popupClosed(action?: any): void {
    console.log(action);
    if ( this.popupMode === this.popupEnum.COPY) {
      this.utilsService.copyTextToClipboard(this.copyLink)
        .then(() => {})
        .catch(() => console.log('Could not copy text'));
      this.copyLink = '';
    } else {
      if (this.dialogExportView === 'PDF') {
        console.log('export PDF');
        console.log(this.submissionFields);
        this.formManagementService.bulkExportSubmission(this.activeIdForm);
      } else {
        console.log('export CSV');
      }
    }
    this.isPopupOpen = false;
  }

  copyLinkPopupOpen(): void {
    this.popupMode = popupModeEnum.COPY;
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
        this.detectChanges();
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
    this.detectChanges();
  }

  editForm(): void {
    this.router.navigate(['/form/' + this.form._id]);
  }

  bulkAction(evt: any): void {
    switch (evt) {
      case 0:
        this.exportSubmissions();
        break;
      case 1:
        this.exportDocuments();
        break;
    }
  }

  exportSubmissions(): void {
    this.popupMode = popupModeEnum.SUBMISSIONS;
    this.isPopupOpen = true;
    this.dialog.open();
  }

  exportDocuments(): void {
    console.log('export documents');
  }

  changeDialogView(e: string): void {
    this.dialogExportView = e;
  }

  changeBulkActive(e: any): void {
    this.bulkActive = e;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.uploadDocumentSubscription.unsubscribe();
    this.submissionsSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
    this.documentSubscription.unsubscribe();
    this.documentSubmissionSubscription.unsubscribe();
    this.bulkExportSubmissionSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
    this.exportSubmissionListSubscription.unsubscribe();
  }

  sortBy(field: string) {

  }

  changeChosenSection(id: string, isChosen: boolean): void {
    this.submissionFields.find((section) => section._id === id).isChosen = !isChosen;
  }

  changeOpenSection(id: string, isOpen: boolean): void {
    this.submissionFields.find((section) => section._id === id).isOpen = !isOpen;
  }

  changeChosenField(sectionId: string, fieldId: string, isChosen: boolean): void {
    this.submissionFields.find((section) => section._id === sectionId)
      .fields.find((field) => field._id === fieldId).isChosen = !isChosen;
  }

  changeOpenField(sectionId: string, fieldId: string, isOpen: boolean): void {
    this.submissionFields.find((section) => section._id === sectionId)
      .fields.find((field) => field._id === fieldId).isOpen = !isOpen;
  }

  changeSubmissionFieldsSelection(): void {
    this.isAllSubmissionFieldsSelected = !this.isAllSubmissionFieldsSelected;
    this.submissionFields.forEach((section) => {
      section.isSelected = this.isAllSubmissionFieldsSelected;
      if (section.fields) {
        section.fields.forEach(field => {
          field.isSelected = this.isAllSubmissionFieldsSelected;
        });
      }
    });
    this.cdr.markForCheck();
  }

}
