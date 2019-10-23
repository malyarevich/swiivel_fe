import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { range } from "lodash";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { v4 as uuid } from "uuid";
import { SideBarService } from "../side-bar/side-bar.service";
import { dividerStyle } from "./divider";
import { Form } from "src/app/models/data-collection/form.model";
import { Section } from "src/app/models/data-collection/section.model";
import { Field } from "src/app/models/data-collection/field.model";
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-fields-workspace",
  templateUrl: "./fields-workspace.component.html",
  styleUrls: ["./fields-workspace.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsWorkspaceComponent implements OnInit, AfterViewInit {
  _form;

  @Input('form') set form(form: any) {
    this._form = form;
    this.cd.markForCheck()
  }

  @Input() customFields: Field[];
  fields;
  size = range(1, 13);

  objectKeys = Object.keys;
  list: object;

  dividerStyles = dividerStyle;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private sideBarService: SideBarService
  ) { }

  ngOnInit() {
    this.list = Section.sectionWidth;
    // this.sideBarService.form$.subscribe((form) => {
    //   if (!this._form) {
    //     this._form = form;
    //   }
    //   if (this._form) {
    //     this._form.fields = form.fields;
    //   }
    //   this.cd.markForCheck()
    // })
    this.sideBarService.events$.subscribe((event: any) => {
      if (event.action === 'update') {
        let fields = this.sideBarService.form.workspace;
        let section = fields.find(field => field.type === 114);
        if (!section) {
          section = {
            type: 114,
            name: 'New section',
            isActive: true,
            fields: fields,
            path: ['New section'],
            pathId: 'New section114'
          }
          this.sideBarService.form.form.addControl(section.name, this.sideBarService.createForm(section));
          this.fields = [section]
        } else {
          this.fields = fields;
        }
        this.cd.detectChanges();
        this.cd.markForCheck();
      }
    })
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  drop(event) {
    if (event.container.id === 'sidebar-list') {
      this.sideBarService.events$.next({ action: 'remove', target: event.item.data });
    }
  }
  dropDrag(event) {
    console.log('ex', event);
  }

  noFields(item: CdkDrag<any>) {
    return item.data.type >= 112;
  }

  getConnectedPathIds() {
    return this.sideBarService.pathIds.filter(pathId => pathId.endsWith('114') || pathId.endsWith('113') || pathId.endsWith('list'))
  }

  start(event) {
    console.log(event)
  }

  openModal(content) {
    this.modalService
      .open(content, { size: "lg", ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => { },
        reason => {
          console.log(reason);
        }
      );
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }
}
