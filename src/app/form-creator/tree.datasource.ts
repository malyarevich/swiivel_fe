import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';

export const tree = new SymbolTree('Tree');
export class TreeNodeItem {

  // constructor(node) {
  //   this = node;
  // }
  //   // {...node};
  //   console.log(`constr`, node)
  //   return this;
  // }
  get test() {
    return this['symbol'];
  }
  get children() {
    return this;
  }
}

// import { HttpErrorResponse } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout } from 'rxjs/operators';

export class TreeDataSource implements DataSource<any> {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private tree = tree;
  private childKey = 'fields';
  private root = {};
  // private loadingSections = new BehaviorSubject<boolean>(false);
  public count = 0;
  public sections;
  public data$ = this.dataSubject.asObservable();
  // public loadingSections$ = this.loadingSections.asObservable();
  public filters;


  constructor(nodes?: any[]) {
    if (nodes) this.build(nodes);
  }

  get nodes() {
    return this.tree['symbol'];
  }

  build(nodes: TreeNodeItem[] = [], root = this.root, childKey = this.childKey) {
    for (let node of nodes) {
      node['isSelected'] = node['isActive'];
      this.tree.appendChild(root, node);
      if (Array.isArray(node[childKey])) {
        this.build(node[childKey], node, childKey);
      }
    }
    if (this.root === root) {
      this.data = this.tree.childrenToArray(root);
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
    this.dataSubject.next(data);
  }
  get data() {
    return this.dataSubject.getValue();
  }


  set nodes(nodes: any[]) {
    this.build(nodes);
  }

  get children() {
    return this.tree.childrenToArray(this.root)
  }

  getChildren(node) {
    return this.tree.childrenToArray(node);
  }

  getAncestors(node) {
    return this.tree.ancestorsToArray(node);
  }

  setActive(node, active: boolean) {
    console.log('setactive', active, node );
    node.isActive = active;
  }

 }
