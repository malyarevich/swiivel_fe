import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'sw-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() processPercent: number;

  radius = 8;
  cx = 12;
  cy = 12;

  // const circumference = 2 * Math.PI * this.radius;
  circumference = 50.2654824574;
  dashoffset: number;
  constructor() {}

  ngOnInit() {
    this.setStrokeDashOffset();
  }

  ngOnChanges(): void {
    this.setStrokeDashOffset();
  }

  setStrokeDashOffset() {
    this.dashoffset = this.circumference - ((this.processPercent * this.circumference) / 100);
  }

  isCompleted(): boolean {
    return (this.processPercent >= 100);
  }

  isBegan(): boolean {
    return (this.processPercent >= 0);
  }
}
