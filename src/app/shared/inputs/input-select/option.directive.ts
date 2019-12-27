import { Highlightable } from '@angular/cdk/a11y';
import { Directive, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[swSelectOption]'
})
export class OptionDirective implements Highlightable  {
    @Input() option:any;
    @Input() displayWith: (option: any) => string = (option: any) => {
      console.log(option)
      return option.title || option;
    };
    @Input() disabled: boolean = false;
    public isActive = false;

    @HostBinding('class.active') get isactive() {
      return this.active;
    }
    @HostBinding('class.disabled') get enabled() {
      return !this.disabled;
    }

    get active() {
      return !!this.isActive;
    }

    setActiveStyles() {
      this.element.nativeElement.scrollIntoView(true);
      this.isActive = true;
    }

    setInactiveStyles() {
      this.isActive = false;
    }

    focus() {
      if (!this.disabled) {
        this.element.nativeElement.scrollIntoView(true);
        this.isActive = true;
      }
    }
    get title() {
      return this.displayWith(this.option);
    }
    get value() {
      return this.option;
    }

  constructor(public element: ElementRef) {
  }

}
