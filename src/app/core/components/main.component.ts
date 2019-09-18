import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

export interface IMenuItems {
  route: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls : ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {
  menuItems: IMenuItems[] = [
    {route: '/dashboard', label: 'Dashboard', icon: 'fa-th'},
    {route: '/bus', label: 'Bus', icon: 'fa-bus'},
    {route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet'},
    {route: '/persons', label: 'Persons', icon: 'fa-user'},
    {route: '/family', label: 'Family', icon: 'fa-cog'},
    {route: '/period', label: 'Period', icon: 'fa-calendar'},
    {route: '/forms-dashboard', label: 'Data Collection', icon: 'fa-file'},
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  toggleMenu() {}
  logOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
