import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormUtils} from "../../utils/form.utils";
import {PublishMenuItems} from "./models/publish-menu-items";
import {ISubMenus} from "./v-publish-menu/v-publish-menu.component";

@Component({
  selector: 'app-v-form-publish-settings',
  templateUrl: './v-form-publish-settings.component.html',
  styleUrls: ['./v-form-publish-settings.component.scss']
})
export class VFormPublishSettingsComponent implements OnInit {
  @Input() formId: string;
  activeMenuItem: string;
  stateSub: ISubMenus;
  publishMenuItems = PublishMenuItems;

  constructor( private formUtils: FormUtils,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.url.subscribe((urlPath) => {
      const url =  urlPath[urlPath.length - 1].path;
      this.formId = url!='v-form-constructor'?url:'';
    });

  }

  setActiveMenu(value) {
    this.activeMenuItem = value;
  }

  setStateSub(newState: ISubMenus):void {
    this.stateSub = newState;
  }

}
