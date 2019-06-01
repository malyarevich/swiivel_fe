import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { ISubMenus } from "../v-publish-menu/v-publish-menu.component";
import { IOnline } from './v-publish-settings-online-form/v-publish-settings-online-form.component';
import { IPdf, IPdfCheckboxStructure } from './v-publish-settings-pdf-form/v-publish-settings-pdf-form.component';

@Component({
  selector: "app-v-publish-settings",
  templateUrl: "./v-publish-settings.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings.component.scss"]
})
export class VPublishSettingsComponent implements OnInit {
  @Input() stateSub: ISubMenus;

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
        form: [
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

  ngOnInit() { }

  toggleOnlineCheckbox(checkBoxIndex: number) {
    this.pageData['online'].checkBoxList[checkBoxIndex].status = 
    !this.pageData['online'].checkBoxList[checkBoxIndex].status;
  }

  togglePdfCheckbox(checkbox: IPdfCheckboxStructure) {
    this.pageData['pdf'].checkBoxList[checkbox.group][checkbox.index].status = 
    !this.pageData['pdf'].checkBoxList[checkbox.group][checkbox.index].status;
  }
}

export interface IPageData {
  online: IOnline;
  pdf: IPdf;
}

export interface ICheckbox {
  status: boolean;
  text: string;
  tipText?: string;
}
