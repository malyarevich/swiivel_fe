import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Section } from '../../../../models/vertical-data-collection/section.model';

@Component({
  selector: "app-section-header",
  templateUrl: "./section-header.component.html",
  styleUrls: ["./section-header.component.scss"]
})
export class SectionHeaderComponent implements OnInit {
  @Input() sectionName: string;
  @Input() sectionWidth: string;
  @Input() isExpand: boolean;
  @Output() onChangeSectionName: EventEmitter<string> = new EventEmitter;
  @Output() onChangeSectionWidth: EventEmitter<string> = new EventEmitter;
  @Output() onToggleExpand: EventEmitter<any> = new EventEmitter;

  objectKeys = Object.keys;
  list: object;

  constructor() {}

  ngOnInit() {
    this.list = Section.sectionWidth;
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
}
