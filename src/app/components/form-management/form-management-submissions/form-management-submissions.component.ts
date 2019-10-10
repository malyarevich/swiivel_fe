import { SelectionModel } from '@angular/cdk/collections';
import { 
    ChangeDetectionStrategy, ChangeDetectorRef, Component, 
    OnInit, ViewChild, Renderer2, ElementRef, Input, Output,
    EventEmitter,
} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '@app/core/utils.service';
import { Form } from '@models/data-collection/form.model';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { pick } from 'lodash';
import { DateTime } from 'luxon';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { StatusColors } from './form-management-submissions.models';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'sw-form-management-submissions',
  templateUrl: './form-management-submissions.component.html',
  styleUrls: ['./form-management-submissions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormManagementSubmissionsComponent implements OnInit {
  @ViewChild('link', { static: false }) link: ElementRef;

  @Input() dataSource: DataSource<any>;
  @Input() displayedColumns: string[];
  @Input() filterFormGroup: object;
  @Input() sort: any[];
  @Input() currentPage: number;
  @Input() statusesOptions: string[];
  @Input() formSubmissionsListParams: FormSubmissionsListParams;
  @Input() statusColors: StatusColors;
  @Input() totalItems: number;
  @Input() showSpinner: boolean;

  @Output() exportZIP = new EventEmitter<boolean>();
  @Output() exportPDF = new EventEmitter<boolean>();

//   @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  public filterForm: FormGroup;

  public icons = IconsEnum;

  download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
      url: null,
      filename: null
    }

  _sm: SelectionModel<any>;

  constructor(
    public router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public utilsService: UtilsService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group(this.filterFormGroup);
    this._sm = new SelectionModel(true);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'archived':
        return 'gray';
      case 'active':
        return 'green';
      case 'draft':
        return 'lite-gray';
      case 'review':
        return 'yellow';
      case 'closed':
        return 'gray';
      default:
        return 'gray';
    }
  }

  getDate(date: Date) {
    let dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat("LL-dd-yyyy");
  }

  getTime(date: Date) {
    let dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat("t").toLowerCase();
  }

  sortBy(field: string) {
    if (this.sort[0] === field) {
      switch (this.sort[1]) {
        case true:
          this.sort = [field, false];
          break;
        case false:
          this.sort = [field, null];
          break;
        default:
          this.sort = [field, true];
          break;
      }
    } else {
      this.sort = [field, true];
    }
    if (!this.formSubmissionsListParams.sort) {
      this.formSubmissionsListParams.sort = {
        field: null,
        order: null
      };
    }
    this.formSubmissionsListParams.sort.field = field;
    this.formSubmissionsListParams.sort.order = !!this.sort[1] ? 'asc' : 'desc';
    this.formSubmissionsListParams.page = 1;
    // this.dataSource.loadFormsList(this.params);
  }

  changePage(event) {
    if (event) {
      this.formSubmissionsListParams.page = event.page;
      this.formSubmissionsListParams.limit = event.limit;
    //   this.dataSource.loadFormsList(this.params);
    }
  }

  selectRow(row: any, e: Event) {
    if (e && e.target && (e.target['tagName'] === 'BUTTON' || e.target['parentElement']['tagName'] === 'BUTTON')) {
      e.stopPropagation();
    } else {
      if (row) {
        this._sm.toggle(row);
      } 
    }
    // if (this.selectedForms.has(row)) {
    //   this.selectedForms.delete(row);
    // } else {
    //   this.selectedForms.add(row);
    // }

    // this.disabledBulkBtn = this.selectedForms.size ? false : true;


  }

  rowSelected(row: any) {
    return this._sm.isSelected(row);
  }

  clearLink(url) {
    this.download = {
      url: null,
      filename: null
    }
    window.URL.revokeObjectURL(url);
    this.cdr.markForCheck();
  }

  onCopyLink(label: string): void {
    this.utilsService.copyTextToClipboard(label)
      .then(() => { })
      .catch(() => {
        console.log('Could not copy text');
      });
  }

  changeStatus(statusId: number, ids: number[]): void {
    // this.statusArray.forEach((item) => {
    //   if (item.title === this.statusesOptions[statusId]) {
    //     this.dataCollectionService
    //       .changeStatus(ids, item.value)
    //       .subscribe(() => {
    //         // this.dataSource.loadFormsList(this.params);
    //       });
    //   }
    // }); 
  }
}
