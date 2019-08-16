import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PublishSettingsService {
  onChangeActiveMenuItem: EventEmitter<string> = new EventEmitter();

  constructor() {}

  changeActiveMenuItem(activeMenuItem: string) {
    this.onChangeActiveMenuItem.emit(activeMenuItem);
  }
  
}


