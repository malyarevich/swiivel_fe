import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { SideBarService } from "../side-bar.service";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-side-bar-field",
  templateUrl: "./side-bar-field.component.html",
  styleUrls: ["./side-bar-field.component.css"]
})
export class SideBarFieldComponent implements OnInit, OnDestroy {
  @Input() group: Field;
  @Input() rootGroup: Field;
  @Input() field: Field;
  @Input() section: Field;
  @Input() form: Form;
  @Input() nestedLevel: number;
  @Input() style: boolean;
  @Output() onChangeFieldBeing = new EventEmitter<any>();
  @Output() deleteCustom = new EventEmitter<any>();
  constructor(
    private sideBarService: SideBarService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  onFieldToggle(event: boolean): void {
    if (event) {
      this.sideBarService.onChangeGroupBeing(
        this.field,
        this.section,
        this.form,
        this.group,
        this.rootGroup
      );
      this.section.exist = true;
    } else {
      this.sideBarService.onFieldDelete(this.field, this.form.fields);
    }
    this.field.exist = event;
  }

  deleteCustomField(name: string) {
    this.deleteCustom.emit(name);
  }

  ngOnDestroy(): void {
    this.field.exist = false;
  }
}
