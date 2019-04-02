import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-v-form-nav',
    templateUrl: './v-form-nav.component.html',
    styleUrls: ['./v-form-nav.component.css']
})
export class VFormNavComponent implements OnInit {

    @Output() bulkActionEmitter = new EventEmitter<string>();
    @Output() searchValueEmitter = new EventEmitter<string>();
    @Output() filterStatusEmitter = new EventEmitter<string>();

    searchValue: string = '';
    activeFilterTab = 'all';

    constructor() {
    }

    ngOnInit() {
    }

    bulkAction(type: string) {
        this.bulkActionEmitter.emit(type);
    }

    onSearchValue() {
        this.searchValueEmitter.emit(this.searchValue);
    }

    onCheckStatusTab(value) {
        this.activeFilterTab = value;
        this.filterStatusEmitter.emit(this.activeFilterTab);
    }
}
