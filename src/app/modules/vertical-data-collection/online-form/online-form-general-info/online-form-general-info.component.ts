import { Component, Input, OnInit } from "@angular/core";
import { generalSectionsNames } from "../model/general-info-section-name.model";
import { Form } from "../../model/form.model";

@Component({
  selector: "app-online-form-general-info",
  templateUrl: "./online-form-general-info.component.html",
  styleUrls: ["./online-form-general-info.component.scss"]
})
export class OnlineFormGeneralInfoComponent implements OnInit {
  @Input() form: Form;
  navContent: object = [
    {
      id: "parents",
      title: "Parents information"
    },
    {
      id: "students",
      title: "Students information"
    }
  ];

  activeId: string = "parents";

  readonly generalSectionsNames = generalSectionsNames;

  constructor() {}

  ngOnInit() {}

  onActive(id: string) {
    this.activeId = id;
  }
}
