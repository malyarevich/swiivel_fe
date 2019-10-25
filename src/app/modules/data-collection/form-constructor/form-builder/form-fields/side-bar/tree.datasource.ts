import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '@app/core/api.service';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import * as SymbolTree from 'symbol-tree';
import * as SymbolTreeNode from 'symbol-tree/lib/SymbolTreeNode';

import { catchError, debounceTime, distinctUntilChanged, finalize, retry, tap, timeout, filter, map } from 'rxjs/operators';
import { FilesService } from '@app/services/online-form/files.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

export const CHILDREN_SYMBOL = Symbol.for('fields');
export const isActive = (field: any) => {
  if (!field.isActive) return false;
  if (field.fields && field.fields.length > 0) {
    return field.isActive && field.fields.some(isActive);
  } else {
    return field.isActive;
  }
}
export const getActive = (fields: any[]) => {
  return fields.map((field) => {
    if (!isActive(field)) return null;
    if (Array.isArray(field.fields)) {
      field.fields = getActive(field.fields);
    }
    return field;
  }).filter(field => field !== null);
  // return fields;
}

export class Node {
  [key: string]: any;
}
export class TreeDataSource implements DataSource<any> {
  private dataSubject = new BehaviorSubject<any>([]);
  private childKey = 'fields';
  private _symbol;
  public count = 0;
  public sections;
  public filters;
  public tree: SymbolTree;
  public oc = 0;


  constructor(symbol = 'Tree', nodes?: any[]) {
    this._symbol = symbol;
    this.tree = new SymbolTree(this._symbol);
    if (nodes) { this.nodes = nodes; }
    return this;
  }

  append(node) {
    return this.appendTo(this.tree, node);
  }

  appendTo(parent: object, node: object) {
    try {
      this.tree.appendChild(parent, node);
      return this.tree.lastChild(parent);

    } catch (e) {
      console.log(e)
    }
  }

  parentOf(node: Node) {
    if (this.tree) {
      let parent = this.tree.parent(node);
      if (parent) {
        return parent;
      }
    }
    return null;
  }


  parentsOf(node: Node) {
    let parents = this.tree.ancestorsIterator(node);
    parents.next();
    return parents;
  }

  childrenOf(node = this.tree, recursive = false, filterFn?: (child: any) => boolean, reverse = false) {
    if (recursive) {
      if (this.hasChildren(node)) {
        if (filterFn) {
          return Array.from(this.tree.childrenIterator(node, { reverse }), (child: Node) => {
            if (this.hasChildren(child)) {
              child.fields = this.childrenOf(child, true, filterFn, reverse);
            }
            return child;
          }).filter(filterFn);
        } else {
          return Array.from(this.tree.childrenIterator(node, { reverse }), (child: Node) => {
            if (this.hasChildren(child)) {
              child.fields = this.childrenOf(child, true, filterFn, reverse);
            }
            return child;
          });
        }
      } else {
        return [];
      }
    } else {
      if (filterFn) {
        return Array.from(this.tree.childrenIterator(node, { reverse })).filter(filterFn);
      } else {
        return Array.from(this.tree.childrenIterator(node, { reverse }));
      }
    }
  }

  appendArray(nodes: any[] = [], parent = this.tree, childKey = this.childKey) {
    for (const node of nodes) {
      if (this.tree.parent(node) !== parent) {
        this.appendTo(parent, node);
        node.path = this.getPath(node);
        node.pathId = node.path.join('') + node.type;
        if (Array.isArray(node[childKey])) {
          this.appendArray(node[childKey], node, childKey);
        }

      }
    }
    return nodes;
  }

  clear() {
    this.remove(this.tree);
    this.tree = new SymbolTree(this._symbol);
    return [];
  }

  remove(node: object) {
    this.tree.remove(node);
  }

  reload() {
    this.dataSubject.next(this.allChildren);
  }

  set nodes(nodes: object[]) {
    this.clear();
    this.appendArray(nodes);

    this.reload();
  }

  get nodes() {
    return this.dataSubject.getValue();
  }

