import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-online-form-nav',
  templateUrl: './online-form-nav.component.html',
  styleUrls: ['./online-form-nav.component.scss']
})
export class OnlineFormNavComponent implements OnInit {
  @Input() formName: string;
  @Output() actionEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onAction(type: string) {
    this.actionEmitter.emit(type);
  }

}
