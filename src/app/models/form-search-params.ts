export class FormSearchParams {
    page?: number = 0;
    limit?: number = 15;
    search?: string;
    sort?: {
      order: string,
      field: string
    };
    filter?: {
      [key: string]: string
    };
    type?: string;
}
