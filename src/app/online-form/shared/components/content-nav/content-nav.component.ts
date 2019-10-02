import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  GenerateErrorsService,
  ISectionError
} from '@app/online-form/utils/generate-errors.service';
import {
  Subject,
  Subscription
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-content-nav',
  templateUrl: './content-nav.component.html',
  styleUrls: ['./content-nav.component.scss']
})
export class ContentNavComponent implements OnInit, OnDestroy {
  @Input() formNavigationState: any;
  @Input() currentPosition: { page: string; tab: number };

  @Output() onGoToTab: EventEmitter<number> = new EventEmitter();

  onSetActiveIdSubscription: Subscription;
  activeId: string;
  sectionErrors: ISectionError[];
  private destroyed$ = new Subject();

  constructor(
    private generateErrorService: GenerateErrorsService
  ) {}

  ngOnInit() {
    this.generateErrorService.errorAsObservable$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((errors) => {
      this.sectionErrors = errors;
    });
  }

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

  get errors() {
    return this.sectionErrors.length > 0;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
