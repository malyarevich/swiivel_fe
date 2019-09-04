import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.scss']
})

export class BlockHeaderComponent implements OnInit {
  @Input() header: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
