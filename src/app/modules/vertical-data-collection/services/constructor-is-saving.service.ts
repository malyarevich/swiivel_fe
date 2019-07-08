import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConstructorIsSavingService {
  private isSaving: boolean;
  onIsSaving: EventEmitter<boolean> = new EventEmitter();

  setIsSaving(value: boolean) {
    if (this.isSaving !== value) {
      this.isSaving = value;
      this.onIsSaving.emit(this.isSaving);
    }
  }
}
