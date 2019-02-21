import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormAccessComponent} from "./form-access/form-access.component";

@Component({
    selector: 'app-form-access-modal',
    templateUrl: './form-access-modal.component.html',
    styleUrls: ['./form-access-modal.component.css']
})
export class FormAccessModalComponent implements OnInit {
    @ViewChild(FormAccessComponent) formAccessComponent:FormAccessComponent;
    @Input() formSelected: string;
    @Output() resetFormSelectedEmitter: EventEmitter<any[]> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    saveFormACL() {
        this.formAccessComponent.saveFormACL();
        this.resetFormSelected()
    }

    resetFormSelected() {
        this.resetFormSelectedEmitter.emit();
    }

}
