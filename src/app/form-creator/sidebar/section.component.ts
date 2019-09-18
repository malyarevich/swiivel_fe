import { Component, EventEmitter, Input, OnInit, Output, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, DoCheck {
  
  control: FormControl = new FormControl(false);

  @Input() section;
  @Output() activate = new EventEmitter<string>();
  @Output() collapseAll = new EventEmitter<boolean>();
  
  constructor() {}
  
  ngOnInit() {
    this.control.valueChanges.subscribe((value: boolean) => {
      this.toggleSection();
    });
  }
  
  ngDoCheck(): void {
    if (this.control.value !== this.section.active) this.control.setValue(this.section.active);
  }
  
  toggleSection() {
    if (this.control.value) {
      this.collapseAll.next(true);
      this.section.expanded = true;
      this.section.active = true;
      this.activate.next(this.section.name.toLowerCase());
    } else {
      this.section.active = false;
      this.section.expanded = false;
    }
  }

  // onClick(event: Event) {
  //   console.dir(event.target);
  //   this.activate.next(this.section.name.toLowerCase());
  // }
}
