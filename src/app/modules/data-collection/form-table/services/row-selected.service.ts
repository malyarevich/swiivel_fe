import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {uniq} from 'lodash';

@Injectable()
export class RowSelectedService {

  private _selectedIndexes: BehaviorSubject<number[]> = new BehaviorSubject([]) as BehaviorSubject<number[]>;

  private indexes: number[] = [];

  get selectedIndexes() {
    return this._selectedIndexes.asObservable();
  }

  constructor() {
  }

  addSelectedIndexes(event, i) {
    if (event.shiftKey) {
      const lastIndex = this.indexes[this.indexes.length - 1];
      if (lastIndex < i) {
        for (let j = lastIndex + 1; j <= i; j++) {
          this.indexes.push(j);
        }
      }
      if (lastIndex > i) {
        for (let k = lastIndex - 1; k >= i; k--) {
          this.indexes.push(k);
        }
      }
      this.indexes = uniq(this.indexes);
    } else {
      const index = this.indexes.indexOf(i);
      if (index === -1) {
        this.indexes.push(i);
      } else {
        this.indexes.splice(index, 1);
      }
    }
    this._selectedIndexes.next(this.indexes);
  }

  removeSelectedIndexes() {
    this.indexes = [];
    this._selectedIndexes.next(this.indexes);
  }

}
