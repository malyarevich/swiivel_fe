import {AccompanyingText} from "./documents.model";
import {Field} from "../../../../model/field.model";

export interface FormsDivModel {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  isEdit: boolean;
  linkedField?: Field | FormPDFSignatureModel | FormPDFTemporaryField |  any;
  type?: string;
}
export interface FormPDFSignatureModel{
  id: string;
  //isE - E - true, Wet - false
  isE: boolean;
  //isSystem - System - true, External - false
  isSystem: boolean;
  isBothParents: boolean;
}

export interface FormPDFTemporaryField {
  id: string;
  name: string;
}

export interface FormsPDFModel {
  id:string;
  name: string;
  // isNew: New - true, Existing - false
  isNew: boolean;
  //isPerFamily: Family - true, Student - false
  isPerFamily: boolean;
  //isFillableOnline: Fillable - true
  isFillableOnline: boolean;
  //isAllowDownloadUpload: Allow - true
  isAllowDownloadUpload: boolean;
  //accompanyingText - should contain object with accompanying text and relative info
  accompanyingText?:AccompanyingText;
  //form - all info relative pdf form
  form?: FormPDFDownloadModel | null;
  isEdit?: boolean;
}


export interface FormPDFDownloadModel {
  created_at: string,
  filename: string,
  formName: string,
  hash: string,
  link: string,
  name: string,
  type: string,
  updated_at: string,
  _id: string,
  fieldsPdf?: FormsDivModel[][] | null
  numberOfPages?:number
}

export const formPDFItemDefault: FormsPDFModel = {
  id: '',
  name: '',
  isNew: true,
  isPerFamily: true,
  isAllowDownloadUpload: false,
  isFillableOnline: false,
  accompanyingText: {
    data: '',
    isBold: false,
    isItalic: false
  },
  form: null
};
