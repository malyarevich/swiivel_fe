export class FormSearchParams {
    page?: number = 0;
    limit?: number = 15;
    search?: string;
    sort?: {
      order: 'asc' | 'desc',
      field: 'string'
    };
    filter?: {
      [key: string]: string
    };
}
