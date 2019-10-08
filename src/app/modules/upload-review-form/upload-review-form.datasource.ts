import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { BehaviorSubject, Observable } from 'rxjs';

export class UploadReviewFormDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private filterSubject = new BehaviorSubject<any>({});
  private extremeDocumentsSubject = new BehaviorSubject<any>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();
  private selectedFormId = new BehaviorSubject<any>(null);

  constructor(private uploadReviewFormService: UploadReviewFormService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(doc => {
        if (!doc.status) {
          doc.status = 'unassigned';
        }
        doc.isSelected = false;
        });
        this.documentSubject.next(data);
      }
    });
  }

  getDocuments(): any {
    return this.dataSubject.asObservable();
  }

  getFilters(): any {
    return this.filterSubject.asObservable();
  }

  getExtremeDocuments(): any {
    return this.extremeDocumentsSubject.asObservable();
  }


  getSelectedFormId(): any {
    return this.selectedFormId.asObservable();
  }

  selectFormId(id: any): any {
    this.selectedFormId.next(id);
  }


  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.documentSubject.complete();
    this.filterSubject.complete();
    this.extremeDocumentsSubject.complete();
    this.loadingSubject.complete();
    this.selectedFormId.complete();
  }

  uploadDocuments(formId: string, filterParams?: any, sortParam?: any): void {
    this.loadingSubject.next(true);
    this.uploadReviewFormService.getDocumentList(formId, filterParams, sortParam).subscribe((documents) => {
      this.loadingSubject.next(false);
      this.dataSubject.next(documents.data);
      this.extremeDocumentsSubject.next({previous_form: documents.previous_form, next_form: documents.next_form});
    });
  }

  uploadFilterList(formId: string): void {
    this.uploadReviewFormService.getFilterList(formId).subscribe((filters) => {
      this.filterSubject.next(filters);
    });
  }

  downloadForm(id: string): void {
    this.uploadReviewFormService.downloadForm(id).subscribe((res) => {
      console.log(res);
    });
  }

  deleteDocuments(ids: string[], activeFormId: string, filter?: any, sort?: any) {
    const idsData = [];
    ids.map(idData => idsData.push(idData));
    this.uploadReviewFormService.deleteDocuments(idsData).subscribe(() => {
      this.uploadDocuments(activeFormId, filter, sort);
    });
  }

  changeStatus(id: string, status: string, activeFormId: string, filter?: any, sort?: any): void {
    this.uploadReviewFormService.changeDocumentStatus(id, status).subscribe( () => {
      this.uploadDocuments(activeFormId, filter, sort);
    });
  }
}
