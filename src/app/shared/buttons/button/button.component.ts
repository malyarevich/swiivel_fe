import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() value: any;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
