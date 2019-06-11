import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataTableColumn} from "../../../models/data-table/data-table-column.model";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() tableType: string;
  @Input() cols: DataTableColumn[];
  @Output() searchQueryEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSetSearch(event) {
    this.searchQueryEmitter.emit(event)
  }

}
