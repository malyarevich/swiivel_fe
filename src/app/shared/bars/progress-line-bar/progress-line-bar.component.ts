import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-progress-line-bar',
  templateUrl: './progress-line-bar.component.html',
  styleUrls: ['./progress-line-bar.component.scss']
})

export class ProgressLineBarComponent {
  @Input() value = 50;

  color = 'primary';
  mode = 'determinate';

  constructor() { }
}
