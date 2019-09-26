import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout } from 'rxjs/operators';

export class TreeDataSource implements DataSource<any> {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSections = new BehaviorSubject<boolean>(false);
  public count = 0;
  public sections;
  public data$ = this.dataSubject.asObservable();
  public loadingSections$ = this.loadingSections.asObservable();
  public filters;


  constructor() { }

  connect(): Observable<any[]> {
    return this.data$;
  }

  disconnect(): void {
    this.dataSubject.complete();
    this.loadingSections.complete();
  }
  set data(data: any) {
    this.dataSubject.next(data);
  }

 }
