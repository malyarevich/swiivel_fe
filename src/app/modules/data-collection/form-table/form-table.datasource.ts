import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { catchError, retry, timeout, tap, finalize, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DataCollectionService } from '../data-collection.service';



export class FormsDataSource implements DataSource<any> {
  private formsSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public count = 0;
  public $loading = this.loadingSubject.asObservable();

  constructor(private data: DataCollectionService) { }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.formsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.formsSubject.complete();
    this.loadingSubject.complete();
  }

  loadFormsList(params = { page: 0, limit: 10, search: {}, filter: {}, sort: {} }) {
    this.loadingSubject.next(true);
    this.data.getFormsList(params).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(forms => {
      this.loadingSubject.next(false);
      this.count = parseInt(forms.total);
      this.formsSubject.next(forms.data);
    });
  }

}
