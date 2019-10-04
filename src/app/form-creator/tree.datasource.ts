import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';

import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout, filter } from 'rxjs/operators';

export const CHILDREN_SYMBOL = Symbol.for('children');

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
    return this.dataSubject.pipe(filter(node => this.isSelected(node)));;
  }
  get changes() {
    return this.dataSubject.asObservable();
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

  build(nodes: any[] = [], root = this.tree, childKey = this.childKey, onlyActive?, allActive?) {
    for (let node of nodes) {
      if (allActive) node.isActive = true;
      if (this.tree.index(node) === -1) {
        if (onlyActive === true) {
          if (node.isActive) {
            this.tree.appendChild(root, node);
            if (Array.isArray(node[childKey])) {
              node[CHILDREN_SYMBOL] = node[childKey].filter(child => child.isActive)
              this.build(node[childKey], node, childKey, onlyActive, allActive);
            } else {
              node[CHILDREN_SYMBOL] = null;
            }
          }
        } else {
          this.tree.appendChild(root, node);
          if (Array.isArray(node[childKey])) {
            node[CHILDREN_SYMBOL] = node[childKey]//.filter(child => child.isActive)
            this.build(node[childKey], node, childKey, onlyActive, allActive);
          } else {
            node[CHILDREN_SYMBOL] = null;
          }
        }
      }
    }
    if (this.tree === root) {
      this.data = this.tree.childrenToArray(root);
    }
  }

  connect(_collectionViewer: CollectionViewer): Observable<any[]> {
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

  getParentChildren(node) {
    return this.tree.treeToArray(node);
  }

  getAncestors(node) {
    return this.tree.ancestorsToArray(node);
  }

  deleteNode(node: any) {
    if (this.tree.parent(node)) {
      this.tree.parent(node).fields.splice(this.tree.index(node), 1);
    } else if (this.getChildren(this.tree)) {
      this.getChildren(this.tree).splice(this.tree.index(node), 1);
    }
    this.data = null;
    this.data = this.getChildren(this.tree);
  }

  refresh() {
    this.data =  this.dataSubject.getValue();
  }

  isSelected(node) {
    return (node.isActive || node.isSelected) === true;
  }

  toggleNode(node) {
    let newStatus = !node.isActive;
    if (node[CHILDREN_SYMBOL]) {
      let children = this.tree.childrenIterator(node);
      for (let child of children) {
        child.isActive = newStatus
      }
    }
    node.isActive = newStatus;
    this.refresh();
  }

  toggle(node) {
   const hasParent = this.tree.parent(node);
   const hasChildren = this.tree.hasChildren(node);
   const status = node.isActive;
   const newStatus = !status;
   node.isActive = !node.isActive;
   if (hasParent) {
     const leafs = this.tree.childrenIterator(node);
     for (let leaf of leafs) {
       leaf.isActive = node.isActive;
     }
     // leafs.
   } else if (hasParent) {
     console.log(parent);
   } else {
     console.log(this.tree.following(node));
   }


   node.isActive = !node.isActive;
 }
 hasChildren(node) {
   if (this.tree) {
     return this.tree.hasChildren(node);
   }
 }
 setActive(node, active: boolean) {
   console.log('setactive', active, node );
   node.isActive = active;
 }

  // setActive(node, active: boolean) {
  //   node.isActive = active;
  //   node.isSelected = active;
  //   if (this.tree.hasChildren(node)) {
  //     let descendants = this.tree.childrenIterator(node);
  //     for (let descendant of descendants) {
  //       descendant.isActive = node.isActive;
  //       descendant.isSelected = node.isSelected;
  //     }
  //   }
  //
  //   // for (let ancestor of this.tree.ancestorsIterator(node)) {
  //     // let children = this.getChildren(ancestor).filter(child => !child.hasChildren && child.isActive);
  //     // if (children.length === 0) {
  //     //   ancestor.isActive = false;
  //     //   ancestor.isSelected = false;
  //     // }
  //     // if (this.getChildren(ancestor).filter(child => child.isActive) === 1) {
  //     //   ancestor.isActive = false;
  //     //   ancestor.isSelected = false;
  //     //   this.getChildren(ancestor)[0].isActive = false;
  //     //   this.getChildren(ancestor)[0].isSelected = false;
  //     // }
  //   // }
  //
  //
  //   this.refresh();
  //   // this.tree.getD node.
  //   // this.CollectionViewer.
  // }

 }
