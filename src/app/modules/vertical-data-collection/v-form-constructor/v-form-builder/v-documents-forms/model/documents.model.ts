export interface DocumentsModel {
  name: string;
  // isUpload: Upload - true, Download - false
  isUpload: boolean;
  //isPerFamily: Family - true, Student - false
  isPerFamily: boolean;
  data?:any;
}

export interface DocumentSideBar {
  isActiveAll: boolean,
  isDocuments: boolean,
  isForms: boolean
}
