import { ApiService } from '@core/api.service';
import { Observable } from 'rxjs';

export class UploadReviewFormService extends ApiService {
  getStatusColor(status: string): string {
    switch (status) {
      case 'approved':
        return 'green';
      case 'assigned':
        return 'blue';
      case 'need_review':
        return 'yellow';
      case 'need_further_review':
        return 'gray';
      case 'rejected':
        return 'gray';
      case 'unassigned':
        return 'red';
      default:
        return 'gray';
    }
  }

  getDocumentList(formId: string): Observable<any> {
    const endpoint = `/proxy/upload-reviews-form/list?form_id=${formId}`;
    return this.http.get(endpoint);
  }
}
