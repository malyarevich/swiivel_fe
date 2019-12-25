export interface FormManagementSubmissionMissingFieldModel {
  completion_percentage: number;
  count_missing_fields: number;
  count_required_fields: number;
  sections: any[];
  name: string;
}

export interface FormManagementSubmissionMissingFieldGroupModel {
  count_all_required: number;
  name: string;
  count: number;
  isOpen?: boolean;
  groups: {
    student: {
      name: string;
      count: number,
      missing_fields: string[]
    }
  };
}
