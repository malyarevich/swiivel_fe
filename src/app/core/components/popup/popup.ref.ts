import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { PopupParams } from '@core/popup.service';
import { Subject } from 'rxjs';

export interface PopupCloseEvent<T = any> {
  type: 'backdropClick' | 'close' | 'escKey';
  data: T;
}

export type PopupContent = TemplateRef<any> | Type<any> | string;

export class PopupRef<T = any> {
  private afterClosed = new Subject<PopupCloseEvent<T>>();
  private onKeyDown = new Subject<KeyboardEvent>();
  afterClosed$ = this.afterClosed.asObservable();
  onKeyDown$ = this.onKeyDown.asObservable();

  constructor(
    public overlay: OverlayRef,
    public content: PopupContent,
    public data: T
  ) {
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', null);
    });
    overlay.keydownEvents().subscribe((event: KeyboardEvent) => {
      this.onKeyDown.next(event);
      if (event.key === 'ESCAPE') {
        this._close('escKey', null);
      }
    });

  }

  close(data?: T) {
    this._close('close', data);
  }

  private _close(type: PopupCloseEvent['type'], data?: T) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}
