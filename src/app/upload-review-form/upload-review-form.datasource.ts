import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

export class UploadReviewFormDataSource implements DataSource<any> {
  private formSubject = new BehaviorSubject<any[]>([]);

  constructor(private uploadReviewFormService: UploadReviewFormService) {
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.formSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.formSubject.complete();
  }

  uploadFile(fileToUpload: File, formId: string) {
    this.uploadReviewFormService.uploadFile(fileToUpload, formId).pipe(
      catchError(() => of([])),
      finalize(() => {
      })
    ).subscribe(() => {});
  }
}
