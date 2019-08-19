import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { SideBarService } from '../../side-bar/side-bar.service';
import { Form } from 'src/app/models/data-collection/form.model';
import { Section } from 'src/app/models/data-collection/section.model';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
  styleUrls: ['./group-container.component.scss']
})

export class GroupContainerComponent implements OnInit, AfterViewInit {
  @Input() form: Form;
  @Input() customFields: Field[];
  @Input() inputGroup: Field;
  @Input() sideBar: Field;
  @Input() nestedLevel: number;

  @Input() idSectionForDragDrop: string[];
  warningCheckExistingLabelString =
    'Pay attention that we already have existing field with the same name';
  warningCheckUniqString =
    'Pay attention that there are unique Field with the same name or mapped to the same field!';

  showGroupSettings = false;

  objectKeys = Object.keys;
  list: object;

  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef
  ) {}

  showNested = true;

  ngOnInit() {
    this.list = Section.sectionWidth;
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
