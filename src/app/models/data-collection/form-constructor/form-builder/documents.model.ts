
export interface DocumentsModel {
  id:string;
  name: string;
  // isUpload: Upload - true, Download - false
  isUpload: boolean;
  //isPerFamily: Family - true, Student - false
  isPerFamily: boolean;
  //data - should contain object with file and relative info
  data?: string;
  //accompanyingText - should contain object with accompanying text and relative info
  accompanyingText?:AccompanyingText;
  //dataTypeAllowed - should contain an array of allowed data types
  dataTypeAllowed?:DataTypeItemAllowed[];
}


export interface AccompanyingText {
  data: string;
  isBold: boolean;
  isItalic: boolean;
}

export interface DocumentSideBar {
  isDocuments: boolean,
  isForms: boolean,
}

export interface DataTypeAllowed {
  videoAudio: DataTypeItemAllowed[];
  isVideoAudio: boolean;
  documents: DataTypeItemAllowed[];
  isDocuments: boolean;
  images: DataTypeItemAllowed[];
  isImages: boolean;
}


export interface DataTypeItemAllowed {
  name: string;
  isAllow: boolean;
  type: string;
}

export const dataTypes: DataTypeAllowed = {
  videoAudio: [
    {
      isAllow: false,
      name: 'mp3',
      type: '.mp3'
    },
    {
      isAllow: false,
      name: 'wma',
      type: '.wma'
    },
    {
      isAllow: false,
      name: 'flv',
      type: '.flv'
    },
    {
      isAllow: false,
      name: 'mpg',
      type: '.mpg'
    },
    {
      isAllow: false,
      name: 'avi',
      type: '.avi'
    }
  ],
  isVideoAudio: false,
  documents: [
    {
      isAllow: false,
      name: 'pdf',
      type: '.pdf'
    },
    {
      isAllow: false,
      name: 'doc',
      type: '.doc'
    },
    {
      isAllow: false,
      name: 'xlsx',
      type: '.xlsx'
    },
    {
      isAllow: false,
      name: 'csv',
      type: '.csv'
    },    {
      isAllow: false,
      name: 'rtf',
      type: '.rtf'
    },
    {
      isAllow: false,
      name: 'html',
      type: '.html'
    },
    {
      isAllow: false,
      name: 'txt',
      type: '.txt'
    }
  ],
  isDocuments: false,
  images: [
    {
      isAllow: false,
      name: 'jpg',
      type: '.jpg'
    },
    {
      isAllow: false,
      name: 'jpeg',
      type: '.jpeg'
    },
    {
      isAllow: false,
      name: 'png',
      type: '.png'
    },
    {
      isAllow: false,
      name: 'gif',
      type: '.gif'
    }
  ],
  isImages: false
};

export const documentItemDefault: DocumentsModel = {
  id: '',
  name: '',
  isUpload: true,
  isPerFamily: true,
  accompanyingText: {
    data: '',
    isBold: false,
    isItalic: false
  },
  data: '',
  dataTypeAllowed: []
};