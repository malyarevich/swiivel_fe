import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-online-form-wrapper",
  templateUrl: "./online-form-wrapper.component.html",
  styleUrls: ["./online-form-wrapper.component.scss"]
})
export class OnlineFormWrapperComponent implements OnInit {
  isViewMode: boolean = true;
  formId$: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initRoute();
    // debugger;
  }

  initRoute() {
    if (this.route.pathFromRoot.length > 0) {
      this.route.pathFromRoot[1].url.subscribe(urlPath => {
        if (urlPath.length > 0) {
          const url = urlPath[0].path;
        }
      });
    }

    this.formId$.next(this.route.snapshot.paramMap.get("mongo_id"));
  }
}