  get children() {
    return this.childrenOf(this.tree);
  }

  get allChildren() {
    return this.childrenOf(this.tree, true);
  }

  get symbol() {
    return this.tree.symbol;
  }


  get changes() {
    return this.dataSubject.asObservable();
  }

  get activeFields$() {
    return this.dataSubject.pipe(
      debounceTime(10),
      // map((fields) => {

      //   return fields.filter(isActive);
      // }),

      distinctUntilChanged(),
    )
  }
  get fields$() {
    return this.dataSubject.asObservable();
  }

  get activeNodes() {
    return this.getActiveChildren(this.tree);
  }


  addSection(old?, title = 'New Section', fields = [], isWrapper = false) {
    let section = {
      type: 114,
      name: title,
      isActive: true,
      isWrapper,
      fields: []
    }
    if (old) this.tree.insertAfter(old, section);
    else this.tree.appendChild(this.tree, section);
    this.appendArray(fields, section)
    this.reload();

  }

  isWrappedBySection(fields: any[]) {
    let result = fields.every(field => {
      return (field.type === 114 || field.type === 112);
    });
    return result;
  }

  get wrapper() {
    let first = this.tree.firstChild(this.tree);
    if (first && first.isWrapper === true) return first;
    else return null;
  }

  addWrapperPath(fields: any[], name = 'New section') {
    fields.forEach((field) => {
      if (field.fields) this.addWrapperPath(field.fields, name);
      if (field.path[0] !== name) field.path.unshift(name)
    })
    return fields;
  }

  wrapIfNeeded(fields: any[], name = 'New section') {
    if (fields.length > 0) {
      let wrapped = this.isWrappedBySection(fields);
      if (!wrapped) {
        let wrap = [{
          type: 114,
          name: name,
          isActive: true,
          isWrapper: true,
          path: name,
          pathId: name + '114',
          fields: fields
        }];
        return wrap;
      } else {
        return fields;
      }
    }
    else return [];
  }

  addGroup(old, title = 'New Group', fields = []) {
    this.tree.insertAfter(old, {
      type: 113,
      name: title,
      isActive: true,
      fields
    });
  }



  filter(fn: (field: any) => boolean) {
    return Array.from(this.tree.treeIterator(this.tree)).filter(fn);
  }

  iterator(parent = this.tree, reverse = false) {
    return this.tree.treeIterator(parent);
  }

  array(parent = this.tree) {
    return this.tree.treeToArray(parent)
  }

  deActivate(node: Node, recursive = true) {
    node.isActive = false;
    if (this.hasParent(node) && recursive) {
      for (const field of this.parentsOf(node)) {
        if (field.type === 113 || field.type === 114) {
          if (this.activeChildrenOf(field).length === 0) {
            field.isActive = false;
          } else {
            break;
          }
        }
      }
    }
    if (this.hasChildren(node) && recursive) {
      let children = this.tree.treeIterator(node);
      children.next();
      for (const field of children) {
        field.isActive = false;
      }
    }
    this.reload();
  }

  findNodeByPathId(pathId) {
    return this.tree.treeToArray(this.tree).find(node => node.pathId === pathId);
  }

  findNodeByFieldId(fieldId) {
    return this.tree.treeToArray(this.tree).find(node => node._id === fieldId);
  }

  findNodeByParam(param, value) {
    return this.tree.treeToArray(this.tree).find(node => node[param] === value);
  }

  findNodeByFieldNameType(field) {
    return this.tree.treeToArray(this.tree).find(node => {
      if (field.name && field.type) {
        return node.name === field.name && node.type === field.type;
      }
    })
  }

  findNodeByPath(field) {
    if (field.path) {
      let path = field.path.slice();
      let rootPaths = this.nodes.map((root: any) => root.name);
      if (!rootPaths.includes(path[0])) {
        path.shift();
      }


      let node = this.tree.treeToArray(this.tree).find(node => {
        if (!node.path) return false;
        return node.path.join('') === path.join('');
      });
      return node;
    }

  }

