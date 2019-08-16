import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Permissions, UserLoggedPermissions} from './permissions.model';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class PermissionService {

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<any>
  ) {
    // this.store.select(authStoreGetUser)
    //   .subscribe((res) => {
    //       this.userLogged = res;
    //     }
    //   );
  }


  // hasAccess(permission: string, entityType: string, entityId: string | number) {
  //   // TODO delete below
  //   if (this.userLogged.username == 'admin') {
  //     return true;
  //   }
  //   //
  //   if (!this.userLogged.permissions) {
  //     return false;
  //   }
  //   const permissions: UserLoggedPermissions = this.getUserLoggedPermissions(entityType, entityId);
  //   if (!permissions) {
  //     return false;
  //   }
  //   if (permissions.full || permissions[permission]) {
  //     return true;
  //   }
  //   return false;
  // }
  //
  // getUserLoggedPermissions(entityType, entityId) {
  //   return this.userLogged.permissions[entityType][entityId];
  // }
  //
  // savePermissions(permissions: Permissions[]) {
  //   return this.http.post('/permissions', {permissions});
  // }
  //
  // deletePermissions(id) {
  //   return this.http.delete(`/permissions/${id}`);
  // }
}
