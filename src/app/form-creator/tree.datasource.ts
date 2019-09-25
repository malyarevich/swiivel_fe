import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';
const tree = new SymbolTree();

// import { HttpErrorResponse } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout } from 'rxjs/operators';

export class TreeDataSource implements DataSource<any> {
  private root = {};// tree// new SymbolTree("Tree source");
  private childKey = 'fields';
  private dataSubject = new BehaviorSubject<any>([]);
  public data$ = this.dataSubject.asObservable();
  // public loadingSections$ = this.loadingSections.asObservable();
  public filters;


  constructor(nodes?: any[]) {
    if (nodes) this.build(nodes);
  }

  build(nodes: any[] = [], root = this.root, childKey = this.childKey) {
    for (let node of nodes) {
      tree.appendChild(root, node);
      if (Array.isArray(node[childKey])) {
        this.build(node[childKey], node, childKey);
      }
    }
    if (this.root === root) {
      this.data = tree.childrenToArray(root);
    }
  }

  connect(): Observable<any[]> {
    return this.data$;
  }

  disconnect(): void {
    this.dataSubject.complete();
    // this.loadingSections.complete();
  }
  set data(data: any) {
    console.log(`new data`, data);
    this.dataSubject.next(data);
  }
  get data() {
    return this.dataSubject.getValue();
  }

  set nodes(nodes: any[]) {
    console.log('set nodes', nodes);
    this.build(nodes);
  }

  get children() {
    return tree.childrenToArray(this.root)
  }

  setActive(node, active: boolean) {
    console.log('setactive', active, node );
    node.isActive = active;
  }

 }
