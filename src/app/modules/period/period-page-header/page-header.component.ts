import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-period-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() titleHeader: string;
  @Output() onExitEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onExit() {
    this.onExitEmitter.emit();
  }
}
