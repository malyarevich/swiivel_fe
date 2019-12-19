import { DropdownInputOptionModel } from '@models/dropdown-input-option.model';

export interface FormManagementSubmissionDocumentsDropdownOptionsModel {
  documentTypes?: DropdownInputOptionModel[];
  status?: DropdownInputOptionModel[];
  requirement?: DropdownInputOptionModel[];
  requiredFor?: DropdownInputOptionModel[];
  required?: DropdownInputOptionModel[];
  documents?: DropdownInputOptionModel[];
}
