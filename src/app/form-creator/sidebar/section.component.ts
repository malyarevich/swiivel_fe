import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  constructor() {

  }
  @Input() section;
  @Output() activate = new EventEmitter<string>();
  @Output() collapseAll = new EventEmitter<boolean>();
  control: FormControl = new FormControl();
  //   return !!this.section.active;
  // };
  // @HostListener('click', ['$event'])
  toggleSection() {
    if (!this.section.expanded) {
      this.collapseAll.next(true);
      this.activate.next(this.section.name.toLowerCase());
      this.section.expanded = true;
    } else {
      this.section.expanded = false;
    }
  }
  // @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.dir(event.target);
    // event.preventDefault();
    this.activate.next(this.section.name.toLowerCase());
  }

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.activate.next(this.section.name);
    });
  }

}
