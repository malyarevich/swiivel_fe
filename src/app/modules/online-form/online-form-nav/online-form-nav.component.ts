import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-online-form-nav',
  templateUrl: './online-form-nav.component.html',
  styleUrls: ['./online-form-nav.component.css']
})
export class OnlineFormNavComponent implements OnInit {
  @Input() formName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
