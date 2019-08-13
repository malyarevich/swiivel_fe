import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RestoreLoginAction} from './store/auth-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    public readonly store$: Store<any>
  ) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store$.dispatch(new RestoreLoginAction(user));
    }
  }
}
