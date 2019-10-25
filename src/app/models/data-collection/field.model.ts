import {stripBom} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/strip-bom";

export interface Field {
  _id: string;
  type: number;
  options?: FieldOption | any;
  constraints?: any;
  validators?: IFieldValidators;
  name: string;
  mapped?: string;
  title?: string;
  value?: string;
  isValid?: boolean;
  isValidName?: boolean;
  exist?: boolean;
  fields?: Field[],
  isActive?: boolean,
  prefix?: string,
  settings?: FieldSettings;
  conditional?: FieldSettingConditional;
  typeSettings?: ITypeFieldSettings;
  //TODO: fix type of width
  width?: any;
}


export interface FieldOption {
  placeholder?: string,
  language?: string,
  isSupportText?: boolean;
  supportText?: string,
  supportTextDisplayed?: boolean,
  required?: false,
  readonly?: false,
  hideLabel?: false,
  unique?: false,
  value?: string,
  autoComplete?: false,
  size?: number,
  default?: string,
  space?: number,
  shapeStrokeValue: number,
  shapeStrokeColor: string,
  dividerStyle?: string,
  columnWide?: number,
  rowHeigth?: number,
  fieldOptions?: any[]
}

export interface FieldSettings {
  multiplier?: FieldSettingMultiplier,
  options?: GroupSectionOptions,
}

export interface FieldSettingMultiplier {
  enabled: boolean,
  mapped_type: string,
  mapping_field: string,
  prefill: boolean,
  limit: boolean,
  limit_amount: number
}

export interface FieldSettingConditional {
  logic: string;
  when: string;
  field: string;
  rules: { name: string, value: string }[];
}

export interface GroupSectionOptions {
  groupPreset: string;
  required?: boolean,
  readonly?: boolean,
  hideLabel?: boolean,
  unique?: boolean;
  isSupportText: boolean;
  supportText: string;
  supportTextDisplayed: 'popup' | 'directly';
  isVisible?: boolean;
  isMakeExpandButtonVisible?: boolean;
}

export const fieldValidators = {
  Alphabetic: 'Alphabetic',
  Alphanumeric: 'Alphanumeric',
  Url: 'Url',
  DecimalPlace: 'Decimal Place',
  Percentage: 'Percentage',
  CurrencyUS: 'Currency US',
  CurrencyCanada: 'Currency Canada',
  Criteria: 'criteria',
  phone: 'phone',
  verifyPhone: 'verifyPhone',
  minLength: 'minLength',
  maxLength: 'maxLength',
  min: 'min',
  max: 'max',
  Email: 'Email',
  required: 'required'
} 

export interface ITypeFieldSettings {
  //ShortTextSettings
  minSizeChar?: number;
  maxSizeChar?: number;
  inputMask?: string;
  isDefaultValue?: boolean;
  defaultValue?: string;
  //LongTextSettings
  editorMode?: 'plain' | 'rich' | 'full'
  //DropDownListSettings
  isFullWidth?: boolean;
  fieldWidth?: number;
  fieldHeight?: number;
  selection?: 'one' | 'multiple';
  options?: { name: string }[];
  isSelectedDefault?: boolean;
  selectedDefault?: { name: string };
  //EmailSettings
  validateEmail?: boolean;
  confirmationTextBox?: boolean;
  emailBlocks?: boolean;
  disallowFreeAddress?: boolean;
  blockDomains?: string;
  //PhoneNumberSettings
  numberFormat?: ILabelValueSelect;
  country?: ILabelValueSelect;
  isCellphone?: boolean;
  isVerify?: boolean;
  isInputMask?: boolean;
  //NumberTextSettings
  minValue?: number;
  maxValue?: number;
  numberType?: ILabelValueSelect;
  decimalRange?: number;
  isCurrency?: boolean;
  currency?: ILabelValueSelect;
  isDisplay?: boolean;
  displayType?: 'slider' | 'spinner' | 'star' | 'scale';
  //DateSettings
  separator?: ILabelValueSelect;
  dateFormat?: ILabelValueSelect;
  monthDisplay?: ILabelValueSelect;
  defaultDate?: ILabelValueSelect;
  defaultDateValue?: string;
  isSeparateFields?: boolean;
}

export interface IFieldValidators {
  isValidator: boolean;
  rule: IFieldValidatorsRule;
  minChar: number;
  maxChar: number;
  isErrorMessage: boolean;
  isProhibitDataEntry: boolean;
  errorText: string;
  criteria?: string;
  minLength?: number;
  maxLength?: number;
  verifyPhone?: boolean;
  phone?: boolean;
  min?: number;
  max?: number;
}

export interface IFieldValidatorsRule extends ILabelValueSelect {
}

export interface ILabelValueSelect {
  label: string;
  value: string;
}



