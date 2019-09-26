export class FormSearchParams {
    page = 0;
    limit = 15;
    search?: string;
    sort?: {
      order: string,
      field: string
    };
    filter?: {
      [key: string]: string
    };
}
