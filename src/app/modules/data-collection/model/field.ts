import { Type } from '@angular/core';

export class Field {
  constructor(
              public name: string,
              public options: any,
              public component?: Type<any>,
              public constraints?: any,
              public validators?: any,
              public mapped?: any,
              public type?: number,
              public _id?: string ) {}
}


