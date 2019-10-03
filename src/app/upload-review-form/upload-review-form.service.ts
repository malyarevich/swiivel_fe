import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormSubmissionTypeEnum } from '@app/upload-review-form/upload-review-form-submission-type.enum';
import { ApiService } from '@core/api.service';
import { FilterDropDownData } from '@models/upload-review-form/filter.model';
import { SortDropDownData } from '@models/upload-review-form/sort.model';
import { Observable } from 'rxjs';
import { UploadReviewFormSortEnum } from '@app/upload-review-form/upload-review-form-sort.enum';

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

  getDocumentList(formId: string, filterParams?: any, sortParam?: any): Observable<any> {
    let endpoint = '';
    if (filterParams) {
      let endpointParam = '';
      if (filterParams && filterParams.length) {
        filterParams.map((param) =>  {
          endpointParam += `&filter[${param.param}][]=${param.param === 'documents' ? param.id : param.value}`;
        });
      }
      if (sortParam) {
        endpointParam += `&sort=${sortParam[0].value}`;
      }
      endpoint = `/proxy/upload-reviews-form/list?form_id=${formId}&search_query=${endpointParam}`;
    } else {
      endpoint = `/proxy/upload-reviews-form/list?form_id=${formId}`;
    }
    return this.http.get(endpoint);
  }

  getFilterList(formId: string): Observable<any> {
    const endpoint = `/proxy/upload-reviews-form/list-variables-filter/${formId}`;
    return this.http.get(endpoint);
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
                id: doc.id, type: doc.type, count: doc.count > 1 ? doc.count : 0, name: doc.name, param: 'documents'
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

}
