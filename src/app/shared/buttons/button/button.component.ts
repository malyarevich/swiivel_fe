import { Component, Input, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { ButtonColorsEnum } from '../buttonColors.enum';
import { ButtonExpandEnum } from '../buttonExpand.enum';
import { ButtonSizeEnum } from '../buttonSize.enum';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  private _color: ButtonColorsEnum = ButtonColorsEnum.PURPLE;
  private _expand: ButtonExpandEnum = ButtonExpandEnum.DEFAULT;
  private _size: ButtonSizeEnum = ButtonSizeEnum.DEFAULT;
  private _isRound = false;

  @Input() get color() { return this._color; }
  set color(newColor: ButtonColorsEnum) {
    if (this.el) {
      // this.renderer.removeClass(this.el.nativeElement, this._color);
      // this._color = newColor;
      // this.renderer.addClass(this.el.nativeElement, this._color);
      console.warn(`@Input 'color' is deprecated. Use sw-button class instead`);
    }
  }
  @Input() get expand() { return this._expand; }
  set expand(value: ButtonExpandEnum) {
    if (this.el) {
      // this.renderer.removeClass(this.el.nativeElement, this._expand);
      // this._expand = value;
      // this.renderer.addClass(this.el.nativeElement, this._expand);
      console.warn(`@Input 'expand' is deprecated. Use sw-button class instead`);
    }
  }
  @Input() get size() { return this._size; }
  set size(value: ButtonSizeEnum) {
    if (this.el) {
      // this.renderer.removeClass(this.el.nativeElement, this._size);
      // this._size = value;
      // this.renderer.addClass(this.el.nativeElement, this._size);
      console.warn(`@Input 'size' is deprecated. Use sw-button class instead`);
    }
  }
  @Input() get isRound() { return this._isRound; }
  set isRound(value: boolean) {
    if (this.el) {
      // if (!!value) {
      //   this.renderer.addClass(this.el.nativeElement, 'round');
      // } else {
      //   this.renderer.removeClass(this.el.nativeElement, 'round');
      // }
      console.warn(`@Input 'isRound' is deprecated. Use sw-button class instead`);
    }
  }
  @Input() set fill(value: string) {
    if (this.el) {
      // if (value === 'outline') {
      //   this.renderer.addClass(this.el.nativeElement, 'outline-purpure');
      // } else {
      //   this.renderer.removeClass(this.el.nativeElement, 'outline-purpure');
      // }
      console.warn(`@Input 'fill' is deprecated. Use sw-button class instead`);
    }
  }
  @Input()
  set icon(icon) {
    if (typeof icon === 'string') {
      this._icon = ['fas', icon];
    } else {
      this._icon = icon;
    }
  }
  @Input() disabled = false;
  @Input() name: string;
  @Input() value: any;
  @Input() title: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled;
  }
  public colors = ButtonColorsEnum;
  public expands = ButtonExpandEnum;
  public sizes = ButtonSizeEnum;
  public _icon;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
