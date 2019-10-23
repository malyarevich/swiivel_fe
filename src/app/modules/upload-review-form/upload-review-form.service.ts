import { UploadReviewFormSortEnum } from '@modules/upload-review-form/upload-review-form-sort.enum';
import { UploadReviewFormStatusesEnum } from '@modules/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormSubmissionTypeEnum } from '@modules/upload-review-form/upload-review-form-submission-type.enum';
import { ApiService } from '@app/core/api.service';
import { FilterDropDownData } from '@models/upload-review-form/filter.model';
import { SortDropDownData } from '@models/upload-review-form/sort.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

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

  getDocumentList(formId: string, filterParams?: any, sortParam?: any, searchParam?: any): Observable<any> {
    let endpoint = '';
    if ((filterParams && filterParams.length) || (sortParam && sortParam.length) || searchParam) {
      let endpointParam = '';
      if (searchParam) {
        endpointParam += searchParam;
      }
      if (filterParams && filterParams.length) {
        filterParams.map((param) =>  {
          endpointParam += `&filter[${param.param}][]=${param.param === 'documents' ? param.id : param.value}`;
        });
      }
      if (sortParam && sortParam.length) {
        endpointParam += `&sort=${sortParam[0].value}`;
      }
      endpoint = `/proxy/upload-reviews-form/list?form_template_id=${formId}&search_query=${endpointParam}`;
    } else {
      endpoint = `/proxy/upload-reviews-form/list?form_template_id=${formId}`;
    }
    return this.http.get(endpoint);
  }

  getFilterList(formId: string): Observable<any> {
    const endpoint = `/proxy/upload-reviews-form/list-variables-filter/${formId}`;
    return this.http.get(endpoint);
  }

  downloadForms(formId: string, ids: string): Observable<any> {
    const endpoint = `/proxy/upload-reviews-form/bulk-download/${formId}?ids=${ids}`;
    return this.download(endpoint).pipe(map((response: any) => {
      return window.URL.createObjectURL(new Blob([response], {type: 'application/zip'}));
    }));
  }

  downloadForm(url: string): void {
    window.location.assign(url);
  }

  deleteDocuments(idsData: string[]): Observable<any> {
    const endpoint = `/proxy/upload-reviews-form/delete-documents`;
    const bodyData = { ids: idsData };
    return this.http.delete(endpoint, { body: bodyData });
  }

  changeDocumentStatus(formId: string, statusData: string): Observable<any> {
    const body = { status: statusData };
    return this.http.put(`/proxy/upload-reviews-form/change-status/${formId}`, body);
  }

  getFamilyList(): Observable<any> {
    return this.http.get('/families');
  }

  updateDocumentSettings(documentId: string, data: any): Observable<any> {
    return this.http.put(`/proxy/upload-reviews-form/uploaded-document-settings/${documentId}`, { ...data, entity_type: 'document' });
  }

  getFilterDropDownData(documents: any): FilterDropDownData | {} {
    const uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;
    const uploadReviewFormSubmissionTypeEnum = UploadReviewFormSubmissionTypeEnum;
    const dropDownData = {};
    Object.keys(documents).map((key) => {
      switch (key) {
        case 'documents':
          const docs = [];
          let documentsQuantity = 0;
          if (documents.documents) {
            documents.documents.map((doc) => {
              documentsQuantity += doc.count;
              docs.push({
                id: doc.type, type: doc.type, count: doc.count > 1 ? doc.count : 0, name: doc.name, param: 'documents'
              });
            });
          }
          dropDownData[key] = { title: 'Forms / Documents', data: docs, count: documentsQuantity, param: 'documents'};
          break;
        case 'status':
          const status = [];
          if (documents.status) {
            documents.status.map(docStatus => status.push({
              name: uploadReviewFormStatusesEnum[docStatus],
              value: docStatus,
              param: 'status'
            }));
          }
          dropDownData[key] = { title: 'Status', data: status, param: 'status' };
          break;
        case 'submission_type':
          const submission = [];
          if (documents.submission_type) {
            documents.submission_type.map(docSubmission => submission.push({
              name: uploadReviewFormSubmissionTypeEnum[docSubmission],
              value: docSubmission,
              param: 'submission_type'}));
          }
          dropDownData[key] = { title: 'Submission Type', data: submission, param: 'submission_type' };
          break;
      }
    });
    return dropDownData;
  }

  convertFilterDocumentsData(documents: any): FilterDropDownData | {} {
    return this.getFilterDropDownData(documents);
  }

  convertSortDocumentsData(documents: any): SortDropDownData[] | [] {
    const sortData = [];
    const uploadReviewFormSortEnum = UploadReviewFormSortEnum;
    if (documents && documents.sort) {
      documents.sort.map((docSort => sortData.push({title: uploadReviewFormSortEnum[docSort], value: docSort})));
    }
    return sortData;
  }

  rotateImg(angle: string, id: string): Observable<any> {
    const endpoint =  `/proxy/upload-reviews-form/change-rotate/${id}`;
    const body = { rotate: angle };
    return this.http.put(endpoint, body);
  }

  convertToSettingsType(data: any): string[] {
    const types = [];
    if (data && data.documents && data.documents.data) {
      data.documents.data.map((type) => {
        if (!types.includes(type.name)) {
          types.push(type.name);
        }
      });
    }
    return types;
  }
}
