import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserLoggedState} from "../../modules/user-logged/store/user-logged.reducer";
import {map} from "rxjs/operators";
import {UserLogged} from "../../modules/user-logged/store/user-logged.model";
import {Permissions} from "./permissions.model";
import {HttpClient} from "@angular/common/http";

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


    hasAccess(entityType: string, entityId: string | number, permission: string) {
        // if (entityId === '5c6d15d78ffb0805c22e5000') {
        //     return false;
        // }
        // console.log(this.userLogged);
        if(this.userLogged) return true;
    }

    savePermissions(permissions: Permissions[]) {
        return this.http.post('/permissions', {permissions: permissions})
    }

    deletePermissions(id) {
        return this.http.delete(`/permissions/${id}`)
    }
}
