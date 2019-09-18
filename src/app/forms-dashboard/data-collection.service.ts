import { ApiService } from '@app/core/api.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export class DataCollectionService extends ApiService {

  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-templates`, {body: requestParams}).pipe(
      map(response => {
        return response.data;
      })
    );
  }
archiveForms(archivedIds: number[]): Observable<any> {
  return this.http.post(`/proxy/form-builder/form-template/archived`, { ids: archivedIds })
    .pipe(map(response => {
        if (response.status === 1) {
          return response.data;
        }
        throwError('Archive form error');
      })
    );
}

duplicateForm(id: string): Observable<any> {
  return this.http.post(`/proxy/form-builder/form-template/duplicate`, {
    example_form_id: id,
  })
    .pipe(map(response => {
        if (response.status === 1) {
          return response;
        }
        throwError('Duplicate form error');
      })
    );
}

exportPDFForm(mongoId: string): Observable<any> {
  return this.http.get(
    `/proxy/form-builder/pdf-export/${mongoId}`,
    {responseType: 'blob'})
    .pipe(
      map(response => {
        const downloadURL = window.URL.createObjectURL(new Blob([response], {type: 'application/pdf'}));
        const link = document.createElement('a');

        link.href = downloadURL;
        link.download = `form-${mongoId}.pdf`;
        link.click();
      })
    );
  }
}
