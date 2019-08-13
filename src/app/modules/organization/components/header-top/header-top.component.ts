import {Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {menuItems, IMenuItems} from '../header';
import {LogoutRequestAction} from '../../../../store/auth-store';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderTopComponent implements OnInit {
  public user: Observable<any>;
  public menuItems: IMenuItems[];
  @Input() menu = false;
  @Output() toggleSideMenu = new EventEmitter<boolean>();

  constructor(
    private readonly store$: Store<any>
  ) {}

  ngOnInit() {
    this.menuItems = menuItems;
  }

  toggleMenu() {
    this.toggleSideMenu.emit(true);
  }

  logOut(): void {
    this.store$.dispatch(new LogoutRequestAction());
  }
}
