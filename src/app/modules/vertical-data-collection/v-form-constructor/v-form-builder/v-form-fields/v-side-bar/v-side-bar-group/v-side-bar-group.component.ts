import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-group',
  templateUrl: './v-side-bar-group.component.html',
  styleUrls: ['./v-side-bar-group.component.scss']
})

export class VSideBarGroupComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() idSectionForDragDrop: string[];
  @Input() group: Field;
  @Input() section: Field;
  @Input() form: any;
  @Input() sideBar: Field;

  @Input() nestedLevel: number;

  public showNested = true;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this.sideBar);
  }

  onChangeGroup(event: boolean) {
    this.group.exist = event;
    if (this.group.exist) {
      this.group.fields.forEach(field => field.exist = true);
      // this.sideBarService.onChangeGroup(this.group, this.form);
    } else {
      this.group.fields.forEach(field => field.exist = false);
      console.log(this.form);;
    }
    console.log(this.group);
    console.log(this.form);
  }

  onFieldChanged() {
    if (this.group.fields.some(field => field.exist)) {
      this.group.exist = true;
    } else {
      this.group.exist = false;
    }
  }

  ngOnDestroy(): void {
    this.group.exist = false;

  }
}
