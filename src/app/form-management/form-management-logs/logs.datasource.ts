import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormManagementService } from '../form-management.service';
import { finalize } from 'rxjs/operators';
import { pick } from 'lodash';

export class LogsDataSource implements DataSource<any> {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private logsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private defaultMetadata = {page: 1, last_page: 1, count: 0, limit: 10, total: 0};
  private metadata: BehaviorSubject<any> = new BehaviorSubject<any>(this.defaultMetadata);

  constructor(private fms: FormManagementService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(log => {
          log.created_at = new Date(log.created_at);
          return log;
        });
        this.logsSubject.next(data);
      }
    });
  }

  get $loading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  get $formsListMetadata() {
    return this.metadata.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]>{
    return this.logsSubject.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.logsSubject.complete();
    this.loadingSubject.complete();
    this.dataSubject.complete();
    this.metadata.complete();
  }

  loadLogs(formId: string, params: any = { page: 1, limit: 10 }) {
    this.loadingSubject.next(true);
    this.fms.getLogsList(formId, params).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((logs) => {
      const md = pick(logs, ['page', 'total', 'last_page', 'limit', 'count']);
      this.metadata.next(md);
      this.dataSubject.next(logs.data);
    })
  }


}