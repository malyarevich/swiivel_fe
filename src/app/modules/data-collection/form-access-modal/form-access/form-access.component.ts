import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Form} from "../../reducers/forms/form.model";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../../form.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-form-access',
    templateUrl: './form-access.component.html',
    styleUrls: ['./form-access.component.css']
})
export class FormAccessComponent implements OnInit, OnDestroy {
    @Input() formId: string;
    form: Form;
    users;
    selectedUserId;
    acl = [];


    constructor(
        private route: ActivatedRoute,
        private formService: FormService,
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.getForm();
        this.getUsers();
    }

    getForm(): void {
        this.formService.getOneForm(this.formId).subscribe(
            (form: Form) => {
                this.form = form;
                this.acl = this.form.acl ? this.form.acl : [];
            }
        );
    }

    getUsers(): void {
        this.http.post('/users', {})
            .subscribe(
                (users) => {
                    this.users = users;
                }
            );
    }

    addUser() {
        this.acl.push({
            'userId': this.selectedUserId,
            'view': false,
            'edit': false,
            'delete': false,
            'invite': false
        });
    }

    saveFormACL(): void {
        this.form.acl = this.acl;
        this.formService.sendForm(this.form)
            .subscribe(res => {
            });
    }

    ngOnDestroy() {
    }
}
