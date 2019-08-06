import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Permissions} from '../../../../services/permission/permissions.model';
import {User} from '../../../login/rest';
import {PermissionService} from '../../../../services/permission/permission.service';
import {UserService} from '../../../../services/user/user.service';
import {VFormService} from '../../services/v-form.service';
import {FormSql} from '../../../../models/vertical-data-collection/form.model';


@Component({
    selector: 'app-v-form-access',
    templateUrl: './v-form-access.component.html',
    styleUrls: ['./v-form-access.component.css']
})

export class VFormAccessComponent implements OnInit, OnDestroy {
    @Input() formId: string;
    form: FormSql;
    permissions: Permissions[] = [];
    users;
    selectedUsers = [];
    filteredUsers;
    showInvite: boolean;
    error: string;

    constructor(
        private route: ActivatedRoute,
        private vFormService: VFormService,
        private permissionService: PermissionService,
        private userService: UserService,
    ) {
    }

    ngOnInit() {
        this.getForm();
        this.getUsers();
    }

    getForm(): void {
        this.vFormService.getFormWithPermissions(this.formId)
            .subscribe(
                (res) => {
                    this.form = res;
                    this.permissions = this.form.permissions ? this.form.permissions : [];
                }
            );
    }

    getUsers(): void {
        this.userService.getAllUsers()
            .subscribe(
                (res) => {
                    this.users = res;
                }
            );
    }

    selectUsers(user) {
        if (this.permissions.find(item => item.user_id === user.id)) {
            this.error = 'User ' + user.username + ' already exists in the list';
            return;
        }
        if (this.selectedUsers.find(item => item.id == user.id)) {
            this.error = 'User ' + user.username + ' already selected';
            return;
        }
        this.selectedUsers.push(user);
    }

    addUsersToList() {
        this.selectedUsers.map(user => {
            this.permissions.push({
                user_id: user.id,
                entity: 'form',
                entity_id: this.form.id,
                view: 0,
                edit: 0,
                delete: 0,
                access: 0,
            });
        });
        this.resetSelectedUsers();
    }

    setPermission($event, user_id, permissionType) {
        const permission = this.permissions.find(item => item.user_id === user_id);
        permission[permissionType] = $event ? 1 : 0;
    }

    saveFormPermissions(): void {
        this.permissionService.savePermissions(this.permissions).subscribe(
            (res) => {
            }
        );
    }

    deleteUserPermissions(permissions) {
        if (!permissions.id) {
            this.permissions = this.permissions.filter((item) => item.user_id != permissions.user_id);
            return;
        }
        this.permissionService.deletePermissions(permissions.id).subscribe(
            () => {
                this.permissions = this.permissions.filter((item) => item.user_id != permissions.user_id);
            }
        );
    }

    ngOnDestroy() {
    }

    assignCopy() {
        this.filteredUsers = Object.assign([], this.users);
    }

    filterUsers(value) {
        if (!value) {
            this.assignCopy();
        }
        this.filteredUsers = Object.assign([], this.users).filter(
            item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
    }

    resetSelectedUsers() {
        this.selectedUsers = [];
    }

    getUsername(userId) {
        return this.users.find(item => item.id === userId).username;
    }

    getRole(userId) {
        return this.users.find(item => item.id === userId).role.role_name;
    }
}
