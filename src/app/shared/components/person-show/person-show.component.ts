import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-show',
  templateUrl: './person-show.component.html',
  styleUrls: ['./person-show.component.scss']
})
export class PersonShowComponent implements OnInit {
  @Input() avatar: string;
  @Input() name: string;
  @Input() showAvatar = true;

  constructor() { }

  ngOnInit() {
  }

}
