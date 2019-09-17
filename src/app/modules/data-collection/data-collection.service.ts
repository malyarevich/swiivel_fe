import { HttpService } from '@app/core/http.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';

export class DataCollectionService extends ApiService {

  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-templates`, {body: requestParams}).pipe(
      map(response => {
        return response.data;
      })
    );
  }
}
