import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Form} from "../../reducers/forms/form.model";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../../form.service";
import {HttpClient} from "@angular/common/http";

export interface FormResponse {
    data?,
    status?
}

@Component({
    selector: 'app-form-access',
    templateUrl: './form-access.component.html',
    styleUrls: ['./form-access.component.css']
})

export class FormAccessComponent implements OnInit, OnDestroy {
    @Input() formId: string;
    // form: Form;
    form;
    permissions = [];
    users;
    selectedUsers = [];
    filteredUsers;
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
        this.http.get(`/forms/${this.formId}/permissions`)
            .subscribe(
                (res: FormResponse) => {
                    this.form = res.data[0];
                    this.permissions = this.form.permissions ? this.form.permissions : [];
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

    selectUsers(user) {
        if (this.permissions.find(item => item.user_id === user.id)) {
            this.error = "User " + user.username + " already exists in the list";
            return;
        }
        if (this.selectedUsers.find(item => item.id == user.id)) {
            this.error = "User " + user.username + " already selected";
            return;
        }
        this.selectedUsers.push(user);
    }

    addUsersToList() {
        this.selectedUsers.map(user => {
            this.permissions.push({
                'user_id': user.id,
                'entity': 'form',
                'entity_id': this.form.id,
                'view': 0,
                'edit': 0,
                'delete': 0,
                'access': 0,
            });
        });
        this.resetSelectedUsers();
    }

    setPermission($event, user_id, permissionType) {
        let permission = this.permissions.find(item => item.user_id === user_id);
        permission[permissionType] = $event ? 1 : 0;
    }

    saveFormPermissions(): void {
        this.http.post('/permissions', {permissions: this.permissions}).subscribe(
            (res) => {}
        )
    }

    deleteUserPermissions(permissions) {
        if (!permissions.id) {
            this.permissions = this.permissions.filter((item) => item.user_id != permissions.user_id);
            return;
        }
        this.http.delete(`/permissions/${permissions.id}`).subscribe(
            () => {
                this.permissions = this.permissions.filter((item) => item.user_id != permissions.user_id);
            }
        )
    }

    ngOnDestroy() {
    }

    assignCopy() {
        this.filteredUsers = Object.assign([], this.users.data);
    }

    filterUsers(value) {
        if (!value) {
            this.assignCopy();
        }
        this.filteredUsers = Object.assign([], this.users.data).filter(
            item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }

    resetSelectedUsers() {
        this.selectedUsers = [];
    }

    getUsername(userId) {
        return this.users.data.find(item => item.id === userId).username;
    }

    getRole(userId) {
        return this.users.data.find(item => item.id === userId).role.role_name;
    }
}
