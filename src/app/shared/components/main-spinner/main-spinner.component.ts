import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "main-spinner",
  templateUrl: "./main-spinner.component.html",
  styleUrls: ["./main-spinner.component.scss"]
})
export class MainSpinnerComponent implements OnInit {
  @Input() label: string = "";

  constructor() {}

  ngOnInit() {}
}
