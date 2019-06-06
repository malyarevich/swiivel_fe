import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SideBarService} from "../side-bar.service";
import { isEmpty } from 'lodash';
import {Form} from "../../../../../model/form.model";
@Component({
  selector: 'app-v-fields-side-bar',
  templateUrl: './v-fields-side-bar.component.html',
  styleUrls: ['./v-fields-side-bar.component.css']
})
export class VFieldsSideBarComponent implements OnInit, OnDestroy {


  @Input() sideBar;
  @Input() form: Form;
  @Input() idSectionForDragDrop: string[];
  isTree: boolean = true;
  sectionDetailed;
  searchText: string;

  constructor(private service: SideBarService) {
  }

  ngOnInit() {

    this.service.sectionSubject.subscribe(data => {
      this.sectionDetailed = data;
      this.isTree = isEmpty(this.sectionDetailed);
    })

  }


  ngOnDestroy(): void {
    this.isTree = true;
  }

}
