import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  _iconClass: string;
  @Input() name: string;
  @Input() value: any;
  @Input() style ? = 'purple';
  @Input() set icon(icon: string) {
    this._iconClass = icon;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
