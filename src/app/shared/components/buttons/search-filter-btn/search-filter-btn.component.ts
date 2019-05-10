import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter-btn',
  templateUrl: './search-filter-btn.component.html',
  styleUrls: ['./search-filter-btn.component.scss']
})
export class SearchFilterBtnComponent implements OnInit {
  public direction = 'asc'; // 'asc'/'desc'

  constructor() { }

  ngOnInit() {}

  onClick() {
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
  }
}
