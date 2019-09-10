import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  control: FormControl = new FormControl();
  @Input() section;
  @Output() collapseAll = new EventEmitter<boolean>();
  @Output() activate = new EventEmitter<string>();
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.activate.next(this.section.name.toLowerCase());
  }

  toggleSection() {
    if (!this.section.expanded) {
      this.collapseAll.next(true);
      this.activate.next(this.section.name.toLowerCase());
      this.section.expanded = true;
    } else {
      this.section.expanded = false;
    }
  }
  constructor() {

  }
  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.activate.next(this.section.name)
    })
  }

}
