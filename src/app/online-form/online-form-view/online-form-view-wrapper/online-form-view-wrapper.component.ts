import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-online-form-view-wrapper',
  templateUrl: './online-form-view-wrapper.component.html',
  styleUrls: ['./online-form-view-wrapper.component.scss']
})
export class OnlineFormViewWrapperComponent implements OnInit {
  @Input() page: string;
  @Input() currentPosition: object;
  @Input() formNavigationState: object[];

  constructor() {}

  ngOnInit() {}

  isShow(): boolean {
    return this.currentPosition['page'] === this.page;
  }

  isExist(): boolean {
    const item = this.formNavigationState.find(item => {
      return item['page'] === this.page;
    });
    return undefined !== item;
  }

}
