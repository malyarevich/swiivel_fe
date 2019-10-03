export interface FilterDocumentType {
  id: string;
  type: string;
  count: number;
  name: string;
  param?: string;
}

export interface FilterFiled {
  name: string;
  value: string;
  param?: string;
}

export interface FilterDropDownData {
  documents: {
    title: string;
    param: string;
    data: FilterDocumentType[];
  };
  status: {
    title: string;
    param: string;
    data: FilterFiled[];
  };
  submission_type: {
    title: string;
    param: string;
    data: FilterFiled[];
  };
}

