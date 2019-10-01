import {CollectionViewer} from '@angular/cdk/collections';
import {DataSource} from '@angular/cdk/table';
import {UploadReviewFormService} from '@app/upload-review-form/upload-review-form.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

export class UploadReviewFormDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);

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

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.documentSubject.complete();
  }

  uploadDocuments(formId: string) {
    this.uploadReviewFormService.getDocumentList(formId).pipe(
      catchError(() => of([])),
      finalize(() => {
      })
    ).subscribe((documents) => {
      this.dataSubject.next(documents.data);
    });
  }
}
