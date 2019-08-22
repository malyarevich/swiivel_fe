import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
