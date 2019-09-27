import { ApiService } from '@app/core/api.service';
import { Observable } from 'rxjs';

export class UploadReviewFormService extends ApiService {
  uploadFile(fileToUpload: File, formId): Observable<boolean> {
    const endpoint = `/proxy/upload-reviews-form/list?form_id=${formId}`;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }
}
