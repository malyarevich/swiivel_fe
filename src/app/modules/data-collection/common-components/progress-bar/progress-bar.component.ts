import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() total: number = 0;
  @Input() value: number = 0;

  @Input() height: string = '0.8em';
  @Input() backgroundColor: string = '#F3F3F3';
  @Input() backgroundValue: string = '';
  @Input() showValue: boolean = true;

  get progressWidth(): number {
    return (this.value * 100)/this.total;
  }

  constructor() { }

  ngOnInit() {
  }

}
