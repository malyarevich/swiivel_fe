import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class UploadReviewFormDataSource implements DataSource<any> {
  private documentSubject = new BehaviorSubject<any[]>([]);
  private dataSubject = new BehaviorSubject<any[]>([]);
  private familySubject = new BehaviorSubject<any>([]);
  private filterSubject = new BehaviorSubject<any>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private changingRotationSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string>(null);
  public $error = this.errorSubject.asObservable();
  public $loading = this.loadingSubject.asObservable();
  public $changingRotationSubject  = this.changingRotationSubject.asObservable();
  private selectedFormId = new BehaviorSubject<any>(null);

  constructor(private uploadReviewFormService: UploadReviewFormService) {
    this.dataSubject.subscribe((data) => {
      if (data) {
        data = data.map(doc => {
        if (!doc.status) {
          doc.status = 'unassigned';
        }
        doc.isSelected = false;
        });
        this.documentSubject.next(data);
      }
    });
  }

  getDocuments(): any {
    return this.dataSubject.asObservable();
  }

  getFamilies(): any {
    return this.familySubject.asObservable();
  }

  getFilters(): any {
    return this.filterSubject.asObservable();
  }

  getSelectedFormId(): any {
    return this.selectedFormId.asObservable();
  }

  selectFormId(id: any): any {
    this.selectedFormId.next(id);
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
    return this.documentSubject.asObservable();
  }

  disconnect(_collectionViewer: CollectionViewer): void {
    this.documentSubject.complete();
    this.familySubject.complete();
    this.filterSubject.complete();
    this.loadingSubject.complete();
    this.selectedFormId.complete();
    this.errorSubject.complete();
    this.changingRotationSubject.complete();
  }

  uploadDocuments(formId: string, filterParams?: any, sortParam?: any, searchParam?: any): Observable<any> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);
    return this.uploadReviewFormService.getDocumentList(formId, filterParams, sortParam, searchParam).pipe(
      map((documents) => {
        this.loadingSubject.next(false);
        this.changingRotationSubject.next(false);
        this.dataSubject.next(documents.data);
    }));
  }

  uploadFilterList(formId: string): void {
    this.uploadReviewFormService.getFilterList(formId).subscribe((filters) => {
      this.filterSubject.next(filters);
    });
  }

  uploadFamilyList(): Observable<any> {
    return this.uploadReviewFormService.getFamilyList().pipe(
      map((data) => {
        this.familySubject.next(data.map((family) => {
          return {
            title: family.name,
            value: family.family_id,
            students: family.family_persons.map((person) => {
              if (person.person_role === 'student') {
                return {
                  title: `${person.person.first_name} ${person.person.last_name}`,
                  value: person.id_person,
                }
              }
            }).filter(student => student),
          }
        }).filter(family => family));
      }));
  }

  downloadForm(id: string): void {
    this.uploadReviewFormService.downloadForm(id);
  }

  deleteDocuments(ids: string[]): Observable<any> {
    const idsData = [];
    this.loadingSubject.next(true);
    ids.map(idData => idsData.push(idData));
    return this.uploadReviewFormService.deleteDocuments(idsData);
  }

  changeStatus(id: string, status: string, activeFormId: string, filter?: any, sort?: any): Observable<any> {
    return this.uploadReviewFormService.changeDocumentStatus(id, status).pipe(
      map(() => {
        this.uploadDocuments(activeFormId, filter, sort);
      }),
    );
  }

  rotateImg(angle: string, id: string): Observable<any> {
    this.changingRotationSubject.next(true);
    return this.uploadReviewFormService.rotateImg(angle, id);
  }

  updateDocumentSettings(documentId: string, data: any): Observable<any> {
    return this.uploadReviewFormService.updateDocumentSettings(documentId, data);
  }
}
