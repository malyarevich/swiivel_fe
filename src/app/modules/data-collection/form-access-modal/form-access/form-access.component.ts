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
    selectedUsers = [];
    filteredUsers;
    acl = [];
    showInvite: boolean;
    error: string;

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

    //TODO Add users service and entity
    getUsers(): void {
        this.http.post('/users', {})
            .subscribe(
                (res) => {
                    this.users = res;
                }
            );
    }

    addUsersToList() {
        this.selectedUsers.map(user => {
            this.acl.push({
                'userId': user.id,
                'view': false,
                'edit': false,
                'delete': false,
                'invite': false
            });
        });
        this.resetSelectedUsers();
    }

    saveFormACL(): void {
        this.form.acl = this.acl;
        this.formService.sendForm(this.form)
            .subscribe(res => {
            });
    }

    deleteUserFromAcl(userId) {
        this.acl = this.acl.filter((item) => item.userId != userId);
    }

    findUserToAcl(userId) {
        return this.acl.filter((item) => item.userId == userId);
    }

    ngOnDestroy() {
    }

    assignCopy(){
        this.filteredUsers = Object.assign([], this.users.data);
    }

    filterUsers(value) {
        if(!value){
            this.assignCopy();
        }
        this.filteredUsers = Object.assign([], this.users.data).filter(
            item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }

    selectUsers(user) {
        if (this.acl.find(item => item.userId == user.id)) {
            this.error = "User " + user.username + " already exists in the list";
            return;
        }
        if(this.selectedUsers.find(item => item.id == user.id)) {
            this.error = "User " + user.username + " already selected";
            return;
        }
        this.selectedUsers.push(user);
    }

    resetSelectedUsers() {
        this.selectedUsers = [];
    }

    getUsername(userId) {
        return this.users.data.find(item => item.id === userId).username;
    }

    getRole(userId) {
        return this.users.data.find(item => item.id === userId).role;
    }
}
