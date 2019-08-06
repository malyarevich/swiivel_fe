import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SideBarService} from '../side-bar.service';
import {isEmpty} from 'lodash';
import {Form} from '../../../../../model/form.model';

@Component({
  selector: 'app-v-fields-side-bar',
  templateUrl: './v-fields-side-bar.component.html',
  styleUrls: ['./v-fields-side-bar.component.css']
})

export class VFieldsSideBarComponent implements OnInit, OnDestroy {

  @Input() sideBar;
  @Input() form: Form;
  @Input() idSectionForDragDrop: string[];

  public isTree = true;
  public sectionDetailed;
  public searchText: string;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit(): void {
    this.sideBarService.sectionSubject.subscribe(data => {
      this.sectionDetailed = data;
      console.log('sectionDetailed', this.sectionDetailed);
      this.isTree = isEmpty(this.sectionDetailed);
    });
  }

  ngOnDestroy(): void {
    this.isTree = true;
  }

}
