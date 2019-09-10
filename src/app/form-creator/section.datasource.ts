import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { has } from 'lodash';
import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout } from 'rxjs/operators';

export class PropertiesDataSource implements DataSource<any> {
  private sectionsSubject = new BehaviorSubject<any[]>([]);
  private loadingSections = new BehaviorSubject<boolean>(false);
  public count = 0;
  public sections;
  public sections$ = this.sectionsSubject.asObservable();
  public loadingSections$ = this.loadingSections.asObservable();
  public filters;


  constructor(private api: ApiService) { }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.sections$;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.sectionsSubject.complete();
    this.loadingSections.complete();
  }
  loadSections() {
   // this.filters = filters;
   this.loadingSections.next(true);
   // this.api.getProperties(county, withRelated, page, size, filters, sort).pipe(
   //   tap((prop) => {
   //     // console.log('tap prop', prop)
   //   }),
   //   // catchError(() => of([])),
   //   catchError(this.handleError),
   //   finalize(() => this.loadingProperties.next(false))
   // ).subscribe(result => {
   //   if (result.properties) {
   //     this.count = parseInt(result.properties[1][0].total, 10);
   //     this.county = result.county;
   //     this.sales = result.sales;
   //
   //     let properties = result.properties[0].map((property) => {
   //       property.brief = [];
   //       property.rooms = {bedrooms: 0, bathrooms: 0, hbaths: 0, sqft: 0};
   //       if (property.info.scouted) {
   //         if (has(property, 'info.structure.rooms')) {
   //           property.info.structure.rooms.forEach((unit) => {
   //             property.bedrooms += unit.beds;
   //             property.bathrooms += unit.bath;
   //             let hb = unit.hbath;
   //             if (unit.hbath % 1 === 0) hb = unit.hbath * 0.5;
   //             property.bathrooms += hb;
   //             return;
   //           });
   //         }
   //         if (property.bedrooms) property.brief.push(`${property.bedrooms} Bedrooms`);
   //         if (property.bathrooms) property.brief.push(`${property.bathrooms} Baths`);
   //         if (property.sqft) property.brief.push(`${property.sqft} sqft`);
   //         property.brief = property.brief.join(' / ');
   //       }
   //       return property;
   //     });
   //     this.propertiesSubject.next(properties);
     // } else {
   this.count = 0;
   this.sectionsSubject.next([]);

 }


  update(sections: []) {
  this.sectionsSubject .next(sections);
  this.count = sections.length;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    } else {}
    return throwError(error);
    }
  }
