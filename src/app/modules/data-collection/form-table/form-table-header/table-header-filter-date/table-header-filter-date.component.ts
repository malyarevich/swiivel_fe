import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SORT_ORDER} from "../../../../../enums/sort-order";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-table-header-filter-date',
  templateUrl: './table-header-filter-date.component.html',
  styleUrls: ['./table-header-filter-date.component.css']
})
export class TableHeaderFilterDateComponent implements OnInit {
    @Input() col;
    @Output() filterDataEmitter: EventEmitter<any> = new EventEmitter<any>();

    public sortOrder = SORT_ORDER.DESC;
    public value: {year: number, month: number, day: number};

    constructor(private parserFormatter: NgbDateParserFormatter) {
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
            value: this.parserFormatter.format(this.value) || '',
            order: this.sortOrder
        });
    }

}
