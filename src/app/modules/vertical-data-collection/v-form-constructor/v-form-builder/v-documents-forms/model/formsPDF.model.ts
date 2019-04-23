import {AccompanyingText} from "./documents.model";
import {Field} from "../../../../model/field.model";

export interface FormsDivModel {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  isEdit: boolean;
  linkedField?: Field | any;
  type?: string;
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
