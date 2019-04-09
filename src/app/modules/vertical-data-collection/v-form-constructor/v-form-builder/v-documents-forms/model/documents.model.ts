export interface DocumentsModel {
  name: string;
  // isUpload: Upload - true, Download - false
  isUpload: boolean;
  //isPerFamily: Family - true, Student - false
  isPerFamily: boolean;
  data?:any;
}
