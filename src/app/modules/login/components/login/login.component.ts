import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { fadeInFromVoid, fadeInOutVoid } from '../../../../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
      '[@fadeInFromVoid]': 'fadeIn',
      class: 'host-animate'
  },
  animations: [fadeInFromVoid(), fadeInOutVoid()]
})
export class LoginComponent implements OnInit {
  public isOpen = true;

  constructor() {}

  ngOnInit() {}

  openRestoreView(mode) {
    this.isOpen = mode;
  }
}
