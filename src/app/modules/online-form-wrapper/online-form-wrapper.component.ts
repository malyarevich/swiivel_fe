import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-online-form-wrapper",
  templateUrl: "./online-form-wrapper.component.html",
  styleUrls: ["./online-form-wrapper.component.scss"]
})
export class OnlineFormWrapperComponent implements OnInit {
  isViewMode$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  formId$: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initRoute();
    // debugger;
  }

  initRoute() {
    // this.route.url.subscribe(urlPath => {
    //   if (urlPath.length > 0) {
    //     const url = urlPath[0].path;

    //     console.log('urlPath', urlPath);
    //     console.log('url', url);
    //   }
    // });
    // console.log(this.route);
    if (this.route.pathFromRoot.length > 0) {
      this.route.pathFromRoot[1].url.subscribe(urlPath => {
        if (urlPath.length > 0) {
          const url = urlPath[0].path;
          // console.log('url', url);
          if (url === "online-form") {
            // console.log('url', url);
            this.isViewMode$.next(false);
          }
        }
        this.formId$.next(this.route.snapshot.paramMap.get("mongo_id"));
      });
    }
  }
}
