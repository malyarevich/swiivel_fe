import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-invites-progress-bar',
  templateUrl: './invites-progress-bar.component.html',
  styleUrls: ['./invites-progress-bar.component.css']
})
export class InvitesProgressBarComponent implements OnInit {
  @Input() total: number = 0;
  @Input() value: number = 0;
  @Input() backgroundColor: string = '';

  get progressWidth(): number {
    return;
  }

  constructor() { }

  ngOnInit() {
  }

}
