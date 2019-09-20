import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';

@Component({
  selector: 'sw-form-creator-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaComponent implements OnInit {
  _workarea = 'fields';
  @Input() set workarea(area: string) {
    if (area) {
      this._workarea = area;
    }
  }
  get workarea(): string {
    return this._workarea;
  }
  constructor(private service: FormCreatorService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.section$.subscribe(section => {
      this._workarea = section;
      this.cdr.markForCheck();
    });
  }

}
