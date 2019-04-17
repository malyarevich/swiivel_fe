import {AccompanyingText} from "./documents.model";

export interface FormsDivModel {
  top: number;
  left: number;
  width: number;
  height: number;
  isEdit: boolean;
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
  form: any;
}
