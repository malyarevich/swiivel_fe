import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-period-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() titleHeader: string;
  @Input() isBackArrowEnable: boolean = true;
  @Input() buttonText: string;
  @Input() routerLink?: string;

  @Output() onButtonClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onButtonClick.emit();
  }
}
