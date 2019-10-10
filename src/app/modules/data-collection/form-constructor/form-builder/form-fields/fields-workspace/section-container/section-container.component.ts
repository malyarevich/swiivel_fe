import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { SideBarService } from "../../side-bar/side-bar.service";

@Component({
  selector: "app-section-container",
  templateUrl: "./section-container.component.html",
  styleUrls: ["./section-container.component.scss"]
})
export class SectionContainerComponent implements OnInit {
  @Input() sideBar: Field;
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() section: Field;
  @Input() idSectionForDragDrop: string[];
  nestedLevel: number = 0;
  constructor(
    private cd: ChangeDetectorRef,
    private sideBarService: SideBarService
  ) {}
  showSettings: boolean = false;
  isExpand: boolean = true;
  ngOnInit() {}
  drop(event) {
    console.log('droppp', event);
  }
  dropAdd(event) {
    if (!event.value._id) {
      this.section.fields = this.sideBarService.replaceExistinField(
        this.section.fields[event.dropIndex],
        this.section.fields
      );
      if (
        this.sideBarService.findIfPresent(
          this.section.fields[event.dropIndex],
          this.section.fields
        ).length > 1
      ) {
        this.sideBarService.onFieldDelete(
          this.section.fields[event.dropIndex],
          this.section.fields
        );
        return;
      }
      this.sideBarService.fieldCheck(
        this.section.fields[event.dropIndex],
        this.sideBar[0]
      );
    }
  }

  //   //replace cloned field that which copy to field array with object link by AM Drag&Drop native method
  //   this.fields = this.fields.map(item => item._id==field._id?newField:item);

  removeSection(section: Field) {

    this.sideBarService.onSectionDelete(section);
    this.section.fields.forEach(field => {
      this.sideBarService.onFieldUncheck(field, this.sideBar[0].fields);
      if (field.type === 113) {
        field.fields.forEach(f =>
          this.sideBarService.onFieldUncheck(f, this.sideBar[0].fields)
        );
      }
    });
    // this.sideBarService.changeExistingAllSection(false, section.fields);
    this.sideBarService.onSectionUnckeck(section, this.sideBar[0].fields);
  }

  getEndOfSection() {
    return "End of the " + this.section.name;
  }

  ngAfterViewInit(): void {
    this.idSectionForDragDrop.push(this.section._id);

    this.cd.detectChanges();
  }

  changeSectionName(sectionName: string) {
    this.section.name = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.section.width = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
