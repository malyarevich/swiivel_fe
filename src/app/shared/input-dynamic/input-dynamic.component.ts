import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-input-dynamic',
  templateUrl: './input-dynamic.component.html',
  styleUrls: ['./input-dynamic.component.scss']
})
export class InputDynamicComponent implements OnInit {
  controls = [];
  @Input() fields;
  constructor() { }

  ngOnInit() {
  }

}
