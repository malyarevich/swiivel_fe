import { ChangeDetectorRef, Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { SideBarService } from "../../side-bar/side-bar.service";
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-section-container",
  templateUrl: "./section-container.component.html",
  styleUrls: ["./section-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionContainerComponent implements OnInit {
  @Input() sideBar: Field;
  @Input() form: Form;
  @Input() customFields: Field[];
  _section;
  @Input() set section(_section: any) {
    this._section = _section;
    this.cd.markForCheck()
  }
  @Input() idSectionForDragDrop: string[];
  nestedLevel: number = 0;
  constructor(
    private cd: ChangeDetectorRef,
    private sideBarService: SideBarService
  ) { }
  showSettings: boolean = false;
  ngOnInit() { }
  drop(event) {
    if (event.container.id === 'sidebar-list') {
      this.sideBarService.events$.next({ action: 'remove', target: event.item.data });
    }
  }




  //   //replace cloned field that which copy to field array with object link by AM Drag&Drop native method
  //   this.fields = this.fields.map(item => item._id==field._id?newField:item);

  removeSection(section: Field) {
    this.sideBarService.events$.next({ action: 'remove', target: section });
  }

  getEndOfSection() {
    return "End of the " + this._section.name;
  }

  getConnectedPathIds() {
    return this.sideBarService.pathIds;
  }

  getSectionPathIds() {
    return this.sideBarService.pathIds.slice(0, -1).filter(pathId => pathId.endsWith('113') || pathId.endsWith('114')).concat(['sidebar-list'])
  }

  ngAfterViewInit(): void {
    if (this.section && this.section._id) {
      this.idSectionForDragDrop.push(this.section._id);

    }
    this.cd.detectChanges();
  }

  changeSectionName(sectionName: string) {
    this.section.name = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.section.width = sectionWidthType;
  }

  toggleExpand() {
    this._section.isExpanded = !this._section.isExpanded;
    this.cd.markForCheck()
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
