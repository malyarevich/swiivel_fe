import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFieldContent]'
})
export class FieldContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}