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

  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef
  ) {}
  showNested: boolean = true;
  ngOnInit() {
    this.list = Section.sectionWidth;
  }
  drop(event) {
    console.log(event.container, event.previousContainer)
    if (event.container.id === this.inputGroup.path.join('|')) {
      moveItemInArray(event.container.data.fields, event.previousIndex, event.currentIndex);
    } else {
      console.log('trans',event.previousContainer.data.fields, event.container.data.fields, event.previousIndex, event.currentIndex)
      transferArrayItem(event.previousContainer.data.fields, event.container.data.fields, event.previousIndex, event.currentIndex);
    //   console.log('drop fgroup', event)
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
