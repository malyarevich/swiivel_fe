import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { FormManagementDocumentUserModel } from '@models/form-management/form-management-document.model';
import { UserItem } from '@models/user-item';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {UploadReviewFormStatusesEnum} from '@app/upload-review-form/upload-review-form-statuses.enum';
import {UploadReviewFormSubmissionTypeEnum} from '@app/upload-review-form/upload-review-form-submission-type.enum';

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

  getSubmissionFormDetails(formId: string): Observable<any> {
    return this.http.get(`/proxy/form-management/form-details/${formId}`);
  }

  getUser(user: FormManagementDocumentUserModel): UserItem {
    return {
      name: user.full_name,
      avatar: user.avatar,
      role: user.role_name
    };
  }

  getLogsList(formId: string, requestParams?): Observable<any> {
    if (!requestParams) {
      requestParams = { page: 1, limit: 150 };
    }

    let params = new HttpParams();

    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        if (filter === 'created_at') {
          if (requestParams.filter[filter]['startDate'] && requestParams.filter[filter]['startDate'].date) {
            params = params.append(
              `filter[${filter}][startDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
          if (requestParams.filter[filter]['endDate'] && requestParams.filter[filter]['endDate'].date) {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['endDate'].date));
          } else {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
        } else {
          params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
        }
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

    return this.http.get(`/proxy/form-management/log-list/${formId}`, { params });
  }

  getSubmissionList(formId: string, requestParams): Observable<any> {
    let params = new HttpParams();

    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        if (filter === 'online_submission') {
          if (requestParams.filter[filter].toLowerCase() === 'yes') {
            params = params.append(`filter[submission_type][online]`, 'true');
          } else if (requestParams.filter[filter].toLowerCase() === 'no') {
            params = params.append(`filter[submission_type][online]`, 'false');
          }
        } else if (filter === 'pdf_submission') {
          if (requestParams.filter[filter].toLowerCase() === 'yes') {
            params = params.append(`filter[submission_type][pdf]`, 'true');
          } else if (requestParams.filter[filter].toLowerCase() === 'no') {
            params = params.append(`filter[submission_type][pdf]`, 'false');
          }
        } else if (filter === 'status') {
          requestParams.filter[filter].forEach((item) => {
            params = params.append(`filter[${filter}][]`, item.value);
          });
        } else if (filter === 'last_updated') {
          if (requestParams.filter[filter]['startDate'] && requestParams.filter[filter]['startDate'].date) {
            params = params.append(
              `filter[${filter}][startDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
          if (requestParams.filter[filter]['endDate'] && requestParams.filter[filter]['endDate'].date) {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['endDate'].date));
          } else {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
        } else {
          params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
        }
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
    return this.http.get(`/proxy/form-management/submissions-list/${formId}`, { params });
  }

  convertFilterParams(data: any): any {
    const formStatusesEnum = UploadReviewFormStatusesEnum;
    const formSubmissionTypeEnum = UploadReviewFormSubmissionTypeEnum;
  }

}
