import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  public activeIdForm = '';

  searchValue: string = '';
  activeFilterTab = 'submission';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeIdForm = this.route.snapshot.paramMap.get('id');
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
