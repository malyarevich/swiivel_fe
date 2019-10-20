import {Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LogoutRequestAction} from '../../../../store/auth-store';

export const menuItems: IMenuItems[] = [
  {route: '/', label: 'Dashboard', icon: 'fa-th'},
  {route: '/bus', label: 'Bus', icon: 'fa-bus'},
  {route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet'},
  {route: '/persons', label: 'Persons', icon: 'fa-user'},
  {route: '/family', label: 'Family', icon: 'fa-cog'},
  {route: '/period', label: 'Period', icon: 'fa-calendar'},
  {route: '/data-collection', label: 'Data Collection', icon: 'fa-file'},
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  public user: Observable<any>;
  public menuItems: IMenuItems[];
  @Input() menu = false;
  @Output() toggleSideMenu = new EventEmitter<boolean>();

  constructor(
    private readonly store$: Store<any>,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.menuItems = menuItems;
  }

  toggleMenu() {
    this.toggleSideMenu.emit(true);
  }

  addClassStatus(route: string): string {
    if (route === this.router.url) {
      return 'main_menu__nav_link--active_page';
    }
    return '';
  }

  logOut(): void {
    this.store$.dispatch(new LogoutRequestAction());
  }
}

export interface IMenuItems {
  route: string;
  label: string;
  icon: string;
}
