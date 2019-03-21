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
    params = {
        page: 1,
        limit: 20,
        search: {},
        sort: {},
        conditions: {}
    };
    cols = [
        {
            id: 'name',
            type: 'text',
            title: 'FORM NAME',
            sort: true,
            search: true,
        },
        {
            id: 'type',
            type: 'text',
            title: 'TYPE',
            sort: true,
            search: false,
        },
        {
            id: 'access',
            type: 'text',
            title: 'ACCESS',
            sort: false,
            search: false,
        },

        {
            id: 'full_name',
            type: 'text',
            title: 'CREATED BY',
            sort: true,
            search: true,
        },
        {
            id: 'updated_at',
            type: 'data',
            title: 'UPDATED DATA',
            sort: true,
            search: true,
        },
        {
            id: 'status',
            type: 'text',
            title: 'STATUS',
            sort: true,
            search: false,
        },
        {
            id: '',
            type: '',
            title: '',
            sort: false,
            search: false,
            width: '350px',
        },
    ];

    constructor(private vFormService: VFormService) {
    }

    ngOnInit() {
        this.getAllForm();
    }


    getAllForm(): void {
        this.vFormService.getFormsList(this.params).subscribe(forms => {
            this.forms = forms.data
        });
    }

    setSearch(data) {
        const {field, order, value} = data;
        this.params.sort = {field, order};
        this.params.search[field] = value;
        this.getAllForm()
    }

    removeForm(id: string): void {
        this.vFormService.deleteForm(id).subscribe(res => res);
        this.forms = this.forms.filter((form => form.mongo_id != id));
    }

    resetFormSelected() {
        this.formSelected = null;
        this.getAllForm();
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

    doBulkAction(type) {
        if (!this.formsSelectedIds.length) return;
        if (type === 'delete') this.bulkDelete();
        if (type === 'archive') this.bulkArchive();
    }

    bulkDelete() {
        this.vFormService.bulkDeleteForms(this.formsSelectedIds).subscribe(res => {
            this.getAllForm();
            this.formsSelectedIds = [];
        });
    }

    bulkArchive() {
        this.vFormService.bulkArchiveForms(this.formsSelectedIds).subscribe(res => {
            this.getAllForm();
            this.formsSelectedIds = [];
        });
    }
}
