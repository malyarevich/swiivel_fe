import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'sw-online-form-nav',
  templateUrl: './online-form-nav.component.html',
  styleUrls: ['./online-form-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormNavComponent implements OnInit {
  @Input() formName: string;
  @Input() isMenuShow: boolean = true;
  @Output() actionEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onAction(type: string) {
    this.actionEmitter.emit(type);
  }
}
