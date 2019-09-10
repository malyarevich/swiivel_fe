import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.scss']
})

export class PageHeaderComponent implements OnInit {
  @Input() header: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
