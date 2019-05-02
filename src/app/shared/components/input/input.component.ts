import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() type = 'text';
  @Input() value: any;
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
