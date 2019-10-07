import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-main-spinner',
  templateUrl: './main-spinner.component.html',
  styleUrls: ['./main-spinner.component.scss']
})
export class MainSpinnerComponent implements OnInit {
  @Input() spinnerText: string = "";

  constructor() { }

  ngOnInit() {
  }

}
