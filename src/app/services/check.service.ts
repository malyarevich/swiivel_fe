import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CheckService {
  isEmptyObject(obj: any): boolean {
    if (Array.isArray(obj)) {
      return true;
    }

    return !Object.keys(obj).length;
  }
}
