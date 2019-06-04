import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: '[app-v-form-table-tbody]',
    templateUrl: './v-form-table-tbody.component.html',
    styleUrls: ['./v-form-table-tbody.component.scss']
})
export class VFormTableTbodyComponent implements OnInit {
    @Input() parent: any;

    constructor() { }

    ngOnInit() { }

    getStringPublishSettings(settings: any) {
        if (settings == undefined) {
            return '';
        }
        return settings.online === false 
            ? settings.pdf === false 
                ? ''
                : 'Paper'
            : settings.pdf === false
                ? 'Online'
                : 'Online, Paper';
    }
    
}
