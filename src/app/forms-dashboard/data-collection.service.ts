import { ApiService } from '@app/core/api.service';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

export class DataCollectionService extends ApiService {

  changeStatus(updatedIds: number[], updatedStatus: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/status`, {ids: updatedIds, status: updatedStatus});
  }

  duplicateForm(id: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/duplicate`, {
      example_form_id: id,
    });
  }

  exportPDFForm(mongoId: string) {
    return this.download(`/proxy/form-builder/pdf-export/${mongoId}`).pipe(map((response: any) => {
      return window.URL.createObjectURL(new Blob([response], {type: 'application/pdf'}));
    }), first());
  }

  exportPDFFormZIP(mongoIds: string) {
    return this.download(`/proxy/form-builder/bulk-pdf-export?ids=${mongoIds}`).pipe(map((response: any) => {
      return window.URL.createObjectURL(new Blob([response], {type: 'application/zip'}));
    }));
  }

}
