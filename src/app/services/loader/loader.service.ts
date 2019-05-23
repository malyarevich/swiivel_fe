import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoaderService {

  private _loader: BehaviorSubject<boolean> = <BehaviorSubject<boolean>> new BehaviorSubject(false);

  get loader() {
    return this._loader.asObservable();
  }

  constructor() {
  }

  startLoader() {
    this._loader.next(true);
  }

  stopLoader() {
    this._loader.next(false);
  }
}
