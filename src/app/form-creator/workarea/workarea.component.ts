import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-form-creator-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaComponent implements OnInit {
  _workarea: string = 'intro';
  @Input() set workarea(area: string ){
    if (area) {
      this._workarea = area;
    }
  }
  get workarea(): string {
    return this._workarea;
  }
  constructor() { }

  ngOnInit() {
  }

}
