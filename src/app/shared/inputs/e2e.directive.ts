import { AfterViewInit, Directive, ElementRef, Input, Optional, Renderer2, Self } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

function getControlName(c: AbstractControl): string | null {
   if (!c.parent) { return null; }
   const formGroup = c.parent.controls;
   return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
 }

function getControlPath(c: AbstractControl, path: string): string | null {
   path = getControlName(c) + path;

   if (c.parent && getControlName(c.parent)) {
     path = '.' + path;
     return getControlPath(c.parent, path);
   } else {
     return path;
   }
 }

@Directive({
  selector: '[swId],[routerLink],[formControl],[formControlName]'
})
export class ComponentIdDirective implements AfterViewInit {
  constructor(public element: ElementRef, @Optional() @Self() public ngControl: NgControl, private _renderer: Renderer2) {
  }
  @Input('swId') set id(val: string) {
    if (val) {
      this._renderer.setAttribute(this.element.nativeElement, 'data-e2e-id', val);
    }
  }
  _id: string;
  ngAfterViewInit(): void {
    if (this.ngControl) {
      this._renderer.setAttribute(this.element.nativeElement, 'data-e2e-input', getControlPath(this.ngControl.control, ''));
    } else {
      const link = this.element.nativeElement.getAttribute('href');
      if (link) {
        this._renderer.setAttribute(this.element.nativeElement, 'data-e2e-link', link);
      }
    }
  }

}
