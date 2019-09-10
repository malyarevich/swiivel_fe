import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @HostBinding('class.expanded') get isExpanded() {
    return !!this.section.active;
  }
  constructor() {

  }
  @Input() section;
  @Output() activate = new EventEmitter<string>();
  control: FormControl = new FormControl();
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.activate.next(this.section.name.toLowerCase());
  }

  ngOnInit() {
  }

}
