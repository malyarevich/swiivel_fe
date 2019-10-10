export class FormSubmissionsListParams {
    page?: number = 0;
    limit?: number = 15;
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