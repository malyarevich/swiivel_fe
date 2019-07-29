import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})

export class DragDropDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $event.srcElement.classList.add('dragover');
  }

  @HostListener('dragleave', ['$event']) onDragLeave($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $event.srcElement.classList.remove('dragover');
  }

  @HostListener('drop', ['$event']) onDrop($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const files = $event.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files[0]);
    }
  }

}
