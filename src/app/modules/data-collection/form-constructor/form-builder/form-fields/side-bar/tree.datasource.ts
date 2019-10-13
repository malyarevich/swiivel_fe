import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ApiService } from '@app/core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';

import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout, filter } from 'rxjs/operators';

export const CHILDREN_SYMBOL = Symbol.for('fields');

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

  get activeNodes() {
    return this.getActiveChildren(this.tree);
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
  addSection(old, title = 'New Section', fields = []) {
    this.tree.insertAfter(old, {
      type: 114,
      name: title,
      isActive: true,
      fields: fields
    });
    this.data = this.tree.childrenToArray(this.tree);
  }

  toForm() {
    let nodes = this.getActiveChildren(this.tree);
    if (nodes.length > 0) {
      let section = nodes.find(node => node.type === 114);
      if (!section) {
        section = {
          type: 114,
          name: 'New section',
          isActive: true,
          path: ['New section'],
          fields: nodes
        };
        return [section];
      } else {
        return nodes;
      }
    } else {
      return [];
    }
  }

  getActiveChildren(parent = this.tree) {
    let children = Array.from(this.tree.childrenIterator(parent)).filter((node: any) => node.isActive === true);
    return children.map((child: any) => {
      child.path = this.getPath(child);
      child.fields = this.getActiveChildren(child);
      return child;
    });
  }

  getActiveSections(parent = this.tree) {
    let sections = Array.from(parent.childrenIterator(parent)).filter((node: any) => node.type === 114 && node.isActive === true);
    return sections;
  }

  getActiveGroups(parent = this.tree) {
    let groups = Array.from(parent.childrenIterator(parent)).filter((node: any) => node.type === 113 && node.isActive === true);
    return groups;
  }

  getPath(node) {
    return Array.from(this.tree.ancestorsIterator(node), (parent: any) => {
      return parent.name;
    }).slice(0, -1);
  }

  swapSections(prevIdx, curIdx) {
    console.log(`Move sec from ${prevIdx} to ${curIdx}`)
  }
  getSectionByIdx(idx) {
    return this.nodes[idx];

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
    return this.tree.childrenToArray(this.tree)
  }

  getChildren(node) {
    return this.tree.childrenToArray(node);
  }
  getAllChildren(node) {
    return this.tree.treeToArray(node);
  }
  getParentChildren(node) {
    return this.tree.treeToArray(node);
  }

  getAncestors(node) {
    return this.tree.ancestorsToArray(node);
  }


  refresh() {
    this.data = this.dataSubject.getValue();
  }

  isSelected(node) {
    return node.isActive === true;
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
    console.log('setactive', active, node);
    node.isActive = active;
  }

  addCustomField(parent: any, node: any) {
    parent[CHILDREN_SYMBOL].push(node);
    this.tree.appendChild(parent, node);
    this.data = null;
    this.data = this.getChildren(this.tree);
  }

  deleteNode(node: any) {
    this.tree.parent(node)[CHILDREN_SYMBOL].splice(this.tree.index(node), 1);
    this.tree.remove(node);
    this.data = null;
    this.data = this.getChildren(this.tree);
  }

}
