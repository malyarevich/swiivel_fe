import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SORT_ORDER} from "../../../../../enums/sort-order";

@Component({
    selector: 'app-data-table-header-title',
    templateUrl: './data-table-header-title.component.html',
    styleUrls: ['./data-table-header-title.component.css']
})
export class DataTableHeaderTitleComponent implements OnInit {
    @Input() title: string;
    @Input() isSort: boolean;
    @Output() sortFilter: EventEmitter<any> = new EventEmitter<any>();

    public sort = SORT_ORDER;
    public sortOrder: SORT_ORDER;

    constructor() {
    }

    ngOnInit() {
    }

    changeSort() {
        this.sortOrder = this.sortOrder === SORT_ORDER.DESC ? SORT_ORDER.ASC : SORT_ORDER.DESC;
        this.sortFilter.emit(this.sortOrder);
    }
}
