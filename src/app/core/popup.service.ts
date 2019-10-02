import { ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ElementRef, Injectable, Injector } from '@angular/core';
import { PopupComponent } from '@core/components/popup/popup.component';
import { PopupContent, PopupRef } from '@core/components/popup/popup.ref';

export interface PopupParams<T> {
  width?: string | number;
  height?: string | number;
  panelClass?: string;
  origin: HTMLElement | ElementRef;
  content: PopupContent;
  data?: T;
  location?: string;
}

@Injectable({
  providedIn: 'root'
})

export class Popup {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  open<T>({ origin, content, data, width, height, panelClass, location }: PopupParams<T>): PopupRef<T> {
    const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height, panelClass, location }));
    const popupRef = new PopupRef<T>(overlayRef, content, data);
    const injector = this.createInjector(popupRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopupComponent, null, injector));
    return popupRef;
  }

  private getOverlayConfig({ origin, width, height, panelClass, location }): OverlayConfig {
    let ss, bc;
    if (panelClass === 'fullpage-panel') {
      ss = this.overlay.scrollStrategies.block();
      bc = 'fullpage-backdrop';
    } else if (panelClass === 'centered-panel') {
      ss = this.overlay.scrollStrategies.block();
      bc = ['fullpage-backdrop', 'transparent-backdrop'];
    } else if (panelClass === 'widget-dropdown') {
      ss = this.overlay.scrollStrategies.reposition();
      bc = 'hide-backdrop';
    } else {
      ss = this.overlay.scrollStrategies.reposition();
      bc = 'popup-backdrop';
    }
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: bc,
      panelClass,
      positionStrategy: this.getOverlayPosition(origin, panelClass, location),
      scrollStrategy: ss
    });
  }

  private getOverlayPosition(origin: HTMLElement, panelClass, location): PositionStrategy {
    if (panelClass === 'fullpage-panel' || panelClass === 'centered-panel') {
      const positionStrategy = this.overlay.position().global()
        .centerHorizontally().centerVertically();
      return positionStrategy;
    } else {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(origin)
        .withPositions(this.getPositions(location))
        .withFlexibleDimensions()
        .withViewportMargin(5)
        .withPush(false);
      return positionStrategy;
    }
  }

  createInjector(popupRef: PopupRef, injector: Injector) {
    const tokens = new WeakMap([[PopupRef, popupRef]]);
    return new PortalInjector(injector, tokens);
  }

  private getPositions(location): ConnectionPositionPair[] {
    let result: ConnectionPositionPair[] = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    }];
    switch (location) {
      case 'start':
        result = [{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        }];
        break;
      case 'center':
        result = [{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        }];
        break;
      case 'center-down-left':
        result = [{
          originX: 'center',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'top',
        }];
        break;
    }
    return result;
  }

}
