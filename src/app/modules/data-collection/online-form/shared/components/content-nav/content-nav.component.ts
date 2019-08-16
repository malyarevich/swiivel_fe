import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from "@angular/core";
import { OnlineFormNavigationService } from "../../../services/online-form-navigation.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-content-nav",
  templateUrl: "./content-nav.component.html",
  styleUrls: ["./content-nav.component.scss"]
})
export class ContentNavComponent implements OnInit, OnDestroy {
  @Input() content: any[];
  @Input() parentMenuItemId: string;

  onSetActiveIdSubscription: Subscription;
  activeId: string;

  constructor(
    private onlineFormNavigationService: OnlineFormNavigationService
  ) {}

  ngOnInit() {
    this.onlineFormNavigationService.setSectionItemOfMenuItems(
      this.parentMenuItemId,
      this.content
    );
    // if (this.content.length) {
    //   this.setActiveId(this.content[0]._id);
    // }
    this.onSetActiveIdSubscription = this.onlineFormNavigationService.onActiveSectionItem.subscribe(
      (activeId: string) => {
        this.activeId = activeId;
      }
    );
  }

  setActiveId(id) {
    this.activeId = id;
    this.onlineFormNavigationService.setActiveSectionItem(this.activeId);
  }

  ngOnDestroy(): void {
    if (this.onSetActiveIdSubscription) {
      this.onSetActiveIdSubscription.unsubscribe();
    }
  }
}
