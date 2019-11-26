import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormGroupName } from '@angular/forms';
import { IconsEnum } from '@app/shared/icons.enum';
import { DocumentsModel } from '@app/models/data-collection/form-constructor/form-builder/documents.model';
import { ApiService } from '@app/core/api.service';
import { Popup } from '@app/core/popup.service';
import { PopupRef } from '@app/core/components/popup/popup.ref';

@Component({
  selector: 'sw-documents-forms-workarea',
  templateUrl: './documents-forms.component.html',
  styleUrls: ['./documents-forms.component.scss']
})
export class DocumentsFormsComponent implements OnInit {

  public lform: FormGroup;
  public icons = IconsEnum;
  private rootForm: FormGroup;
  public widthOption = [
    {value: 0, title: '1/4 page'},
    {value: 1, title: '2/4 page'},
    {value: 2, title: '3/4 page'},
    {value: 3, title: 'Full page'}
  ];
  public popupDisplay = false;
  public isContentShown: boolean = true;
  public isContentFShown: boolean = true;
  public existingFormsPDF: any[] = [];

  docs: boolean = false;
  images: boolean = false;
  audio: boolean = false;

  documentsFormats = ['pdf', 'doc', 'xlsx', 'csv', 'html', 'txt', 'rtf'].map(i => ({ title: i, value: false }));
  imgFormats = ['jpg', 'jpeg', 'png', 'gif'].map(i => ({ title: i, value: false }));
  audiovideoFormats = ['mp3', 'wma', 'flv', 'docs', 'mpg', 'avi'].map(i => ({ title: i, value: false }));
  uploadedForm: any;

  private docFormats: any;
  private ref: PopupRef

  @Input()
  set form(_form) {
    console.log('DOCUMENTS FORM', _form);
    this.rootForm = _form;
    this.lform = _form.get('documentsForms');
    console.log('DOCUMENTS LFORM', this.lform);
  }
  @ViewChild('formatsOptions', { static: false }) formatsPop;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private popup: Popup
  ) {
    this.rootForm = this.fb.group({

    });
    this.lform = this.fb.group({
      documents: this.fb.group({
        sectionName: ['Documents for Parents'],
        sectionWidth: ['full'],
        documentsItems: this.fb.array([])
      }),
      formsPDF: this.fb.group({
        sectionName: ['School Forms'],
        sectionWidth: ['full'],
        formsPDFItems: this.fb.array([])
      })
    });
  }

  get attachments() {
    return this.rootForm.get('attachments').value;
  }

  ngOnInit(): void {
    this.getExistingsFormPDFList();
  }

  getAttachments(doc) {
    const docs = this.rootForm.get('attachments').value;
    return docs && docs[doc] ? docs[doc].name : '';
  }

  getExistingsFormPDFList() {
    this.api.getFormsPDFList().subscribe(res => {
      // res.forEach(res1=>console.log(res1._id));
      res.forEach(i => i.title = i.name);
      this.existingFormsPDF = res;
    });
  }

  upladedFileChange(f: any) {
    if (f) {
      f.form = this.uploadedForm && this.uploadedForm.length > 0 ? this.uploadedForm[0] : { formName: ""};
    }
  }

  fileChange(event, index) {
    const fileList: FileList = event.target.files;
    let document = (this.lform.get('documents.documentsItems') as FormArray).at(index);
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
      this.api.uploadFile(this.rootForm.value._id, formData).subscribe((result: any) => {
        if (result) {
          (this.rootForm.get('attachments') as FormGroup).addControl(result.hash, this.fb.group({...result}))
          document.patchValue({data: result.hash});
          this.cdr.markForCheck();
        }
      });
    }
  }

  focusInput(elementRef) {
    elementRef.click();
  }

  deleteAttachment(index) {
    (this.lform.get('documents.documentsItems') as FormArray).at(index).patchValue({data: ''});
  }

  openForPreview(document: DocumentsModel) {
    if (!document.data) { return; }
    window.open(this.attachments[document.data].link);
  }
  changeIsContentShown(): void {
    this.isContentShown = !this.isContentShown;
  }
  changeIsContentFShown(): void {
    this.isContentFShown = !this.isContentFShown;
  }

  clearFormats() {
    this.docs = false;
    this.images = false;
    this.audio = false;
    this.documentsFormats.forEach(i => i.value = false);
    this.imgFormats.forEach(i => i.value = false);
    this.audiovideoFormats.forEach(i => i.value = false);
  }

  formatChange(title: string, value: boolean) {
    if (value === true && this.docFormats.dataTypeAllowed.indexOf(title) === -1) {
      this.docFormats.dataTypeAllowed.push(title);
    } else if (value === false && this.docFormats.dataTypeAllowed.indexOf(title) >= 0) {
      this.docFormats.dataTypeAllowed.splice(this.docFormats.dataTypeAllowed.indexOf(title), 1);
    }
    this.cdr.markForCheck();
  }

  prepareFormats(formatsArr: any[]) {
    formatsArr.forEach(f => {
      if (this.documentsFormats.findIndex(i => i.title === f) >= 0) {
        this.docs = true;
        this.documentsFormats[this.documentsFormats.findIndex(i => i.title === f)].value = true;
      } else if (this.imgFormats.findIndex(i => i.title === f) >= 0) {
        this.images = true;
        this.imgFormats[this.imgFormats.findIndex(i => i.title === f)].value = true;
      } else if (this.audiovideoFormats.findIndex(i => i.title === f) >= 0) {
        this.audio = true;
        this.audiovideoFormats[this.audiovideoFormats.findIndex(i => i.title === f)].value = true;
      }
    });
  }

  openFormatsPop(doc: any) {
    if (doc) {
      this.docFormats = doc;
      this.prepareFormats(this.docFormats.dataTypeAllowed)
    }
    this.ref = this.popup.open({
      origin: null,
      content: this.formatsPop,
      panelClass: 'centered-panel'
    });
    this.ref.afterClosed$.subscribe(result => {
      this.ref = null;
      this.clearFormats()
      this.docFormats = null;
    });
  }

  closePop() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
