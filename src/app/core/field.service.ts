import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeDataSource } from '@app/form-creator/tree.datasource';
import { FieldType } from '@shared/fields.enum';
import { flatMapDeep } from 'lodash';
import { BehaviorSubject } from 'rxjs';

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
