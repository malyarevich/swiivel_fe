import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: '[app-v-form-table-header]',
    templateUrl: './v-form-table-header.component.html',
    styleUrls: ['./v-form-table-header.component.scss']
})
export class VFormTableHeaderComponent implements OnInit {
    @Input() cols: [any];
    @Output() searchDataEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    searchCtrl(data, field) {
        this.searchDataEmitter.emit({...data, field})
    }
}
