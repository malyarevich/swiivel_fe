import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from '@core/api.service';

export class GeneralDataSource extends DataSource<any> {
  private dataSubject = new BehaviorSubject<(any | undefined)[]>(null);

  constructor(private api: ApiService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<(any | undefined)> {
    return this.dataSubject;

  }

  disconnect() {
    this.dataSubject.complete();
  }

  loadFormsList(type: string = 'registration') {
    this.api.getFormsShortList(type).subscribe((data) => {
      this.dataSubject.next(data);
    });
  }

}