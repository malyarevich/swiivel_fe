import { Highlightable } from '@angular/cdk/a11y';
import { Directive, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { isString } from 'lodash';
@Directive({
  selector: '[swSelectOption]'
})
export class SelectOptionDirective implements Highlightable  {
    @Input() option;
    disabled?: boolean;
    private _isActive = false;

    @HostBinding('class.active') get isActive() {
      return this._isActive;
    }

    setActiveStyles() {
      this.element.nativeElement.scrollIntoView(true);
      this._isActive = true;
    }

    setInactiveStyles() {
      this._isActive = false;
    }

    focus() {
    }
    getLabel() {
      if (isString(this.option)) {
        return this.option;
      } else {
        return this.option.title;
      }
    }
    getValue() {
      if (isString(this.option)) {
        return this.option;
      } else {
        return this.option.value;
      }
    }

  constructor(public element: ElementRef) {
  }

}
