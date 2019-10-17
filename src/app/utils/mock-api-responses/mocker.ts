import { requestsSubmissionsList } from './submissions-list';
import { requestsOnlineForm } from './online-form';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const requestsMocks = [
    ...requestsSubmissionsList,
    ...requestsOnlineForm,
];

export const mock = (request: HttpRequest<any>): HttpResponse<any> => {
    for (const requestMock of requestsMocks) {
        if (requestMock.method === request.method && request.url.includes(requestMock.url)) {
            console.log(JSON.stringify(requestMock.response.body))
            return requestMock.response;
        }
    }
}