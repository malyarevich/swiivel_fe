import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-back-bar',
  templateUrl: './back-bar.component.html',
  styleUrls: ['./back-bar.component.scss']
})

export class BackBarComponent {
  @Input() title: string;
  @Output() backClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  clickBack() {
    this.backClick.emit();
  }
}
