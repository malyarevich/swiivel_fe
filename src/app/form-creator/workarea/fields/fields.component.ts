import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { fields, sidebar } from '@shared/fields';
import { ApiService } from '@app/core/api.service';
import { TreeDataSource } from '@app/form-creator/tree.datasource';
import { FormCreatorService } from '@app/form-creator/form-creator.service';

// import { fields } from '@shared/fields';


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, OnInit, OnDestroy {
  options = {
    idField: 'mongo_id',
    childrenField: 'fields',
    displayField: 'name',
    useCheckbox: true,
    allowDrop: true,
    allowDrag: true
  };
  fields: any[] = [];
  destroyed$ = new Subject();
  @ViewChild(TreeComponent, {static: true})
  private tree: TreeComponent;
  constructor(private service: FormCreatorService, private cdr: ChangeDetectorRef) {
  fieldsTree: any[];
  treeSource = new TreeDataSource();

  constructor(private fs: FieldService, private api: ApiService, private cdr: ChangeDetectorRef) {
    this.api.getSidebarFields().subscribe((sidebar) => {
      this.sidebar = sidebar;
      this.fieldsTree = this.fs.toFlatTree(this.sidebar.slice());
      this.fieldsTree.reverse();
      this.treeSource.data = this.fieldsTree;
    })
  }

  ngOnInit() {

    if (this.service.fields) {
      this.tree.treeModel.setState(this.service.fields);
      this.tree.treeModel.update();
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy() {
    this.service.fields = this.tree.treeModel.getState()
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    this.service.fieldChanges.pipe(takeUntil(this.destroyed$)).subscribe((change) => {
      if (change) {
        if (change.added) {
          this.tree.treeModel.nodes.push(change.field.data);
        } else {
          this.tree.treeModel.nodes.filter(node => node.data === change.field.data)
        }
        this.tree.treeModel.update();
        this.cdr.markForCheck();
      }
    })

  }
  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);

  getClass(type: number) {
    let styleClass = 'workarea-node-wrap ';
    switch (type) {
      case 114:
        styleClass += 'section-tree-node';
        break;
      case 113:
        styleClass += 'group-tree-node';
        break;
      default:
        styleClass += 'field-workarea-node';
        break;
    }
    return styleClass;
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.fieldsTree[i].level === node.level - 1) {
        return this.fieldsTree[i];
      }
    }
    return null;
  }

  getHint(node: any) {
    console.log('Node Hint', node);
    return 'Group type'
  shouldRender(node: any) {
    const parent = this.getParentNode(node);
    const should = !parent || parent.expanded;
    return should;
  }

  settingsTogle(node: any)  {
    if (node) {
      node.showSettings = !node.showSettings;
      this.cdr.markForCheck();
    }
  }
}
