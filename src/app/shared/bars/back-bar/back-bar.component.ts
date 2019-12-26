import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sw-back-bar',
  templateUrl: './back-bar.component.html',
  styleUrls: ['./back-bar.component.scss']
})

export class BackBarComponent {
  @Input() title: string;
  @Output() onBackClick: EventEmitter<any> = new EventEmitter();

  public chevronLeft = faChevronLeft;

  constructor() { }

  backClick() {
    this.onBackClick.emit();
  }
}
