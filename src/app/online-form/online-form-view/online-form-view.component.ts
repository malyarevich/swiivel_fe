import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '@models/data-collection/form.model';
import {
  IMainMenuNames,
  IMenuItems,
  mainMenuNames,
  menuItems
} from '@models/data-collection/online-form/menu.model';
import {
  ICurrentPosition,
  IFormNavigationState
} from '../models/online-form.model';

@Component({
  selector: 'sw-online-form-view',
  templateUrl: './online-form-view.component.html',
  styleUrls: ['./online-form-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormViewComponent implements OnInit {
  @Input() form: FormModel;
  @Input() formNavigationState: IFormNavigationState[];
  @Input() currentPosition: ICurrentPosition;
  @Input() formErrors: object;
  @Input() fieldNameList: object;
  @Input() fg: FormGroup;
  @Input() isViewOnly: boolean;

  @Output() goToTab: EventEmitter<any> = new EventEmitter();

  menuItems: IMenuItems[] = menuItems;
  mainMenuNames: IMainMenuNames = mainMenuNames;
  ngOnInit() {}

  getPageTitle(): string {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    }).title;
  }

  getCurrentPage(): string {
    return this.currentPosition.page;
  }

  getCurrentTab(): number {
    return this.currentPosition.tab;
  }

  getPageTime(): number {
    return menuItems.find(item => {
      return item.name === this.currentPosition.page;
    }).time;
  }

  isShow(page, tabId): boolean {
    return (
      this.currentPosition.page === page && this.currentPosition.tab === tabId
    );
  }

  onGoToTab(tabIndex) {
    this.goToTab.emit(tabIndex);
  }
}
