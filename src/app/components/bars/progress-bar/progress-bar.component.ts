import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent {
  @Input() value: number = 50;

  color = 'primary';
  mode = 'determinate';

  constructor() { }
}
