import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../../model/field.model";
import {crumbs} from "../index";
import {SideBarService} from "../../side-bar.service";

@Component({
  selector: 'app-v-fields-side-bar-detailed',
  templateUrl: './v-fields-side-bar-detailed.component.html',
  styleUrls: ['./v-fields-side-bar-detailed.component.css']
})
export class VFieldsSideBarDetailedComponent implements OnInit {

  @Input() section: Field;
  showNested: boolean  = true;
  crumbs = crumbs;
  constructor(private service: SideBarService) { }

  ngOnInit() {
  }

  returnToTree(){
    this.service.sectionSubject.next({});
  }
}
