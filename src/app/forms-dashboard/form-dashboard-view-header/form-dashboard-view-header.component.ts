import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sw-form-dashboard-view-header',
  templateUrl: './form-dashboard-view-header.component.html',
  styleUrls: ['./form-dashboard-vew-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDashboardViewHeaderComponent implements OnInit {
  @Input() text: string;
  @Input() defaultIndexOption = 0;
  @Input() options: string[] = [];
  @Output() changeOption: EventEmitter<any> = new EventEmitter();

  public option = '';

  ngOnInit(): void {
    this.options = this.options.map((item) => item.toUpperCase());
    this.option = this.options[this.defaultIndexOption];
  }

  changePeriod(e: any): void {
    this.option = this.options[e];
    this.changeOption.emit(e);
  }
}
