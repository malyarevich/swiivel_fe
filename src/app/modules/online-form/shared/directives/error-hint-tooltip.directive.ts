import {
  ConnectedPosition,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { ErrorsListTooltipComponent } from '../../errors-list/errors-list-tooltip.component';
import { ISectionError } from '../../utils/generate-errors.service';

@Directive({
  selector: '[error-hint]'
})

export class ErrorHintTooltipDirective implements OnInit {
  @Input() errorsList: object;
  @Input() fieldNameList: object;
  @Input() connectedPosition: ConnectedPosition[] = [{
    originX : 'center',
    originY : 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  }];

  private overlayRef: OverlayRef;

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.connectedPosition);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    if (!this.overlayRef.hasAttached()) {
      const compPortal = new ComponentPortal(ErrorsListTooltipComponent);
      const tooltipRef = this.overlayRef.attach(compPortal);

      tooltipRef.instance.errorsList = this.errorsList;
      tooltipRef.instance.fieldNameList = this.fieldNameList;
      return tooltipRef;
    }
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}
}
