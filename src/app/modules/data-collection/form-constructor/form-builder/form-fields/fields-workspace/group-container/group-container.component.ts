import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { SideBarService } from "../../side-bar/side-bar.service";
import { Form } from "src/app/models/data-collection/form.model";
import { Section } from "src/app/models/data-collection/section.model";
import { Field } from "src/app/models/data-collection/field.model";
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-group-container",
  templateUrl: "./group-container.component.html",
  styleUrls: ["./group-container.component.scss"]
})
export class GroupContainerComponent implements OnInit {
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() inputGroup: any;
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
  ) {}
  showNested: boolean = true;
  ngOnInit() {
    this.list = Section.sectionWidth;
    if (this.inputGroup) {
      this.width = this.widthOptions.filter(i => i.value === this.inputGroup.width);
    }
  }

  getIcon(): string {
    return this.showNested ? 'fa-caret-up' : 'fa-caret-down';
  }

  widthChanged(value) {
    if (value && value.length > 0) {
      this.inputGroup.width = value[0].value;
    } else {
      this.inputGroup.width = '';
    }
  }

  drop(event) {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  dragDrop(event) {
    console.log('ex', event)
  }
  dropAdd(event) {
    if (!event.value._id) {
      this.inputGroup.fields = this.sideBarService.replaceExistinField(
        this.inputGroup.fields[event.dropIndex],
        this.inputGroup.fields
      );
      if (
        this.sideBarService.findIfPresent(
          this.inputGroup.fields[event.dropIndex],
          this.inputGroup.fields
        ).length > 1
      ) {
        this.sideBarService.onFieldDelete(
          this.inputGroup.fields[event.dropIndex],
          this.inputGroup.fields
        );
        return;
      }
      this.sideBarService.fieldCheck(
        this.inputGroup.fields[event.dropIndex],
        this.sideBar[0]
      );
    }
  }

  removeGroup(group: Field) {
    this.sideBarService.events$.next({action: 'remove', target: group});
    this.sideBarService.onFieldDelete(group, this.form.fields);
    group.fields.forEach(field => {
      this.sideBarService.onSectionUnckeck(field, this.sideBar[0].fields);
    });
    this.sideBarService.onSectionUnckeck(group, this.sideBar[0].fields);
  }

  ngAfterViewInit(): void {
    this.idSectionForDragDrop.push(this.inputGroup._id);

    this.cd.detectChanges();
  }
}
