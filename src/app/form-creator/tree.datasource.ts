import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';

import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout, filter } from 'rxjs/operators';

export class TreeDataSource implements DataSource<any> {
  private dataSubject = new BehaviorSubject<any>([]);
  private childKey = 'fields';
  public count = 0;
  public sections;
  public filters;
  public tree: SymbolTree;


  constructor(symbol = 'Tree', nodes?: any[]) {
    this.tree = new SymbolTree(symbol);
    if (nodes) this.build(nodes, this.tree);
    return this;
  }

  get selectedFields() {
    return this.dataSubject.pipe(filter(node => node.isSelected));;
  }

  get nodes() {
    return this.tree.treeToArray(this.tree)
  }

  clear() {
    this.tree.remove(this.tree);
  }

  update(nodes?: any[]) {
    this.clear();
    if (nodes) {
      this.build(nodes);
      this.tree['symbol'];
    }
  }

  build(nodes: any[] = [], root = this.tree, childKey = this.childKey) {
    for (let node of nodes) {
      // node['isSelected'] = node['isActive'];
      this.tree.appendChild(root, node);
      if (Array.isArray(node[childKey])) {
        this.build(node[childKey], node, childKey);
      }
    }
    if (this.tree === root) {
      this.data = this.tree.childrenToArray(root);
    }
  }

  connect(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {
    this.dataSubject.complete();

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
    return this.tree.childrenToArray()
  }

  getChildren(node) {
    return this.tree.childrenToArray(node);
  }

  getAncestors(node) {
    return this.tree.ancestorsToArray(node);
  }

  setActive(node, active: boolean) {
    node.isActive = active;
  }

 }
