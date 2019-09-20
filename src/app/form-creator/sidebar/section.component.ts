import { Component, EventEmitter, Input, OnInit, Output, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormCreatorService } from '../form-creator.service';

@Component({
  selector: 'sw-form-creator-sidebar-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent implements OnInit, DoCheck {

  control: FormControl = new FormControl(false);
  section;
  isExpanded;
  // @Input() section;
  // @Output() activate = new EventEmitter<string>();
  // @Output() collapseAll = new EventEmitter<boolean>();

  constructor(private service: FormCreatorService) {
    this.service.section$.subscribe((section) => {
      this.section = section;
      this.isExpanded = true;
    });
    this.control.valueChanges.subscribe(value => {
      console.log(value);
      this.service.section = 'fields'
    });
  }

  ngOnInit() {
    // this.control.valueChanges.subscribe((value: boolean) => {
      // this.toggleSection();
    // });
  }

  ngDoCheck(): void {
    // if (this.control.value !== this.section.active) this.control.setValue(this.section.active);
  }

  // toggleSection() {
  //   if (this.control.value) {
  //     this.collapseAll.next(true);
  //     this.section.expanded = true;
  //     this.section.active = true;
  //     this.activate.next(this.section.workarea);
  //   } else {
  //     this.section.active = false;
  //     this.section.expanded = false;
  //   }
  // }

  // onClick(event: Event) {
  //   console.dir(event.target);
  //   this.activate.next(this.section.name.toLowerCase());
  // }
}
