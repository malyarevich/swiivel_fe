import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { Go } from '../../utils/store/router-store';
import { Logout } from '../../../login/store/index';
import { Router } from '@angular/router';

export const menuItems: IMenuItems[] = [
  { route: '/', label: 'Dashboard', icon: 'fa-th' },
  { route: '/bus', label: 'Bus', icon: 'fa-bus' },
  { route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet' },
  { route: '/persons', label: 'Persons', icon: 'fa-user' },
  { route: '/family', label: 'Family', icon: 'fa-cog' },
  { route: '/period', label: 'Period', icon: 'fa-calendar' },
  { route: '/data-collection', label: 'Data Collection', icon: 'fa-file' },
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

  constructor(private readonly store: Store<any>,
              private router: Router,
  ) {

  }

  ngOnInit() {
      // this.user = this.store.pipe(select('users'));
      this.menuItems = menuItems;
  }

  toggleMenu () {
    this.toggleSideMenu.emit(true);
  }

  addClassStatus(route: string): string {
    if (route === this.router.url) {
      return "main_menu__nav_link--active_page"
    }
    return "";
  }

  // goToIndex (): void {
  //     // this.store.dispatch(new Go(['/']));
  // }

  // goToProfile (data: any): void {
  //     const {user} = data;
  //     // this.store.dispatch(new Go(['/users/id/', user.id]));
  // }

  logOut (): void {
      this.store.dispatch(new Logout());
  }
}

export interface IMenuItems {
  route: string;
  label: string;
  icon: string;
}
