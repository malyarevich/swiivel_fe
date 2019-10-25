import { FormManagementAPIService } from './form-management.service'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { FormSearchParams } from '@app/models/form-search-params';

export class FormManagementSubmissionsDataSource implements DataSource<any> {
  private formsSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();

  private defaultMetadata = {page: 1, last_page: 1, count: 0, limit: 10, total: 0};
  private metadata: BehaviorSubject<any> = new BehaviorSubject<any>(this.defaultMetadata);

  constructor(private apiService: FormManagementAPIService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(form => {
          form.created_at = new Date(form.created_at);
          if (form.updated_at) {
            form.updated_at = new Date(form.updated_at);
          }
          return form;
        })
        this.formsSubject.next(data);
      }
    });
  }

  get formsListMetadata$() {
    return this.metadata.asObservable();
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.formsSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.formsSubject.complete();
    this.loadingSubject.complete();
  }

  getSubmissionsList(formID: string) {
    this.loadingSubject.next(true);
    this.apiService.getSubmissionsList(formID).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(submissionsList => {
      console.log(JSON.stringify(submissionsList));
      const { data, ...metadata } = submissionsList;
      this.dataSubject.next(data);
      this.metadata.next(metadata);
      this.loadingSubject.next(false);
    });
  }
}
