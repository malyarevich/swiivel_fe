import { ApiService } from '@app/core/api.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

export class DataCollectionService extends ApiService {
  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    if (!requestParams) requestParams = {page: 1, limit: 150};
    let params = new HttpParams();
    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
      }
    }
    if ('sort' in requestParams) {
      params = params.append(`sort[${requestParams.sort.field}]`, requestParams.sort.order);
    }
    if ('page' in requestParams) {
      params = params.append('page', requestParams.page.toString());
    }
    if ('limit' in requestParams) {
      params = params.append('limit', requestParams.limit.toString());
    }
    return this.http.get(`/proxy/form-builder/form-templates`, {params});
  }

  changeStatus(updatedIds: number[], updatedStatus: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/status`, {ids: updatedIds, status: updatedStatus});
  }

  duplicateForm(id: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/duplicate`, {
      example_form_id: id,
    });
  }

  exportPDFForm(mongoId: string) {
    return this.download(`/proxy/form-builder/pdf-export/${mongoId}`).pipe(map((response: any)=> {
      return window.URL.createObjectURL(new Blob([response], {type: 'application/pdf'}))
    }), first());
  }

  exportPDFFormZIP(mongoIds: string) {
    return this.download(`/proxy/form-builder/bulk-pdf-export?ids=${mongoIds}`).pipe(map((response: any) => {
      return window.URL.createObjectURL(new Blob([response], {type: 'application/zip'}))
    }));
  }

}
