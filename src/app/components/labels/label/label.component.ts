import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'sw-label',
  templateUrl: './label.component.html',
  styleUrls: ['label.component.scss']
})

export class LabelComponent implements OnInit {
  @Input() id = null;
  @Output() deleteLabel: EventEmitter<any> = new EventEmitter<any>();

  deleted = false;

  constructor() {}

  ngOnInit(): void {
    this.deleted = this.deleteLabel.observers.length > 0;
  }

  public delete(): void {
    this.deleteLabel.emit();
  }

}
