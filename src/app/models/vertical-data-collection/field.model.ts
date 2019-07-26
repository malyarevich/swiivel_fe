export interface Field {
  _id: string;
  type: number;
  options?: FieldOption | any;
  constraints?: any;
  validators?: any;
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
  conditional?: FieldSettingConditional,
  typeSettings?: ITypeFieldSettings,
}


export interface FieldOption {
  placeholder?: string,
  language?: string,
  text?: string,
  textPopUp?: false,
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
  dividerStyle?: string

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

export interface ITypeFieldSettings {
  //ShortTextSettings
  minSizeChar?: number;
  maxSizeChar?: number;
  inputMask?: string;
  isDefaultValue?: boolean;
  defaultValue?: string;
  //DropDownListSettings
  isFullWidth?: boolean;
  fieldWidth?: number;
  fieldHeight?: number;
  selection?: 'one' | 'multiple';
  options?: { name: string }[];
  isSelectedDefault?: boolean;
  selectedDefault?: { name: string };
  //DropDownListSettings
  validateEmail?: boolean;
  confirmationTextBox?: boolean;
  emailBlocks?: boolean;
  disallowFreeAddress?: boolean;
  blockDomains?: string;
}



