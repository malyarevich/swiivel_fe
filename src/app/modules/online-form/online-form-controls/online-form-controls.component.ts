import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "sw-online-form-controls",
  templateUrl: "./online-form-controls.component.html",
  styleUrls: ["./online-form-controls.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormControlsComponent implements OnInit {
  @Output() previousStepEmitter = new EventEmitter<any>();
  @Output() saveAndNextStepEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  goPreviousStep() {
    this.previousStepEmitter.emit();
  }

  saveAndGoNext() {
    this.saveAndNextStepEmitter.emit();
  }
}
