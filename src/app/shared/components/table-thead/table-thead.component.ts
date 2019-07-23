import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TableThead } from './tableThead.model';
import { SORT_ORDER } from '../../../enums/sort-order';

@Component({
  selector: '[app-table-thead]',
  templateUrl: './table-thead.component.html',
  styleUrls: ['./table-thead.component.scss']
})
export class TableTheadComponent implements OnInit {
  @Input() columns: TableThead[];
  @Input() backround: string;
  @Input() isSortable?: boolean = true;
  @Output() sortFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChangeSort(index) {
    if (this.isSortable) {
      this.columns.forEach((column, columnIndex) => {
        if (column.sortOrder && columnIndex !== index) {
          delete column.sortOrder;
        }
      });

      this.columns[index].sortOrder = this.columns[index].sortOrder === SORT_ORDER.DESC ? SORT_ORDER.ASC : SORT_ORDER.DESC;

      const sortFilter = {
        id: this.columns[index].id,
        order: this.columns[index].sortOrder,
      };

      this.sortFilter.emit(sortFilter);
    }
  }
}
