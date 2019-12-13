export interface FormManagementSectionsModel {
  fields?: FormManagementFieldsModel[];
  isExpanded: boolean;
  isSelected: boolean;
  mapped: string;
  name: string;
  options: FormManagementFieldsOptions;
  textType: string;
  type: number;
  _id: string;
  isChosen?: boolean;
  isOpen?: boolean;
}

export interface FormManagementFieldsModel {
  fields?: FormManagementSubFieldsModel[];
  isExpanded: boolean;
  isSelected: boolean;
  isActive: boolean;
  mapped: string;
  name: string;
  options: FormManagementFieldsOptions;
  path: string[];
  showSettings: boolean;
  textType: string;
  type: number;
  _id: string;
  isChosen?: boolean;
  isOpen?: boolean;
}

export interface FormManagementSubFieldsModel {
  constraints?: string[];
  exist?: boolean;
  isActive?: boolean;
  mapped: string;
  name: string;
  options?: FormManagementFieldsOptions;
  path?: string[];
  pathId?: string;
  prefix?: string;
  showSettings?: boolean;
  textType?: string;
  type?: number;
  _id: string;

}

export interface FormManagementFieldsOptions {
  displayStrategy?: string;
  hint?: string;
  showHint?: boolean;
  size: number;
  hideLabel: boolean;
  maxRep?: number;
  minRep?: number;
  numOfRep?: number;
  prefill?: number;
  repeatGroup?: number;
  repeatStrategy?: string;
  required?: boolean;

  allowList?: boolean;
  autoComplete?: boolean;
  default: string;
  readonly?: boolean;
  showDefaultValue?: boolean;
  showValidators?: boolean;
  textPopUp?: boolean;
  unique?: boolean;

}



