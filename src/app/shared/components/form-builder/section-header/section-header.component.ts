import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Section } from '../../../../models/data-collection/section.model';

/**Help for use
 * Example for base usage:
<app-section-header
  [sectionName]="sectionName"
  [sectionWidth]="sectionWidth"
  [isExpand]="isExpand"
  (onChangeSectionName)="changeSectionName($event)"
  (onChangeSectionWidth)="changeSectionWidth($event)"
  (onToggleExpand)="toggleExpand()"
></app-section-header>
 */

@Component({
  selector: "app-section-header",
  templateUrl: "./section-header.component.html",
  styleUrls: ["./section-header.component.scss"]
})
export class SectionHeaderComponent implements OnInit {
  @Input() 
  set sectionName(n: string) {
    this.name = n;
  }
  @Input() 
  set sectionWidth(w: string) {
    this.width = [this.widthOptions.find(i => i.value === w)];
  }
  @Input() isExpand: boolean;
  @Output() onChangeSectionName: EventEmitter<string> = new EventEmitter;
  @Output() onChangeSectionWidth: EventEmitter<string> = new EventEmitter;
  @Output() onToggleExpand: EventEmitter<any> = new EventEmitter;
  @Output() onToggleSettings: EventEmitter<any> = new EventEmitter;
  @Output() onRemoveSection: EventEmitter<any> = new EventEmitter;

  objectKeys = Object.keys;
  list: object;
  name: string = '';
  width: any[] = [];

  widthOptions = [
    { title: '4 columns', value: 'full' },
    { title: '3 columns', value: 'three-quarter' },
    { title: '2 columns', value: 'half' },
    { title: '1 column', value: 'quarter' }
  ];

  constructor() {}

  ngOnInit() {
    this.list = Section.sectionWidth;
  }

  getIcon(): string {
    return this.isExpand ? 'fa-caret-up' : 'fa-caret-down';
  }

  nameChanged(value) {
    this.onChangeSectionName.emit(value);
  }

  widthChanged(e) {
    let res = '';
    if (e && e.length > 0) {
      res = e[0].value;
    }
    this.onChangeSectionWidth.emit(res);
  }

  changeSectionName(value: string) {
    this.onChangeSectionName.emit(value);
  }

  changeSectionWidth(value: string) {
    this.onChangeSectionWidth.emit(value);
  }

  toggleExpand() {
    this.onToggleExpand.emit();
  }

  toggleSettings() {
    this.onToggleSettings.emit()
  }

  removeSection() {
    this.onRemoveSection.emit()
  }
}
