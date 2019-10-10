import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LogoutRequestAction } from '@app/store/auth-store';

@Component({
  selector: 'app-creator-header',
  templateUrl: './creator-header.component.html',
  styleUrls: ['./creator-header.component.scss']
})
export class CreatorHeaderComponent implements OnInit {

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly store$: Store<any>,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
      }
    });
  }

  getLink(path: string) {
    if (this.id) {
      path += `/${this.id}`;
    }
    return path;
  }

  logOut(): void {
    this.store$.dispatch(new LogoutRequestAction());
  }

}
