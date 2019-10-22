import { ChangeDetectorRef, Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SideBarService } from "../../side-bar/side-bar.service";
import { Form } from "src/app/models/data-collection/form.model";
import { Section } from "src/app/models/data-collection/section.model";
import { Field } from "src/app/models/data-collection/field.model";
import { moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-group-container",
  templateUrl: "./group-container.component.html",
  styleUrls: ["./group-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupContainerComponent implements OnInit {
  group;
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() set hideNested(hide: boolean) {
    this.showNested = !hide;
    this.cd.markForCheck()
  }
  @Input() set inputGroup(group: any) {
    this.group = JSON.parse(JSON.stringify(group));
    this.sideBarService.addPathId(group.pathId);
    this.cd.markForCheck()
    // this.cd.detectChanges()
  }
  @Input() sideBar: Field;
  @Input() nestedLevel: number;

  @Input() idSectionForDragDrop: string[];
  warningCheckExistingLabelString =
    "Pay attention that we already have existing field with the same name";
  warningCheckUniqString =
    "Pay attention that there are unique Field with the same name or mapped to the same field!";

  showGroupSettings: boolean = false;

  objectKeys = Object.keys;
  list: object;
  widthOptions = [
    { title: '4 columns', value: 'full' },
    { title: '3 columns', value: 'three-quarter' },
    { title: '2 columns', value: 'half' },
    { title: '1 column', value: 'quarter' }
  ];
  width: any;

  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef
  ) { }
  showNested: boolean = false;
  ngOnInit() {
    this.list = Section.sectionWidth;
    if (this.inputGroup) {
      this.width = this.widthOptions.filter(i => i.value === this.inputGroup.width);
    }
  }

  getIcon(): string {
    return this.showNested ? 'fa-caret-up' : 'fa-caret-down';
  }
  getConnectedIds() {
    return this.sideBarService.pathIds.slice(0, -1).filter(pathId => pathId.endsWith('113') || pathId === 'sidebar-list').concat(this.group.pathId);
  }

  removeGroup(group) {
    this.sideBarService.events$.next({ action: 'remove', target: group });
  }

  widthChanged(value) {
    if (value && value.length > 0) {
      this.inputGroup.width = value[0].value;
    } else {
      this.inputGroup.width = '';
    }
  }

  // drop(event) {
  //   if (event.container === event.previousContainer) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //   }
  // }
  drop(event) {
    if (event.container === event.previousContainer) {
      console.log(event.container.data, event.previousIndex, event.currentIndex)
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === 'sidebar-list') {
        this.sideBarService.events$.next({ action: 'remove', target: event.item.data });
      }
      // console.log(event.previousContainer, event.container, event.previousIndex, event.currentIndex)
      // copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }
  start(event) {
    console.log(event);
  }

  ngAfterViewInit(): void {

    this.cd.detectChanges();
  }
}
