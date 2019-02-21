import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../reducers/forms/form.model";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../form.service";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-form-access',
    templateUrl: './form-access.component.html',
    styleUrls: ['./form-access.component.css']
})
export class FormAccessComponent implements OnInit {
    @Input() formId: string;
    form;
    users;
    persons;
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

    onChangePerm() {
        console.log(this.acl)
    }
}
