import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-input-radio-toggle',
  templateUrl: './input-radio-toggle.component.html',
  styleUrls: ['./input-radio-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputRadioToggleComponent {
  @Input() optionsArray: string[];
  @Input() chosenOption: number;
  @Output() changeOption: EventEmitter<any> = new EventEmitter();

  public onInputChange(e: any) {
    if (e && e.target && e.target.defaultValue) {
      this.changeOption.emit(e.target.defaultValue);
    }
  }

}
