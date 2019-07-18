import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VConstructorDraftService {
  private draftForm = new Map<string, object>();

  public getDraftForm = (id: string): object => {
    if (this.draftForm.has(id)) {
      return this.draftForm.get(id);
    }
  };

  public setDraftForm = (id: string, newObject: object): void => {
    this.draftForm.set(id, newObject);
  };

  public deleteDraftForm = (id: string): void => {
    this.draftForm.delete(id);
  };

}
