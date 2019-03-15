import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SORT_ORDER} from "../../../../../enums/sort-order";

@Component({
    selector: 'app-table-header-title',
    templateUrl: './table-header-title.component.html',
    styleUrls: ['./table-header-title.component.css']
})
export class TableHeaderTitleComponent implements OnInit {
    @Input() title: string;
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
