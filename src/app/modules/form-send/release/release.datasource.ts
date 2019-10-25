import { DataSource, CollectionViewer } from '@angular/cdk/collections'
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '@app/core/api.service';
import { isArray } from 'util';

export class ReleaseDataSource extends DataSource<any> {
  
  private dataSubject = new BehaviorSubject<(any | undefined)[]>([]);
  private releaseSubject = new BehaviorSubject<(any | undefined)[]>(null);
  private data = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();
  public accoutSubject = new BehaviorSubject<(any | undefined)[]>([]);
  accountsList = [
    {
      name: 'New Students',
      key: 'newStudents',
      data: []
    },
    {
      name: 'Specific Grades',
      key: 'specificGrades',
      data: []
    },
    {
      name: 'New Families',
      key: 'newFamilies',
      data: []
    },
    {
      name: 'Current Families',
      key: 'currentFamilies',
      data: []
    },
    {
      name: 'All Parents',
      key: 'allParents',
      data: []
    }
  ];

  constructor(private api: ApiService) {
    super();
    this.dataSubject.subscribe((data) => {
      console.log('DATA SET', data);
      this.data.next(data);
    })
  }

  loadList(id: string) {
    this.loadingSubject.next(true);
    this.api.getFormSend(id).subscribe(res => {
      console.log('response', res);
      if (res) {
        if (res.periods) {
          if (res.periods.list) {
            this.dataSubject.next(res.periods.list.periods)
          }
        }
      }
      this.loadingSubject.next(false);
    });
  }

  getLength() {
    return this.data && isArray(this.data.getValue()) ? this.data.getValue().length : 0;
  }

  getAccounts() {
    this.accountsList.forEach(async a => {
      await this.api.getUsersByRole(a.key).subscribe(res => {
        if (res) {
          a.data = res;
        }
      });
    });
    this.accoutSubject.next(this.accountsList)
  }

  filter(value) {
    this.data.next(this.dataSubject.getValue().filter(form => form.name.toLowerCase().startsWith(value.toLowerCase())));
  }

  connect(collectionViewer: CollectionViewer): Observable<any> {
    return this.data.asObservable();
  }

  disconnect() {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }
}