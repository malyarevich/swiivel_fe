import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from '@core/api.service';

export class GeneralDataSource extends DataSource<any> {
  private dataSubject = new BehaviorSubject<(any | undefined)[]>(null);
  private data = new BehaviorSubject<any>([]);
  constructor(private api: ApiService) {
    super();
    this.dataSubject.subscribe((data) => {
      this.data.next(data);
    })
  }

  connect(collectionViewer: CollectionViewer): Observable<(any | undefined)> {
    return this.data.asObservable();

  }

  disconnect() {
    this.dataSubject.complete();
  }

  loadFormsList(type: string = 'registration') {
    this.api.getFormsShortList(type).subscribe((data) => {
      this.dataSubject.next(data);
    });
  }

  filter(value) {
    this.data.next(this.dataSubject.getValue().filter(form => form.name.toLowerCase().startsWith(value.toLowerCase())));
  }

}
