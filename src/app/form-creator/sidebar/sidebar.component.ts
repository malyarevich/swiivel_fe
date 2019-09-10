import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';


import { FieldService } from '@app/core/field.service';

@Component({
  selector: 'sw-form-creator-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Input() sections: any[];
  @Output() switch = new EventEmitter<string>();
  constructor(private fs: FieldService) {
  }

  ngOnInit() {

  }

  onSwitch(workarea: string) {
    this.switch.next(workarea);
  }

}
