import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-form-statistic',
  templateUrl: './v-form-statistic.component.html',
  styleUrls: ['./v-form-statistic.component.scss']
})
export class VFormStatisticComponent implements OnInit {
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
