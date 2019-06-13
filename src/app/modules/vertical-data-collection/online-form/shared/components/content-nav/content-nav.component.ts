import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-content-nav',
  templateUrl: './content-nav.component.html',
  styleUrls: ['./content-nav.component.scss']
})
export class ContentNavComponent implements OnInit {
  @Input() content: any[];
  @Output() activeEmitter = new EventEmitter<string>();

  activeId: string;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.content);
    if(this.content.length) {
      this.setActiveId(this.content[0].id);
      // console.log(this.content[0].id);
    }
  }

  setActiveId(id) {
    this.activeId = id;
    this.activeEmitter.emit(this.activeId);
  }
}
