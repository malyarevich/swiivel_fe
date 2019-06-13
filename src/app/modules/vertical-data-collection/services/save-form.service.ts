import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveFormService {
  onSaveForm: EventEmitter<boolean> = new EventEmitter();

  saveForm() {
    this.onSaveForm.emit();
  }
}
