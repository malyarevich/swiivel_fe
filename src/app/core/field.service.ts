import { Injectable } from '@angular/core';
import { TreeDataSource } from '@app/form/create/tree.datasource';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  _sidebar = new TreeDataSource('Fields');
  // private _sidebar = new BehaviorSubject<any>(null);

  constructor() { }

  set sidebar(sidebar: TreeDataSource) {
    this._sidebar = sidebar;
  }


  get sidebar() {
    return this._sidebar;
  }

}
