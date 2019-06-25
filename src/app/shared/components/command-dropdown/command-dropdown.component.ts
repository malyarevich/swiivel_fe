import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ICommand } from "../../../models/vertical-data-collection/v-form-constructor/v-form-builder/component.model";

@Component({
  selector: "app-command-dropdown",
  templateUrl: "./command-dropdown.component.html",
  styleUrls: ["./command-dropdown.component.scss"]
})
export class CommandDropdownComponent implements OnInit {
  @Input() any: any;
  @Output() actionEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSetCommandEmitter: EventEmitter<ICommand> = new EventEmitter<
    ICommand
  >();

  constructor() {}

  ngOnInit() {}

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    this.onSetCommandEmitter.emit({ name, showUi, value });
  }
  onSetSearch(event) {
    this.actionEmitter.emit(event);
  }
}
