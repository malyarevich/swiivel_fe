import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-v-form-nav',
    templateUrl: './v-form-nav.component.html',
    styleUrls: ['./v-form-nav.component.css']
})
export class VFormNavComponent implements OnInit {

    @Output() bulkActionEmitter = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    bulkAction(type: string) {
        this.bulkActionEmitter.emit(type);
    }
}
