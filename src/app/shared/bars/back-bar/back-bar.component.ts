import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-back-bar',
  templateUrl: './back-bar.component.html',
  styleUrls: ['./back-bar.component.scss']
})

export class BackBarComponent {
  @Input() title: string;
  @Input() backRoute ? = '/';
  constructor() { }
}
