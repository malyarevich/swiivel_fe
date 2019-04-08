import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-multi-search',
  templateUrl: './select-multi-search.component.html',
  styleUrls: ['./select-multi-search.component.scss']
})
export class SelectMultiSearchComponent implements OnInit {
  @Input() defaultItemIndex: number;
  @Input() labelTitle: string;
  @Input() items: [any];
  @Input() idElement: string;
  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Input() showClearBtn = false;

  constructor() { }

  ngOnInit() {
  }

}
