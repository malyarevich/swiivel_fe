import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class FormUtils {
constructor()
{}

  getFormIdFromRoute(url){
  return   url.subscribe((urlPath) => {
     return urlPath[urlPath.length - 1].path;
     });

  }

}
