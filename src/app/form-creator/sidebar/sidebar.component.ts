import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { Popup } from '@app/core/popup.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TreeDataSource } from '../tree.datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { SidebarDocumentsFormsComponent } from './documents-forms.component';
import { SidebarConsentComponent } from './consent.component';
import { SidebarTermsConditionsComponent } from './terms-conditions.component';
import { SidebarFieldsComponent } from './fields.component';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  components = {
    fields: SidebarFieldsComponent,
    addDocsComponent: SidebarDocumentsFormsComponent,
    consent: SidebarConsentComponent,
    tac: SidebarTermsConditionsComponent
  }

  expandedSection: string;
  sections: FormGroup;
  expanded: boolean = false;

  constructor(private service: FormCreatorService, private fb: FormBuilder, private api: ApiService, private popup: Popup) {
    this.service.section$.subscribe(section => {
      this.expandedSection = section;
    });
    this.sections = this.fb.group({
      intro: [null],
      fields: [null],
      addDocs: [null],
      consent: [null],
      tac: [null]
    });
    this.sections.valueChanges.subscribe(value => {
      this.service.sections = value;
    });
  }

  hasChild(_: number, node) {
    console.log(`hasChild`, _, node);
    return false;
  }

  isExpanded(section: string) {
    return this.expandedSection === section;
  }

  onClick(section: string, event?: MouseEvent) {
    if (section !== this.expandedSection) {
      this.expanded = true;
      this.service.section = section;
    }
  }

  onCheckBoxClick(node, event) {
    console.log('cbclick', node, event)
  }

  onStatusChange(node, active?: boolean) {
    // this.sidebarFields.setActive(node, !!active);
    console.log(node);
  }

  toggleSection() {
    this.expanded = !this.expanded;
  }

  getIcon(): string {
    return this.expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  isOpen() {
    return this.expanded;
  }

  ngOnInit() { }

}
