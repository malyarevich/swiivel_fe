import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { FormSearchParams } from '@app/models/form-search-params';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { DataCollectionService } from './data-collection.service';

export class FormsDataSource implements DataSource<any> {
  private formsSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public $loading = this.loadingSubject.asObservable();

  constructor(private dataService: DataCollectionService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(form => {
          form.created_at = new Date(form.created_at);
          if (form.updated_at) {
            form.updated_at = new Date(form.updated_at);
          }
          return form;
        });
        this.formsSubject.next(data);
      }
    });
  }

  get count$() {
    return this.countData.asObservable();
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.formsSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.formsSubject.complete();
    this.loadingSubject.complete();
    this.countData.complete();
  }

  loadFormsList(params: FormSearchParams = { page: 0, limit: 10 }) {
    this.loadingSubject.next(true);
    this.dataService.getFormsList(params).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(forms => {
      this.loadingSubject.next(false);
      this.countData.next(parseInt(forms.total));
      this.dataSubject.next(forms.data);
    });
  }

  filter(filters) {
    let unfiltered = this.dataSubject.getValue().slice();
    if ('name' in filters && filters.name !== null && filters.name.length > 0) {
      unfiltered = unfiltered.filter(form => form.name.includes(filters.name));
    }
    if ('type' in filters && filters.type !== null && filters.type.length > 0) {
      unfiltered = unfiltered.filter(form => form.type === filters.type);
    }
    if ('createdBy' in filters && filters.createdBy !== null && filters.createdBy.length > 0) {
      unfiltered = unfiltered.filter(form => form.owner.full_name.includes(filters.createdBy));
    }

    if ('status' in filters && filters.status !== null && filters.status.length > 0) {
      unfiltered = unfiltered.filter(form => form.status === filters.status);
    }
    this.formsSubject.next(unfiltered);
  }

  sort(sort) {
    const unsorted = this.formsSubject.getValue().slice();
    if (sort[1] !== null) {
      unsorted.sort((a, b) => {
        if (a[sort[0]] > b[sort[0]]) {
          return -1;
      }
        if (b[sort[0]] > a[sort[0]]) {
          return 1;
      }
        return 0;
    });
      if (sort[1] === false) {
        unsorted.reverse();
      }
    }
    this.formsSubject.next(unsorted);
  }

}
