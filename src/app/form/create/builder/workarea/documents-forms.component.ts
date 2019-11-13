import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IconsEnum } from '@app/shared/icons.enum';
import { DocumentsModel } from '@app/models/data-collection/form-constructor/form-builder/documents.model';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'sw-documents-forms-workarea',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class DocumentsFormsComponent implements OnInit {

  public lform: FormGroup;
  public icons = IconsEnum;
  private rootForm: FormGroup;

  @Input()
  set form(_form) {
    console.log('DOCUMENTS FORM', _form);
    this.rootForm = _form;
    this.lform = _form.get('documentsForms');
  }
  @ViewChild('formatsOptions', { static: false }) formatsPop;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.rootForm = this.fb.group({

    });
    this.lform = this.fb.group({
      documents: this.fb.group({
        sectionName: ['Documents for Parents'],
        sectionWidth: ['full'],
        documentsItems: [[]]
      }),
      formsPDF: this.fb.group({
        sectionName: ['School Forms'],
        sectionWidth: ['full'],
        formsPDFItems: [[]]
      })
    });
    this.lform.valueChanges.subscribe(val => {
      console.log('Form value', val);
    });
    this.rootForm.valueChanges.subscribe(v => {
      console.log('ROOT FORM VAL CHANGE', v);
    });
  }

  ngOnInit() {
  }

  fileChange(event, document) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
      console.log('FILE CHANGE', event, document, file, file.name);
      this.api.uploadFile(this.rootForm.value._id, formData).subscribe(result => {
        console.log('UPLOAD FILE', result);
      });
    }
  }

  focusInput(elementRef) {
    elementRef.click();
  }

  deleteAttachment(document: DocumentsModel) {
    document.data = '';
  }

  openForPreview(document: DocumentsModel) {
    if (!document.data) { return; }
    // window.open(this.attachments[document.data].link);
  }
}
