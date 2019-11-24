import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'sw-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  public range = 2;
  public currentPage = 1;
  public totalPages: number;
  public pages: Observable<number[]>;
  public limit = 10;

  @Input() set index(i: number) {
    if (i) {
      this.currentPage = i;
    }
  }
  @Input() size = 200;
  @Input() sizeOptions = [10, 20, 50, 100];
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.getPages(this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.limit, this.size);
  }

  getPages(limit: number, size: number) {
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = range(-this.range, this.range * 2 + 1).pipe(
      map(offset => this.currentPage + offset),
      filter(page => this.isValidPageNumber(page, this.totalPages)),
      toArray()
    );
  }

  getCurrentPage(index: number, limit: number): number {
    return Math.floor(index / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number) {
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.currentPage = page;
      this.getPages(this.limit, this.size);
      this.pageChange.emit({
        limit: this.limit,
        page: this.currentPage
      });
    }
  }

  changeSize(event) {
    if (event >= 0) {
      this.limit = this.sizeOptions[event];
      this.selectPage(this.currentPage);
    }
  }

}
