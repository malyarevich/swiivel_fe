import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-period-cancel-popup',
  templateUrl: './period-cancel-popup.component.html',
  styleUrls: ['./period-cancel-popup.component.scss']
})

export class PeriodCancelPopupComponent implements OnInit {
  @Output() cancelExit = new EventEmitter();
  @Output() acceptExit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.cancelExit.emit();
  }

  onAccept(): void {
    this.acceptExit.emit();
  }
}
