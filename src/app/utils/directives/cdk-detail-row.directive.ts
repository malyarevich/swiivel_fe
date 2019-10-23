import {Directive, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[cdkDetailRow]'
})
export class CdkDetailRowDirective {
  private row: any;
  private tRef: TemplateRef<any>;
  private opened: boolean;

  @HostBinding('class.expanded')
  get expanded(): boolean {
    return this.opened;
  }

  @Input()
  set cdkDetailRow(value: any) {
    if (value !== this.row) {
      this.row = value;
    }
  }

  @Input('cdkDetailRowTpl')
  set template(value: TemplateRef<any>) {
    if (value !== this.tRef) {
      this.tRef = value;
    }
  }

  @Input('cdkDetailExpand')
  set expand(shouldExpand: boolean) {
    if (shouldExpand && !this.opened) {
        this.render();
    } else if (!shouldExpand && this.opened) {
        this.vcRef.clear();
    }
    this.opened = this.vcRef.length > 0;
  }

  constructor(public vcRef: ViewContainerRef) { }

  private render(): void {
    this.vcRef.clear();
    if (this.tRef && this.row) {
      this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
    }
  }
}
