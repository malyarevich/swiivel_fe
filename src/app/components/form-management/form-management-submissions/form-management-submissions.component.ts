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
import { flatMap } from 'lodash';
import { DateTime } from 'luxon';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { StatusColors } from './form-management-submissions.models';
import { FormSubmissionsListParams } from '@app/models/form-submissions-list.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CdkDetailRowDirective } from '@app/utils/directives/cdk-detail-row.directive';

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

  @Output() changeStatus = new EventEmitter<any>();
  @Output() toggleExpand = new EventEmitter<string>();
  @Output() exportZIP = new EventEmitter<boolean>();
  @Output() exportPDF = new EventEmitter<boolean>();

//   @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  filterForm: FormGroup;
  icons = IconsEnum;
  statusesFriendlyNames: string[];
  shouldExpand: string;
  download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
      url: null,
      filename: null
    }

  _sm: SelectionModel<any>;
  
  private openedRow: CdkDetailRowDirective

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
    this.statusesFriendlyNames = flatMap(this.statusesOptions, ({ title }) => [title]);
    this._sm = new SelectionModel(true);
  }

  getStatusColor(status: string): string {
    return this.statusColors.statusColors.get(status) || this.statusColors.defaultColor;
  }

  getDate(date: string) {
    // Hack because DateTime.fromFormat won't cooperate to parse the string
    const splitDate = date.split(' ').slice(0, -2).join(' ');
    return splitDate;
  }

  getTime(date: string) {
     // Hack because DateTime.fromFormat won't cooperate to parse the string
    const splitTime = date.split(' ').slice(-2).join(' ');
    return splitTime;
  }

  getStudentInfo(student: any) {
    const name = [student.first_name, student.last_name].join(' ');
    const avatar = student.avatar;
    return { name, avatar };
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

  onChangeStatus(statusId: number, ids: number[]): void {
    this.changeStatus.emit({ statusId, ids })
  }
  
  onToggleExpand(formID: string, row: CdkDetailRowDirective): void {  
    if (this.openedRow && this.openedRow.expanded) {
      this.openedRow.toggle();      
    }
    
    // No matter if we're expanding or minimizing, the row should be selected
    this._sm.select(row);
    this.shouldExpand === formID ? this.shouldExpand = null : this.shouldExpand = formID;
    this.openedRow = row.expanded ? row : undefined;
  }
}
