import { requestsSubmissionsList } from './submissions-list';
import { requestsFormDetails } from './form-details';
import { requestsOnlineForm } from './online-form';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const requestsMocks = [
    ...requestsSubmissionsList,
    ...requestsFormDetails,
    ...requestsOnlineForm,
];

export const mock = (request: HttpRequest<any>): HttpResponse<any> => {
    for (const requestMock of requestsMocks) {
        if (request.method === requestMock.request.method && 
            request.url.includes(requestMock.request.url)
        ) {
            return requestMock.response;
        }
    }
}