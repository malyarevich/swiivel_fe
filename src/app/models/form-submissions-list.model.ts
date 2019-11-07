export class FormSubmissionsListParams {
    page ? = 0;
    limit ? = 15;
    value?: string;
    search?: object;
    sort?: {
        order: string,
        field: string
    };
    filter?: {
        [key: string]: string
    };
    conditions?: object;
    type?: string;
}
