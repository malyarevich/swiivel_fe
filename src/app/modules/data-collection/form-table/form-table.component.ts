import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataCollectionService } from '@app/core/api.service';
import { Form } from '@models/data-collection/form';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [DataCollectionService]
})
export class FormTableComponent implements OnInit {
  public params = {
    page: 1,
    limit: 200,
    search: {},
    sort: {},
    filter: {},
  };
  public forms: Form[] = null;
  public selectedForms: Form[] = [];

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
    this.getAllForm();
  }

  getAllForm(): void {
    this.dataCollectionService.getFormsList(this.params).subscribe(forms => {
      console.log(forms.data);
      this.forms = FormTableComponent.convertFormsData(forms.data.data);
      console.log(this.forms);
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

  updateSelectForms(): void {
    this.selectedForms = [];
    this.forms.map((form) => {
      if (form.isSelected) {
        this.selectedForms.push(form);
      }
    });
  }

  shareForms(): void {
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
}
