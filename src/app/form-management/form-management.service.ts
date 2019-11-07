import { HttpParams } from '@angular/common/http';
import { ApiService } from '@app/core/api.service';
import { FormSearchParams } from '@models/form-search-params';
import { Observable } from 'rxjs';

export class FormManagementAPIService extends ApiService {

  getFormDetails(id: string): Observable<any> {
    return this.http.get(`/proxy/form-management/form-details/${id}`);
  }

  getSubmissionsList(
    id: string,
    requestParams: FormSearchParams = {page: 1, limit: 150},
  ): Observable<any> {
    let params = new HttpParams();
    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
      }
    }
    if ('sort' in requestParams) {
      params = params.append(`sort[${requestParams.sort['field']}]`, requestParams.sort['order']);
    }
    if ('page' in requestParams) {
      params = params.append('page', requestParams.page.toString());
    }
    if ('limit' in requestParams) {
      params = params.append('limit', requestParams.limit.toString());
    }
    return this.http.get(`/proxy/form-management/submissions-list/${id}`, { params });
  }

}
