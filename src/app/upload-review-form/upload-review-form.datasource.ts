import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { BehaviorSubject, Observable } from 'rxjs';

export class UploadReviewFormDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private filterSubject = new BehaviorSubject<any>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();

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

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.documentSubject.complete();
    this.filterSubject.complete();
    this.loadingSubject.complete();
  }

  uploadDocuments(formId: string, params?: any): void {
    this.loadingSubject.next(true);
    this.uploadReviewFormService.getDocumentList(formId, params).subscribe((documents) => {
      this.loadingSubject.next(false);
      this.dataSubject.next(documents.data);
    });
  }

  uploadFilterList(formId: string): void {
    this.uploadReviewFormService.getFilterList(formId).subscribe((filters) => {
      this.filterSubject.next(filters);
    });
  }
}
