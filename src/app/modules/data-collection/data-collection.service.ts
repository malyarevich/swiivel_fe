import { HttpService } from '@app/core/http.service';
import { FormSearchParams } from '@app/models/form-search-params';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class DataCollectionService {

  constructor(private http: HttpService) {}

  getFormsList(requestParams?: FormSearchParams): Observable<any> {

    const options = {
      body: {
        params: requestParams
      }
    };

    return this.http.post(`/proxy/form-builder/form-templates`, options).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }
}
