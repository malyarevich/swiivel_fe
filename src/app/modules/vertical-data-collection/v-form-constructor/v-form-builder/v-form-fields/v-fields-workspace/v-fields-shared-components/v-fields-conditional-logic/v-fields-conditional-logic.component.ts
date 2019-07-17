import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-fields-conditional-logic',
  templateUrl: './v-fields-conditional-logic.component.html',
  styleUrls: ['./v-fields-conditional-logic.component.css']
})
export class VFieldsConditionalLogicComponent implements OnInit {

  conditLogic = ['Hide', 'Visible'];

  constructor() { }

  ngOnInit() {
  }

}
