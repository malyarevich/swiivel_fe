import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IconsEnum } from '@app/shared/icons.enum';

@Component({
  selector: 'sw-documents-forms-workarea',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class DocumentsFormsComponent implements OnInit {

  public lform: FormGroup;
  public icons = IconsEnum;

  @Input()
  set form(_form) {
    console.log('asdasdasd', _form)
    this.lform = _form.get('documentsForms');
  }

  constructor(
    private fb: FormBuilder
  ) {
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
    })
  }

  ngOnInit() {
  }

  fileChange(event, document) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
      // this.fileService.uploadFile(this.formId, formData).subscribe(result => {
      //   this.formService.getOneForm(this.formId).subscribe(form => {
      //     this.attachments = form.attachments;
      //     document.data = result.hash;
      //   });
      // });
    }
  }
}
