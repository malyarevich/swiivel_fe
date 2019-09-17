import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataCollectionService } from '@app/core/api.service';
import { Form } from '@models/data-collection/form';
import { DialogComponent } from '@shared/popup/dialog.component';
import { FormsDataSource } from './form-table.datasource';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ DataCollectionService ],
})

export class FormTableComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  public activeTabId: number = 0;
  public bulkOptions = ['Share', 'Export PDF', 'Archive'];
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  public displayedColumns: string[] = ['name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];
  public forms: Form[] = null;
  public params: any = {
    page: 1,
    limit: 200,
    search: {},
    sort: {},
    filter: {},
  };
  public selectedForms: Form[] = [];
  public tabs = [
    {
      title: 'All',
      type: 'all',
    },
    {
      title: 'Active',
      type: 'active',
    },
    {
      title: 'Draft',
      type: 'draft',
    },
    {
      title: 'In Review',
      type: 'review',
    },
    {
      title: 'Closed',
      type: 'closed',
    },
    {
      title: 'Archived',
      type: 'archived',
    },
  ];

  filterForm: FormGroup;
  sort = ['name', true];

  // todo: возможно это вынести в сервис
  static convertFormsData(forms: Form[]): Form[] {
    console.log(forms);
    forms.map((form) => {
      form.isSelected = false;
      form.sharedUrl = `http://red.dev.codeblue.ventures/api/v1/data-collection/online-form/${form.mongo_id}`;
    });
    return forms;
  }

  constructor(
    public dataCollectionService: DataCollectionService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
    this.filterForm = this.fb.group({
      name: [null],
      type: [null],
      access: [null],
      createdBy: [null],
      updatedAt: [null],
      status: [null]
    });
  }

  ngOnInit() {
    this.getAllForm();
    this.dataSource.loadFormsList(this.params);
    this.filterForm.valueChanges.subscribe(value => {
      this.dataSource.filter(value);
    });
  }

  getAllForm(): void {
    this.dataCollectionService.getFormsList(this.params).subscribe(forms => {
      this.forms = forms.data;
      this.cd.detectChanges();
    });
  }

  selectForm(id: number): void {
    this.selectedForms = [];
    this.forms.map((form) => {
      if (form.id === id) {
        form.isSelected = !form.isSelected;
      }
    });
    this.updateSelectForms();
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
  }

  bulkAction(selectedIndex) {
    console.log(this.bulkOptions[selectedIndex]);
  }

  updateSelectForms(): void {
    this.selectedForms = [];
    this.forms.map((form) => {
      if (form.isSelected) {
        this.selectedForms.push(form);
      }
    });
  }

  shareForms(): void {
    this.dialog.open();
  }

  dialogClosed(action?: boolean) { // false means "Cancel"
    console.debug(`Dialog cancelled: ${!action}`)
  }

  archiveForms(): void {
  }

  exportFormsPDF(): void {

  }

  exportFormsZIP(): void {

  }

  getSelectedIds(): number[] {
    const ids = [];
    this.selectedForms.map((form) => ids.push(form.id));
    return ids;
  }

  getSelectedMongoIds(): number[] {
    const ids = [];
    this.selectedForms.map((form) => ids.push(form.mongo_id));
    return ids;
  }

  onCopyLink(label: string): void {
    navigator.clipboard.writeText(label)
      .then(() => {
        console.log('Text copied to clipboard', label);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }

  deleteItem(id) {
    console.log(id);
  }

  clickTab(tabId: number): void {
    if (tabId !== this.activeTabId) {
      this.activeTabId = tabId;

      if (tabId === 0) {
        delete this.params.filter.status;
      } else {
        this.params.filter.status = this.tabs[tabId].type;
      }

      this.getAllForm();
    }
  }
}
