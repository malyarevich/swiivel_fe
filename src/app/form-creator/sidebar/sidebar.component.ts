import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sections: any[];
  @Output() switch = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSwitch(workarea: string) {
    this.switch.next(workarea);
  }

}
