import {ApiService} from '@core/api.service';
import {FormSearchParams} from '@models/form-search-params';
import {Observable} from 'rxjs';

export class UploadReviewFormService extends ApiService {
  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    return this.http.get(`/proxy/form-builder/form-templates`, {requestParams});
  }
}
