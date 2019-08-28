export enum FieldType {
  SHORT_TEXT = 101,
  LONG_TEXT = 102,
  NUMBER = 103,
  MULTIPLE = 104,
  DATE = 106,
  EMAIL = 108,
  PHONE_NUMBER = 109,
  HEBREW_DATE = 110,
  GROUP = 113,
  SECTION = 114,
}

export enum FieldWidth {
  FULL = "full",
  THREE_QUARTER = "three-quarter",
  HALF = "half",
  QUARTER = "quarter"
}

export interface BaseField {
  type: number,
  name: string,
  _id?: string,
  prefix?: string,
  exist?: boolean,
  isActive?: boolean,
  isValid?: boolean,
  isValidName?: boolean,
  mapped?: string,
  width?: FieldWidth,
  fields?: BaseField[]
}
export interface GroupField extends BaseField {
  fields: [],
  options: [],
  settings?: {
    multiplier?: [],
    options?: []
  }
}
export interface SectionField extends BaseField {
  fields: [],
  options: [],
  settings?: {
    multiplier?: [],
    options?: []
  }
}
export interface InputField extends BaseField {
  mapped: string,
  prefix: string,
  constraints: [],
  validators: [],
}
export interface TextField extends InputField {
  options: {
    'readonly': boolean,
    placeholder: string,
    language: string,
    text: string,
    textPopUp: boolean,
    required: boolean,
    hideLabel: boolean,
    unique: boolean,
    value: string,
    autoComplete: boolean,
    size: number,
    default: string,
  }
}

export interface TextareaField extends InputField {
  options: {
    'readonly': boolean,
    columns: string,
    mode: string,
    rows: string,
    placeholder: string,
    language: string,
    text: string,
    textPopUp: boolean,
    required: boolean,
    hideLabel: boolean,
    unique: boolean,
    value: string,
    autoComplete: boolean,
    size: number,
    default: string,
  }
}

export interface NumberField extends InputField {
  options: {
    'readonly': boolean,
    min: string,
    max: string,
    placeholder: string,
    language: string,
    text: string,
    textPopUp: boolean,
    required: boolean,
    hideLabel: boolean,
    unique: boolean,
    value: string,
    autoComplete: boolean,
    size: number,
    default: string,
  }
}
export interface OtherField extends InputField {
  options: {
    [key: string]: any
  }
}
