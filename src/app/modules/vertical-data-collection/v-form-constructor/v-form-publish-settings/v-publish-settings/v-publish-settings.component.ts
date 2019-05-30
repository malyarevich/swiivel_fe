import { Component, OnInit, ViewEncapsulation } from "@angular/core";

enum PDFCheckboxGroup {
  general = "general",
  sending = "sending",
  additional = "additional"
}

@Component({
  selector: "app-v-publish-settings",
  templateUrl: "./v-publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings.component.scss"]
})
export class VPublishSettingsComponent implements OnInit {
  pageData: IPageData = {
    online: {
      title: "Online Form",
      checkBoxList: [
        {
          status: false,
          text:
            "Verified Fields Where the Information Can Change Will Still be Shown",
          tipText: "Example: Address, Phone Number"
        },
        {
          status: true,
          text: "Verified Fields That Will not Change Will not be Shown",
          tipText:
            "Example: Birthday, Social security Number, Mother's Name, Father's Name"
        },
        {
          status: false,
          text:
            "Pre-Fill Fields With Data that is Already in the System (Regardless of Verification)",
          tipText:
            "If the system has any information in the system, to show it in the form instead empty fields that need to be completely started from scratch."
        }
      ]
    },
    pdf: {
      title: "PDF Form",
      subtitle: "General Settings",
      checkBoxList: {
        general: [
          {
            status: false,
            text: "Include Verified Fields in PDF Form"
          },
          {
            status: false,
            text: "Display Hidden Fields in PDF Form"
          }
        ],
        sending: [
          {
            status: false,
            text: "Send to a Mailing House Service"
          }
        ],
        additional: [
          {
            status: false,
            text: "Include Cover Letter for Envelope Window"
          }
        ]
      },
      inputList: [
        { 
          type: "",
          placeholder: "",
          value: "",
        }
      ]
    }
  };

  constructor() {}

  ngOnInit() {
    console.log(this.pageData);
    console.log(this.pageData['pdf'].checkBoxList.general);
  }

  toggleOnlineCheckBox(checkBoxIndex: number) {
    this.pageData['online'].checkBoxList[checkBoxIndex].status = !this.pageData['online'].checkBoxList[checkBoxIndex].status;
  }

  togglePdfCheckBox(group: PDFCheckboxGroup, checkBoxIndex: number) {
    this.pageData['pdf'].checkBoxList[group][checkBoxIndex].status = !this.pageData['pdf'].checkBoxList[group][checkBoxIndex].status;
  }
}

export interface IPageData {
  online: IOnline;
  pdf: IPdf;
}

export interface IOnline {
  title: string;
  checkBoxList: ICheckBox[];
}

export interface IPdf {
  title: string;
  subtitle: string;
  checkBoxList: IPdfCheckBox;
  inputList?: IInput[];
}

export interface IPdfCheckBox {
  general: ICheckBox[];
  sending: ICheckBox[];
  additional: ICheckBox[];
}

export interface ICheckBox {
  status: boolean;
  text: string;
  tipText?: string;
}

export interface IInput {
  value: string;
  type: string;
  placeholder?: string;
}