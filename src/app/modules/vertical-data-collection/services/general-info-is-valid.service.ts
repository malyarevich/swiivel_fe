import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoIsValidService {

  private isValid:boolean = false;
  onIsValid: EventEmitter<boolean> = new EventEmitter();

  setIsValid(value: boolean) {
    this.isValid = value;
    this.onIsValid.emit(this.isValid);
  }
}
