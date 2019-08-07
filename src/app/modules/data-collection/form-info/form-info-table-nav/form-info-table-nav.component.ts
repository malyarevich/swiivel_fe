import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-form-info-table-nav',
  templateUrl: './form-info-table-nav.component.html',
  styleUrls: ['./form-info-table-nav.component.css']
})
export class FormInfoTableNavComponent implements OnInit {
  @Input() formId: string;
  @Output() activeTabEmitter = new EventEmitter<string>();
  @Output() searchValueEmitter = new EventEmitter<string>();
  @Output() bulkActionEmitter = new EventEmitter<string>();

  searchValue: string = '';
  activeFilterTab = 'submission';

  constructor() { }

  ngOnInit() {
    // console.log(this.formId)
    this.activeTabEmitter.emit(this.activeFilterTab);
  }

  onActiveTab(value) {
    this.activeFilterTab = value;
    this.activeTabEmitter.emit(this.activeFilterTab);
  }

  onSearchValue() {
    this.searchValueEmitter.emit(this.searchValue);
  }

  bulkAction(type: string) {
    this.bulkActionEmitter.emit(type);
  }
}
