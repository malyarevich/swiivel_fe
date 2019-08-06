import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from "@angular/core";
import { ICommand } from '../../../../models/data-collection/form-constructor/form-builder/component.model';

/** Extended field for any input even as HTML
 * all information save as inner HTML 
 * for futures loading
 * Example:
<extended-field
  [content]="someContent"
  (changeContent)="onChangeSomeContent($event)"
></extended-field>
  
 * content: string
 * changeContent($event): string
 * fieldTitle: string
 */
@Component({
  selector: "extended-field",
  templateUrl: "./extended-field.component.html",
  styleUrls: ["./extended-field.component.scss"]
})
export class ExtendedFieldComponent implements OnInit {
  @Input() fieldTitle: string;
  @Input() content: string;
  @Output() changeContent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("content", { static: true }) contentField: ElementRef;

  constructor() {}

  ngOnInit() {
    this.initContent();
  }

  initContent(): void {
    this.contentField.nativeElement.innerHTML = this.content ? this.content : '';
  }

  onSetCommand(command: ICommand) {
    this.setCommand(command.name, command.showUi, command.value);
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    let success = document.execCommand(name, showUi, value);
  }

  setContent(innerHTML: string): void {
    this.changeContent.emit(innerHTML);
  }

  editContent(): void {
    this.contentField.nativeElement.focus();
  }
}
