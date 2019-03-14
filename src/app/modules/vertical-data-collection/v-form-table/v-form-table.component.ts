import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {VFormService} from "../v-form.service";
import {FormSql} from "../../data-collection/reducers/forms/form.model";

@Component({
    selector: 'app-v-form-table',
    templateUrl: './v-form-table.component.html',
    styleUrls: ['./v-form-table.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class VFormTableComponent implements OnInit {

    forms: FormSql[];
    formSelected;
    formsSelectedIds = [];

    constructor(private vFormService: VFormService) {
    }

    ngOnInit() {
        this.getAllForm();
    }


    getAllForm(): void {
        this.vFormService.getFormsList().subscribe(forms => {
            this.forms = forms.data
        });
    }

    removeForm(id: string): void {
        this.vFormService.deleteForm(id).subscribe(res => res);
        this.forms = this.forms.filter((form => form.mongo_id != id));
    }

    resetFormSelected() {
        this.formSelected = null
    }

    addSelectedIds(id) {
        let index = this.formsSelectedIds.indexOf(id);
        if (index === -1) {
            this.formsSelectedIds.push(id);
        } else {
            this.formsSelectedIds.splice(index, 1);
        }
    }

    isCheckedRow(id) {
        return this.formsSelectedIds.find(item => item === id);
    }
}
