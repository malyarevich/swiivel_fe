export abstract class PublishSettingsItems {
  public static defaultStateSub: ISubMenus = {
    settings: {
      online: false,
      pdf: false
    }
  };

  public static defaultOnlineConfig: object = {
    is_mutable_verified_fields: false,
    is_immutable_verified_fields: true,
    is_pre_fill_fields: false
  };

  public static defaultPdfConfig: object = {
    is_include_verified_fields: false,
    is_display_fields: false,
    is_send_mail: false,
    is_append_cover_letter: false,
    form_value: {
      ProviderName: null,
      AccountNumber: "",
      Email: null,
      EmailSubject: "",
      EmailBody: "",
      FormCheckbox: "",
      CoverLetter: ""
    }
  };

  //Online
  public static onlineStructure: IOnlineStructure = {
    title: "Online Form",
    checkBoxList: [
      {
        key: "is_mutable_verified_fields",
        text:
          "Verified Fields Where the Information Can Change Will Still be Shown",
        tipText: "Example: Address, Phone Number"
      },
      {
        key: "is_immutable_verified_fields",
        text: "Verified Fields That Will not Change Will not be Shown",
        tipText:
          "Example: Birthday, Social security Number, Mother's Name, Father's Name"
      },
      {
        key: "is_pre_fill_fields",
        text:
          "Pre-Fill Fields With Data that is Already in the System (Regardless of Verification)",
        tipText:
          "If the system has any information in the system, to show it in the form instead empty fields that need to be completely started from scratch."
      }
    ]
  };

  //PDF
  public static pdfStructure: IPdfStructure = {
    title: "PDF Form",
    subtitle: "General Settings",
    checkBoxList: {
      general: [
        {
          key: "is_include_verified_fields",
          text: "Include Verified Fields in PDF Form"
        },
        {
          key: "is_display_fields",
          text: "Display Hidden Fields in PDF Form"
        }
      ],
      sending: [
        {
          key: "is_send_mail",
          text: "Send to a Mailing House Service"
        }
      ],
      form: [
        {
          key: "is_append_cover_letter",
          text: "Include Cover Letter for Envelope Window"
        }
      ]
    },
    inputList: [
      {
        type: "",
        placeholder: "",
        value: ""
      }
    ]
  };

  public static providers = [
    { value: 1, name: "First provider" },
    { value: 2, name: "Second provider" },
    { value: 3, name: "Last provider" }
  ];
}

export interface IOnlineStructure {
  title: string;
  checkBoxList: ICheckbox[];
}

export interface IPdfStructure {
  title: string;
  subtitle: string;
  checkBoxList: IPdfCheckbox;
  inputList?: IInput[];
}

export interface IInput {
  value: string;
  type: string;
  placeholder?: string;
}

export interface IPdfCheckbox {
  general: ICheckbox[];
  sending: ICheckbox[];
  form: ICheckbox[];
}

export interface IPdfCheckboxStructure {
  group: string;
  index: number;
}

export interface ICheckbox {
  key: string;
  status?: boolean;
  text: string;
  tipText?: string;
}

export interface ISubMenus {
  settings?: {
    online: boolean;
    pdf: boolean;
  };
}
