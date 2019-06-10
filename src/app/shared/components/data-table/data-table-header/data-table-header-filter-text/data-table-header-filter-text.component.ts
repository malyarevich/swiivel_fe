import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SORT_ORDER} from "../../../../../enums/sort-order";

@Component({
    selector: 'app-data-table-header-filter-text',
    templateUrl: './data-table-header-filter-text.component.html',
    styleUrls: ['./data-table-header-filter-text.component.css']
})
export class DataTableHeaderFilterTextComponent implements OnInit {
    @Input() col;
    @Output() filterDataEmitter: EventEmitter<any> = new EventEmitter<any>();

    public sortOrder = SORT_ORDER.DESC;
    public value;

    constructor() {
    }

    ngOnInit() {
    }

    changeSort (sortOrder: SORT_ORDER): void {
        this.sortOrder = sortOrder;
        this.emitData();
    }

    cancelSearch (): void {
        this.value = null;
        this.emitData();
    }

    sendData (): void {
        this.emitData();
    }

    emitData (): void {
        this.filterDataEmitter.emit({
            value: this.value || '',
            order: this.sortOrder
        });
    }
}
