import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() defaultItemIndex: number;
  @Input() labelTitle: string;
  @Input() items: [any];
  @Input() idElement: string;
  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Input() searchable = false;
  @Input() showClearBtn = false;
  @Input() id: string;

  constructor() { }

  ngOnInit() {}

}
