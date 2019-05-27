import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-form-statistic',
  templateUrl: './v-form-statistic.component.html',
  styleUrls: ['./v-form-statistic.component.scss']
})
export class VFormStatisticComponent implements OnInit {
  private isShowWidgets: boolean = false;
  private labelHideWidget: string = "hide the widgets";
  private labelShowWidget: string = "view widgets";

  constructor() { }

  ngOnInit() {
  }

  toggleWidgets(): void {
    this.isShowWidgets = !this.isShowWidgets;
  }
  
}
