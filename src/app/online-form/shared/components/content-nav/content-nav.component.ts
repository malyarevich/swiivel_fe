import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import {
  GenerateErrorsService,
  ISectionError
} from "@app/online-form/utils/generate-errors.service";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "sw-content-nav",
  templateUrl: "./content-nav.component.html",
  styleUrls: ["./content-nav.component.scss"]
})
export class ContentNavComponent implements OnInit, OnDestroy {
  @Input() formNavigationState: any;
  @Input() currentPosition: { page: string; tab: number };
  @Input() formErrors: object;
  @Input() fieldNameList: object;

  @Output() onGoToTab: EventEmitter<number> = new EventEmitter();

  onSetActiveIdSubscription: Subscription;
  activeId: string;
  sectionErrors: ISectionError[];
  private destroyed$ = new Subject();

  constructor(private generateErrorService: GenerateErrorsService) {}

  ngOnInit() {
    // this.generateErrorService.errorAsObservable$.pipe(
    //   takeUntil(this.destroyed$)
    // ).subscribe((errors) => {
    //   this.sectionErrors = errors;
    // });
  }

  getTabs(): any[] {
    return this.formNavigationState.find(state => {
      return state.page === this.currentPosition.page;
    }).tabs;
  }

  getErrorBySectionId(id, targetNode = this.formErrors) {
    let errors = {};
    if (
      !(
        Object.keys(targetNode).length === 0 &&
        targetNode.constructor === Object
      )
    ) {
      if (
        !(
          Object.keys(targetNode[id]).length === 0 &&
          targetNode[id].constructor === Object
        )
      ) {
        errors = targetNode[id];
      } else {
        Object.keys(targetNode[id]).forEach(key => {
          this.getErrorBySectionId(key, targetNode[id]);
        });
      }
    }
    return errors;
  }

  isActive(id): boolean {
    return this.currentPosition.tab === id;
  }

  setActiveId(id) {
    this.onGoToTab.emit(id);
  }

  hasErrors(id) {
    return typeof(this.formErrors[id]) !== 'undefined';
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
