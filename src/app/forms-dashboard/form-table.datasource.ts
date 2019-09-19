import { DataCollectionService } from './data-collection.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';

export class FormsDataSource implements DataSource<any> {
  private formsSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public count = 0;
  public $loading = this.loadingSubject.asObservable();

  constructor(private data: DataCollectionService) {
    this.dataSubject.subscribe((data) => {
      data = data.map(form => {
        form.created_at = new Date(form.created_at);
        if (form.updated_at) {
          form.updated_at = new Date(form.updated_at);
        }
        return form;
      })
      this.formsSubject.next(data);
    });
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.formsSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
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
      this.dataSubject.next(forms.data);
    });
  }

  filter(filters) {
    let unfiltered = this.dataSubject.getValue().slice();
    if ('type' in filters && filters.type !== null && filters.type.length > 0) {
      unfiltered = unfiltered.filter(form => form.type === filters.type);
    }
    if ('status' in filters && filters.status !== null && filters.status.length > 0) {
      unfiltered = unfiltered.filter(form => form.status === filters.status);
    }
    this.formsSubject.next(unfiltered);
  }

}