import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-period-popup',
  templateUrl: './period-popup.component.html',
  styleUrls: ['./period-popup.component.scss']
})

export class PeriodPopupComponent implements OnInit {
  @Input() text: string = '';
  @Output() cancel = new EventEmitter();
  @Output() accept = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onAccept(): void {
    this.accept.emit();
  }
}
