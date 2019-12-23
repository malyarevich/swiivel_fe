import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormManagementService } from '../form-management.service';
import { finalize } from 'rxjs/operators';
import { pick } from 'lodash';

export class SubmissionDataSource implements DataSource<any> {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private submissionSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private defaultMetadata = {page: 1, last_page: 1, count: 0, limit: 10, total: 0};
  private metadata: BehaviorSubject<any> = new BehaviorSubject<any>(this.defaultMetadata);

  constructor(private fms: FormManagementService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(sub => {
          sub.last_updated = new Date(sub.last_updated);
          return sub;
        });
        this.submissionSubject.next(data);
      }
    });
  }

  get $loading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  get $formsListMetadata() {
    return this.metadata.asObservable();
  }

  get getFormsData() {
    return this.dataSubject.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.submissionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.submissionSubject.complete();
    this.loadingSubject.complete();
    this.dataSubject.complete();
    this.metadata.complete();
  }

  loadSubmission(formId: string, params: any = { page: 1, limit: 10 }) {
    this.loadingSubject.next(true);
    this.fms.getSubmissionList(formId, params).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((sub) => {
      const md = pick(sub, ['page', 'total', 'last_page', 'limit', 'count']);
      this.metadata.next(md);
      this.dataSubject.next(sub.data);
      this.loadingSubject.next(false);
    })
  }


}
