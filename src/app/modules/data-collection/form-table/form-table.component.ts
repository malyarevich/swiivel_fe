import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { Form } from '@models/data-collection/form';
import { DialogComponent } from '@shared/popup/dialog.component';
import { DataSource } from '@angular/cdk/table';
import { FormsDataSource } from './form-table.datasource';


@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [DataCollectionService]
})
export class FormTableComponent implements OnInit {
  @ViewChild('dialog', {static: true}) dialog: DialogComponent;
  bulkOptions = ['Share', 'Export PDF', 'Archive'];
  public params = {
    page: 1,
    limit: 200,
    search: {},
    sort: {},
    filter: {},
  };
  public dataSource: FormsDataSource = new FormsDataSource(this.dataCollectionService);
  // public forms: Form[] = null;
  public selectedForms: Form[] = [];

  public displayedColumns: string[] = ['name', 'type', 'access', 'createdBy', 'updatedAt', 'status', 'actions'];

  // todo: возможно это вынести в сервис
  static convertFormsData(forms: Form[]): Form[] {
    console.log(forms);
    forms.map((form) => {
      form.isSelected = false;
      form.sharedUrl = `http://red.dev.codeblue.ventures/api/v1/data-collection/online-form/${form.mongo_id}`;
    });
    return forms;
  }

  constructor(public dataCollectionService: DataCollectionService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.dataSource.loadFormsList(this.params);
  }

  bulkAction(selectedIndex) {
    console.log(this.bulkOptions[selectedIndex]);
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
}
