import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IMenuItems {
  route: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {
  public isCollapsed = true;
  public isLeftMenuOpened = false;

  pathIconsFolder = 'assets/images/icons/';
  menuItems: IMenuItems[] = [
    { route: '/dashboard', label: 'Dashboard', icon: 'menu-dashboard' },
    { route: '/persons', label: 'People', icon: 'menu-people' },
    { route: '/payer-accounts', label: 'Financial', icon: 'menu-financial' },
    { route: '/forms-dashboard', label: 'Data Collection', icon: 'menu-data-collection' },
    { route: '/bus', label: 'Collections', icon: 'menu-collections' },
    { route: '/family', label: 'Call Center', icon: 'menu-call-center' },
    { route: '/period', label: 'Reporting', icon: 'menu-reporting' },
    { route: '/communication', label: 'Communication', icon: 'menu-communication' },
    { route: undefined, label: undefined, icon: undefined }, // splitter
    { route: '/settings', label: 'Settings', icon: 'menu-settings' },
    { route: '/logout', label: 'Log Out', icon: 'sign-out-alt-solid' },
  ];
  constructor(private router: Router) { }
  ngOnInit(): void { }
  toggleMenu() { }

  isLogout(item: IMenuItems): boolean {
    return item.route === '/logout';
  }

  logOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleLeftMenu() {
    this.isLeftMenuOpened = !this.isLeftMenuOpened;
  }
}
