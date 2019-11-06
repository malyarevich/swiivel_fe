import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-back-bar',
  templateUrl: './back-bar.component.html',
  styleUrls: ['./back-bar.component.scss']
})

export class BackBarComponent {
  @Input() title: string;
  @Input() searchVisible = false;
  @Output() onBackClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  backClick() {
    this.onBackClick.emit();
  }
}
