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
  @HostBinding('class.expanded') get isExpanded() {
    return !!this.section.active;
  };
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.activate.next(this.section.name.toLowerCase())
  }
  control: FormControl = new FormControl();
  constructor() {

  }

  ngOnInit() {
  }

}
