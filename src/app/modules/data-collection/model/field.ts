import { Type } from '@angular/core';

export class FieldClass {
  constructor(
              public name: string,
              public options: any,
              public constraints?: any,
              public validators?: any,
              public mapped?: any,
              public type?: number,
              public _id?: string,
              public value?: string,
              public title?: string) {}
}


