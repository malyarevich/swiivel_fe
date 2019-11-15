import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { FormManagementService } from '@app/form-management/form-management.service';
import { FormManagementDocumentModel} from '@models/form-management/form-management-document.model';
import { BehaviorSubject , Observable} from 'rxjs';
import { map } from 'rxjs/operators';

export class FormManagementDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public $loading = this.loadingSubject.asObservable();
  private documentSubmissionSubject = new BehaviorSubject<any>({});
  private loadingSubmissionSubject = new BehaviorSubject<boolean>(false);
  public $loadingSubmission = this.loadingSubject.asObservable();

  constructor(private formManagementService: FormManagementService) {}

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.loadingSubject.complete();
    this.documentSubject.complete();
    this.documentSubmissionSubject.complete();
    this.loadingSubmissionSubject.complete();
  }

  getDocument(): any {
    return this.documentSubject.asObservable();
  }

  getDocumentSubmission(): any {
    return this.documentSubmissionSubject.asObservable();
  }

  uploadDocument(formId: string): Observable<any> {
    this.loadingSubject.next(true);
    return this.formManagementService.getDocumentInfo(formId).pipe(
      map((document: FormManagementDocumentModel ) => {
        this.loadingSubject.next(false);
        this.documentSubject.next(document);
      }));
  }

  uploadSubmission(formId: string): Observable<any> {
    this.loadingSubmissionSubject.next(true);
    return this.formManagementService.getDocumentSubmission(formId).pipe(
      map((document: any ) => {
        this.loadingSubmissionSubject.next(false);
        this.documentSubmissionSubject.next(document);
      }));
  }
}
