import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/core/api.service';
import { Popup } from '@app/core/popup.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormCreatorService } from '../form-creator.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '../tree.datasource';
// import fields from '@app/shared/fields';


@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit, AfterViewChecked, OnDestroy {
  filterValue: string = null;
  filterControl = new FormControl();
  treeSource = new TreeDataSource('Fields');
  treeControl = new NestedTreeControl((node: any) => node.fields);
  delFieldName: string;
  delInput: FormControl = new FormControl(null);
  ref: any;
  destroyed$ = new Subject();
  @ViewChild('filter', { static: false }) filterNames;
  @ViewChild('deletePop', { static: false }) deletePop;

  constructor(
    private service: FormCreatorService,
    private fb: FormBuilder,
    private api: ApiService,
    private popup: Popup,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {

  }

  activate(node, event) {
    return event;
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  toggleNode(node: any): void {
    this.treeSource.toggle(node);
    if (!node.isActive) {
      this.service.removeField(node);
      let topInactive: any;
      for (const ancestor of this.treeSource.parentsOf(node)) {
        if (!ancestor.isActive) {
          topInactive = ancestor;
        }
      }
      this.treeControl.collapse(topInactive);
    } else {
      this.service.addField(node, Array.from(this.treeSource.parentsOf(node)).slice(0, -1));
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.service.sidebar.subscribe((sidebar) => {
      this.treeSource.nodes = sidebar;
      this.cdr.markForCheck();
    });
    this.treeControl.getDescendants = (dataNode) => {
      return dataNode.fields;
    };
    this.route.paramMap.subscribe(params => {
      this.treeSource.activeFields$.subscribe((fields) => {
        this.treeControl.dataNodes = fields;
      });

      if (params.has('mongo_id')) {
        this.treeControl = new NestedTreeControl<any>(node => {
          const children = node[CHILDREN_SYMBOL];
          return children;
        });
        this.service.formTemplate$.pipe(takeUntil(this.destroyed$)).subscribe(value => {
          if (value) {
            this.treeSource.nodes = value.fields;
            this.service.sidebar = this.treeSource;
            this.cdr.markForCheck();
          }
        });
      }
    });


    this.filterControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      if (value && value.length > 0) {
        this.filterValue = value.toLowerCase();
      } else {
        this.filterValue = null;
      }
      console.log(this.filterValue);
    });
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  hasChild = (_: number, node: any) => !!node[CHILDREN_SYMBOL] && node[CHILDREN_SYMBOL].length > 0;



  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  canCreateField(node) {
    return (node.type === 113 || node.type === 114) && this.treeControl.isExpanded(node);
  }

  customFieldToggle(node) {
    node.formVisible = !(!!node.formVisible);
  }

  showCreateField(node) {
    return node.formVisible;
  }

  drop(event: CdkDragDrop<any>) {
    if (event.container.id === 'sidebar-list') {
      this.service.removeField(event.item.data);
    } else {
      this.service.moveField(event);
    }
  }


  onExit(event: CdkDragExit<any>) {
    console.log(event);
  }




  openDeletePop(node: any) {
    if (!node && !node.data) { return; }

    this.delInput.reset();
    this.delFieldName = node.data.name.toUpperCase();
    this.ref = this.popup.open({
      origin: null,
      content: this.deletePop,
      panelClass: 'centered-panel'
    });
    this.ref.afterClosed$.subscribe(result => {
      this.ref = null;
    });
  }

  closePop() {
    this.ref.close();
  }

  deleteNode() {
    if (this.delFieldName === this.delInput.value) {
      console.log('Delete field', this.delFieldName);
    }
    this.closePop();
  }

  isFiltered(node) {
    if (this.filterValue) {
      return !node.name.toLowerCase().startsWith(this.filterValue);
    } else {
      return !!this.filterValue;
    }
  }


  shouldRender(node) {
    if (!this.filterControl.value) { return true; }
    return this.filterControl.value && node.name.toString().toLowerCase().startsWith(this.filterControl.value);
  }

  toggleExpand(node) {
    node.isExpanded = !node.isExpanded;
    if (node.isExpanded) {
      this.treeControl.collapseDescendants(node);
    } else {
      this.treeControl.expandDescendants(node);
    }
  }

  toggleParentNode(node: any): void {
    this.treeSource.toggle(node);
    if (node.isActive) {
      this.service.addField(node);
      if (!this.treeControl.isExpanded(node)) {
        this.treeControl.expandDescendants(node);
      }
    } else {
      this.service.removeField(node);
      if (this.treeControl.isExpanded(node)) {
        this.treeControl.collapseDescendants(node);
      }
    }
    node.isExpanded = this.treeControl.isExpanded(node);
    this.cdr.markForCheck();
  }

  nodeIsChecked(node) {
    if (!node.isActive) { return false; }
    if (node.type === 113 || node.type === 114) {
      const isChecked = node.isActive === true && Array.from(this.treeSource.tree.treeIterator(node)).every((field: any) => field.isActive);
      return isChecked;
    } else {
      return node.isActive;
    }
  }


}
