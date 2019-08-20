import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bordered-label',
  templateUrl: './bordered-label.component.html',
  styleUrls: ['./bordered-label.component.scss']
})
export class BorderedLabelComponent implements OnInit {
  @Input() label: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }
}
