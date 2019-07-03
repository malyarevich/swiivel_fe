import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-filter-btn',
  templateUrl: './search-filter-btn.component.html',
  styleUrls: ['./search-filter-btn.component.scss']
})
export class SearchFilterBtnComponent implements OnInit {

  @Input() type: string = null;
  @Output() onChange: EventEmitter<{type?: string, direction: string }> = new EventEmitter<{type?: string, direction: string}>();

  public direction = 'asc'; // 'asc'/'desc'

  constructor() { }

  ngOnInit() {}

  onClick() {
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    this.onChange.emit({ type: this.type, direction: this.direction });
  }
}
