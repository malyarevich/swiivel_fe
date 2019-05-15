import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-family-page-header',
  templateUrl: './family-page-header.component.html',
  styleUrls: ['./family-page-header.component.css']
})
export class FamilyPageHeaderComponent implements OnInit {
  @Input() titleHeader: string;
  @Output() searchValueEmitter = new EventEmitter<string>();

  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchValue() {
    this.searchValueEmitter.emit(this.searchValue);
  }
}
