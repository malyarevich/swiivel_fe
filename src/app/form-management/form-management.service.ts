import { ApiService } from '@app/core/api.service';
import {Observable} from 'rxjs';

export class FormManagementService extends ApiService {

  getDocumentInfo(formId: string): Observable<any> {
    return this.http.get(`/proxy/form-management/form-details/${formId}`);
  }
}
