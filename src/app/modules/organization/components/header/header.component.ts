import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { Go } from '../../utils/store/router-store';
import { Logout } from '../../../login/store/index';

const menuItems: IMenuItems[] = [
  { route: '/', label: 'Dashboard', icon: 'fa-th' },
  { route: '/vertical-data-collection', label: 'Bus', icon: 'fa-bus' },
  { route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet' },
  { route: '/persons', label: 'Persons', icon: 'fa-user' },
  { route: '/family', label: 'Family', icon: 'fa-cog' },
  { route: '/', label: '???', icon: 'fa-file' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user: Observable<any>;
  private menuItems: IMenuItems[];
  @Input() menu = false;
  @Output() toggleSideMenu = new EventEmitter<boolean>();

  constructor(private readonly store: Store<any>) {}

  ngOnInit() {
      // this.user = this.store.pipe(select('users'));
      this.menuItems = menuItems;
  }

  toggleMenu () {
    this.toggleSideMenu.emit(true);
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

interface IMenuItems {
  route: string;
  label: string;
  icon: string;
}