  findNodeByField(field) {
    if (field._id) return this.findNodeByFieldId;
    // if (field.mapped) {
    //   return this.findNodeByParam('mapped', field.mapped);
    // }
    // if (field.pathId) {
    //   return this.findNodeByParam('pathId', field.pathId);
    // }
    if (field.path) {
      return this.findNodeByPath(field);
    }
    return this.findNodeByFieldNameType(field);
  }

  toggle(node) {
    if (node.isActive) {
      this.deActivate(node);
    } else {
      this.activate(node);
    }
  }

  activate(node, recursive = true) {
    node.isActive = true;
    if (this.hasParent(node) && recursive) {
      for (const field of this.parentsOf(node)) {
        if (field.type === 113 || field.type === 114) {
          field.isActive = true;
        }
      }
    }
    if (this.hasChildren(node) && recursive) {
      for (const field of this.tree.treeIterator(node)) {
        field.isActive = true;
      }
    }
    this.reload();
  }

  get activeChildren() {
    return this.childrenOf(this.tree, false, (child: any) => {
      return child.isActive;
    });
  }

  activeChildrenOf(parent = this.tree, recursive = true) {
    return this.childrenOf(parent, true, (child: any) => {
      return child.isActive;
    });
  }

  hasActiveChildren(node = this.tree, recursive = true) {
    return this.activeChildrenOf(node, recursive).length > 0;
  }

  addPaths(fields: any[], prepend?: string[]) {
    fields.forEach((field) => {
      if (field.fields) {
        field.fields = this.addPaths(field.fields, prepend);
      }
      field.path = this.getPath(field);
      if (prepend) field.path.push(...prepend);
      field.pathId = field.path.join('') + field.type;
      console.log(field.path, field.pathId)
    });
    return fields;
  }

  toForm(parent = this.activeChildren) {
    const nodes = this.addPaths(parent);
    console.log(nodes.slice())
    if (nodes.length > 0) {
      let section = nodes.find((node: any) => node.type === 114);
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
        return nodes
      }
    } else {
      return [];
    }
  }

  getActiveChildren(parent = this.tree) {
    const children = this.childrenOf(parent, true, (node: any) => node.isActive === true);
    return children.map((child: any) => {
      child.path = this.getPath(child);
      child.fields = this.getActiveChildren(child);
      return child;
    });
  }

  getActiveSections(parent = this.tree) {
    const sections = Array.from(parent.childrenIterator(parent)).filter((node: any) => node.type === 114 && node.isActive === true);
    return sections;
  }

  getActiveGroups(parent = this.tree) {
    const groups = Array.from(parent.childrenIterator(parent)).filter((node: any) => node.type === 113 && node.isActive === true);
    return groups;
  }

  getPath(node) {
    let path = Array.from(this.tree.ancestorsIterator(node), (parent: any) => {
      return parent.name;
    }).slice(0, -1);
    path.reverse();
    return path;
  }

  swapSections(prevIdx, curIdx) {
    console.log(`Move sec from ${prevIdx} to ${curIdx}`);
  }
  getSectionByIdx(idx) {
    return this.nodes[idx];
  }
  connect(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {
    this.dataSubject.complete();
  }
  set data(data: any) {
    this.nodes = data;
  }
  get data() {
    return this.nodes;
  }

  isSelected(node: Node) {
    return node.isActive === true;
  }

  hasChildren(node: Node): boolean {
    if (this.tree) {
      return this.tree.hasChildren(node);
    }
    return false;
  }
  hasParent(node) {
    if (this.tree) {
      return this.parentOf(node) !== null;
    }
  }


  addCustomField(parent: any, node: any) {
    parent.fields.push(node);
    this.appendTo(parent, node);
    node.path = this.getPath(node);
    node.pathId = node.path.join('') + node.type;
    parent.fields.push(node);
    this.reload();
  }



  deleteNode(node: any) {
    let parent = this.parentOf(node);
    if (parent) {
      parent.fields = parent.fields.filter(field => field !== node);
    }
    this.tree.remove(node);
    this.reload();
  }

}
