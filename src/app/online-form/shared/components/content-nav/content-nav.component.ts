import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sw-content-nav',
  templateUrl: './content-nav.component.html',
  styleUrls: ['./content-nav.component.scss']
})
export class ContentNavComponent implements OnInit {
  @Input() formNavigationState: any;
  @Input() currentPosition: any;

  @Output() onGoToTab: EventEmitter<number> = new EventEmitter;

  onSetActiveIdSubscription: Subscription;
  activeId: string;

  constructor() {}

  ngOnInit() {}

  getTabs(): any[] {
    return this.formNavigationState.find(state => {
      return state.page === this.currentPosition.page;
    }).tabs;
  }

  isActive(id): boolean {
    return this.currentPosition.tab === id;
  }

  setActiveId(id) {
    this.onGoToTab.emit(id);
  }
}
