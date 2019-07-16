import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VPublishSettingsAutomationService {
  onAddAutomationItem: EventEmitter<any> = new EventEmitter();
  onRemoveAutomationItem: EventEmitter<number> = new EventEmitter();
  onChangeAutomationItemName: EventEmitter<object> = new EventEmitter();
  onChangeAutomationItemType: EventEmitter<object> = new EventEmitter();
  onSwitchAutomationItemContent: EventEmitter<object> = new EventEmitter();

<<<<<<< HEAD
  isHideAutomationItemContent: boolean[] = [];

  addAutomationItem() {
    this.onAddAutomationItem.emit();
=======
  /** Get / Put / Post of the Automation
   * get: 
  {
  	"automation_list": [
      {
        "id":           "1"
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * put: 
  {
  	"automation_list": [
      {
        "id":           "1"
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * post:
  
  {
  	"automation_list": [
      {
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * 
   */

  sendAutomation(automation: IAutomation, id: string) {
    console.log( JSON.stringify(automation));
    if (id !== undefined) {
      return this.http
        .put(`/proxy/forms/publish-settings/${id}`, automation)
        .pipe(map(response => response));
    }
    console.log(automation);
    return this.http
      .post("/proxy/forms/publish-settings/", automation)
      .pipe(map(response => response));
  }

  getOneAutomation(id: string): Observable<any> {
    return this.http.get(`/proxy/forms/publish-settings/${id}`).pipe(
      map(
        (response): IAutomation => {
          return response["data"]["automation"];
        }
      )
    );
>>>>>>> b9b449a9643ad31e5f2e559aedc5f14dfb5ee1a8
  }

  removeAutomationItem(value: number) {
    this.onRemoveAutomationItem.emit(value);
  }

  changeAutomationItemName(value: object) {
    this.onChangeAutomationItemName.emit(value);
  }

  changeAutomationItemType(value: object) {
    this.onChangeAutomationItemType.emit(value);
  }
  
  switchAutomationItemContent(id: number) {
    this.isHideAutomationItemContent[id] = !this.isHideAutomationItemContent[id];
    const obj = {"id": id, "value": this.isHideAutomationItemContent[id]};
    this.onSwitchAutomationItemContent.emit(obj);
  }

}
