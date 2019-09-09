import { Component, OnInit, Input, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section;
  @Output() activate = new EventEmitter<string>();
  @Output() collapseAll = new EventEmitter<boolean>();
  //   return !!this.section.active;
  // };
  // @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.activate.next(this.section.name.toLowerCase())
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
  control: FormControl = new FormControl();
  constructor() {

  }

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.activate.next(this.section.name)
    })
  }

}
