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

    getStringPublishSettings(publish_settings: any) {
        if (publish_settings == undefined) {
            return '';
        }
        return publish_settings.state.settings.online === false 
            ? publish_settings.state.settings.pdf === false 
                ? ''
                : 'Paper'
            : publish_settings.state.settings.pdf === false
                ? 'Online'
                : 'Online, Paper';
    }
    
}
