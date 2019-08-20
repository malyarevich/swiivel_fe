import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-period-error',
  templateUrl: './period-error.component.html',
  styleUrls: ['./period-error.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1, offset: 0 })),
      transition(':enter', [
        animate(3200, style({ opacity: 0, offset: 1 })),
      ], )
    ])
  ],
})

export class PeriodErrorComponent implements OnInit {
  @Input() errors: string[] | string;
  @Input() header?: string;
  @Output() closeError = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeError.emit();
    }, 3000);
  }

  onCloseError(): void {
    this.closeError.emit();
  }

  isString(val: string[] | string): boolean {
    return typeof val === 'string';
  }
}
