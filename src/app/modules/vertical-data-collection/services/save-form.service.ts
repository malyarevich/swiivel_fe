import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SaveFormService {
  savingStatus = false;
  onSaveForm: EventEmitter<boolean> = new EventEmitter();
  onGetSaveStatus: EventEmitter<boolean> = new EventEmitter();

  saveForm() {
    this.onSaveForm.emit();
  }

  getSavingStatus() {
    return this.savingStatus;
  }

  setSavingStatus(status: boolean) {
    this.savingStatus = status;
  }
}
