import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserLoggedState} from "../../modules/user-logged/store/user-logged.reducer";
import {map} from "rxjs/operators";
import {UserLogged} from "../../modules/user-logged/store/user-logged.model";
import {Permissions, UserLoggedPermissions} from "./permissions.model";
import {HttpClient} from "@angular/common/http";
import {isArray} from "util";

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    userLogged: UserLogged;

    constructor(
        private readonly http: HttpClient,
        private  userLoggedStore$: Store<UserLoggedState>
    ) {
        this.userLoggedStore$.select('user-logged')
            .pipe(map(item => item.user))
            .subscribe((res) => {
                    this.userLogged = res;
                }
            );
    }


    hasAccess(permission: string, entityType: string, entityId: string | number) {
        //TODO delete below
        if(this.userLogged.username == 'admin') return true;
        //
        // debugger;
        if (isArray(this.userLogged.permissions) && !this.userLogged.permissions.length) return false;

        let permissions: UserLoggedPermissions = this.getUserLoggedPermissions(entityType, entityId);
        if (!permissions) return false;

        if (permissions.full || permissions[permission]) return true;
        return false;
    }

    getUserLoggedPermissions(entityType, entityId) {
        return this.userLogged.permissions[entityType][entityId];
    }

    savePermissions(permissions: Permissions[]) {
        return this.http.post('/permissions', {permissions: permissions})
    }

    deletePermissions(id) {
        return this.http.delete(`/permissions/${id}`)
    }
}
