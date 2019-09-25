import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';

@Component({
  selector: 'sw-form-creator-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaComponent implements OnInit {
  _workarea = 'default';

  constructor(private service: FormCreatorService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.section$.subscribe(section => {
      this._workarea = section;
      this.cdr.markForCheck();
    });
  }

}
