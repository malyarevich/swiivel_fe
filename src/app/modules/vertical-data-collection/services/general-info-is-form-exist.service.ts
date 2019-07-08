import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GeneralInfoIsFormExistService {
  private isExist: boolean;
  onIsExist: EventEmitter<boolean> = new EventEmitter();

  setIsExist(value: boolean) {
    this.isExist = value;
    this.onIsExist.emit(this.isExist);
  }
}
