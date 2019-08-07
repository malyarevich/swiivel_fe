import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-statistic',
  templateUrl: './form-statistic.component.html',
  styleUrls: ['./form-statistic.component.scss']
})
export class FormStatisticComponent implements OnInit {
  public isShowWidgets: boolean = false;
  public labelHideWidget: string = "Hide dashboard";
  public labelShowWidget: string = "View dashboard";

  constructor() { }

  ngOnInit() {
  }

  toggleWidgets(): void {
    this.isShowWidgets = !this.isShowWidgets;
  }
  
}
