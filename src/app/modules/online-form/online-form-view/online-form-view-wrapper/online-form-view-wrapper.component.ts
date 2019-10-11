import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { ICurrentPosition, IFormNavigationState } from '../../models/online-form.model';

@Component({
  selector: 'sw-online-form-view-wrapper',
  templateUrl: './online-form-view-wrapper.component.html',
  styleUrls: ['./online-form-view-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormViewWrapperComponent implements OnInit {
  @Input() page: string;
  @Input() currentPosition: ICurrentPosition;
  @Input() formNavigationState: IFormNavigationState[];

  constructor() {}

  ngOnInit() {}

  isShow(): boolean {
    return this.currentPosition.page === this.page;
  }

  isExist(): boolean {
    const item = this.formNavigationState.find(item => {
      return item.page === this.page;
    });
    return undefined !== item;
  }

}
