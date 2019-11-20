import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { FormManagementDocumentUserModel } from '@models/form-management/form-management-document.model';
import { UserItem } from '@models/user-item';
import { Observable } from 'rxjs';

@Injectable()
export class FormManagementService extends ApiService {

  changeStatus(updatedIds: number[], updatedStatus: string): Observable<any> {
    return this.changeFormStatus(updatedIds, updatedStatus);
  }

  exportDPFForm(mongoId: string): Observable<any> {
    return this.exportFormPDF(mongoId);
  }

  getDocumentInfo(formId: string): Observable<any> {
    return this.http.get(`/proxy/form-management/analytics-dashboard/${formId}`);
  }

  getDocumentSubmission(formId: string): Observable<any> {
    return this.http.get(`/proxy/form-management/submissions-list/${formId}?limit=200&sort[field]=status&sort[direction]=desc`);
  }

  getUser(user: FormManagementDocumentUserModel): UserItem {
    return {
      name: user.full_name,
      avatar: user.avatar,
      role: user.role_name
    };
  }
}
