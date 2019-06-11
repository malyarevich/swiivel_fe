import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataTableColumn} from "../../../../models/data-table/data-table-column.model";

@Component({
    selector: '[app-data-table-header]',
    templateUrl: './data-table-header.component.html',
    styleUrls: ['./data-table-header.component.scss']
})
export class DataTableHeaderComponent implements OnInit {
    @Input() cols: DataTableColumn[];
    @Output() searchQueryEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    searchCtrl(data, field) {
        this.searchQueryEmitter.emit({...data, field})
    }
}
