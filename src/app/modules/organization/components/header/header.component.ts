import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { Go } from '../../utils/store/router-store';
import { Logout } from '../../../login/store/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user: Observable<any>;
  @Input() menu = false;
  @Output() toggleSideMenu = new EventEmitter<boolean>();

  constructor(private readonly store: Store<any>) {}

  ngOnInit() {
      // this.user = this.store.pipe(select('users'));
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
