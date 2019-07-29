import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tool-tip-question',
  templateUrl: './tool-tip-question.component.html',
  styleUrls: ['./tool-tip-question.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolTipQuestionComponent implements OnInit {
  @Input() placement: string = 'right-top';

  constructor() {
  }

  ngOnInit() {
  }

}
