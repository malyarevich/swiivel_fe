import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LogoutRequestAction } from '@app/store/auth-store';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
  
  constructor(
    private router: Router,
    private readonly store$: Store<any>,
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.store$.dispatch(new LogoutRequestAction());
  }

  // logout() {
  //   window.localStorage.clear();
  //   window.sessionStorage.clear();
  //   this.router.navigate(['/login']);
  // }
}