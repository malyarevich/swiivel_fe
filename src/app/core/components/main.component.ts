import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

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
    {route: '/', label: 'Dashboard', icon: 'fa-th'},
    {route: '/bus', label: 'Bus', icon: 'fa-bus'},
    {route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet'},
    {route: '/persons', label: 'Persons', icon: 'fa-user'},
    {route: '/family', label: 'Family', icon: 'fa-cog'},
    {route: '/period', label: 'Period', icon: 'fa-calendar'},
    {route: '/data-collection', label: 'Data Collection', icon: 'fa-file'},
  ]
  constructor() {}
  ngOnInit(): void {}
  toggleMenu() {}
  logOut() {}
}
