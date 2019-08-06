import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: '[app-v-form-table-header]',
    templateUrl: './form-table-header.component.html',
    styleUrls: ['./form-table-header.component.scss']
})
export class FormTableHeaderComponent implements OnInit {
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
