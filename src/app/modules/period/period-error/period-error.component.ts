import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-period-error',
  templateUrl: './period-error.component.html',
  styleUrls: ['./period-error.component.scss']
})

export class PeriodErrorComponent implements OnInit {
  @Input() errors: string[] | string;
  @Input() header?: string;
  @Output() closeError = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCloseError(): void {
    this.closeError.emit();
    console.log('close');
  }

  isString(val: string[] | string): boolean {
    return typeof val === 'string';
  }
}
