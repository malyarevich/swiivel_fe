import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoIsSavedService {

  private isSaved:boolean;
  onIsSaved: EventEmitter<boolean> = new EventEmitter();

  setIsSaved(value: boolean) {
    if (this.isSaved !== value) {
      this.isSaved = value;
      this.onIsSaved.emit(this.isSaved);
    }
  }
}
