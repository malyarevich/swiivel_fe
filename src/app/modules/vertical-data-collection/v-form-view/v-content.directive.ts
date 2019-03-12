import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appContent]'
})
export class VContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
