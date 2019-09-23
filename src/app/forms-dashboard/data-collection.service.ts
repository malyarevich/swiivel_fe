import { ApiService } from '@app/core/api.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export class DataCollectionService extends ApiService {
  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-templates`, {body: requestParams});
  }

  changeStatus(updatedIds: number[], updatedStatus: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/status`, {ids: updatedIds, status: updatedStatus})
      .pipe(map(response => {
        return response.data;
        throwError('Change status form error');
      }));
  }

  duplicateForm(id: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/duplicate`, {
      example_form_id: id,
    })
      .pipe(map(response => {
        return response;
      }));
  }

  exportPDFForm(mongoId: string): Observable<any> {
    return this.http.getFile(`/proxy/form-builder/pdf-export/${mongoId}`)
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

  exportPDFFormZIP(mongoIds: string): Observable<any> {
    return this.http.getFile(`/proxy/form-builder/bulk-pdf-export?ids=${mongoIds}`)
      .pipe(
        map(response => {
          const downloadURL = window.URL.createObjectURL(new Blob([response], {type: 'application/zip'}));
          const link = document.createElement('a');

          link.href = downloadURL;
          link.download = `forms.zip`;
          link.click();
        })
      );
  }
}
