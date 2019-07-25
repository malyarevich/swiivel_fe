import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-empty-line-field",
  templateUrl: "./empty-line-field.component.html",
  styleUrls: ["./empty-line-field.component.css"]
})
export class EmptyLineFieldComponent implements OnInit {
  // @Input() data: any;
  constructor() {}

  ngOnInit() {
    //  this.data.name='';
  }
}
