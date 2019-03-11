import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {VFormAccessComponent} from "./v-form-access/v-form-access.component";

@Component({
    selector: 'app-v-form-access-modal',
    templateUrl: './v-form-access-modal.component.html',
    styleUrls: ['./v-form-access-modal.component.css']
})
export class VFormAccessModalComponent implements OnInit {
    @ViewChild(VFormAccessComponent) formAccessComponent:VFormAccessComponent;
    @Input() formSelected: string;
    @Output() resetFormSelectedEmitter: EventEmitter<any[]> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    saveFormPermissions() {
        this.formAccessComponent.saveFormPermissions();
        this.resetFormSelected()
    }

    resetFormSelected() {
        this.resetFormSelectedEmitter.emit();
    }

}
