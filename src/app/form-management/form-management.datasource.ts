import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { FormManagementService } from '@app/form-management/form-management.service';
import { BehaviorSubject , Observable} from 'rxjs';
import { map } from 'rxjs/operators';

export class FormManagementDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();

  constructor(private formManagementService: FormManagementService) {}

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.loadingSubject.complete();
    this.documentSubject.complete();
  }

  getDocument(): any {
    return this.documentSubject.asObservable();
  }

  uploadDocument(formId: string): Observable<any> {
    this.loadingSubject.next(true);
    return this.formManagementService.getDocumentInfo(formId).pipe(
      map((document) => {
        this.loadingSubject.next(false);
        this.documentSubject.next(document.form_data);
      }));
  }
}
