import { ArrayDataSource } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { fields, sidebar } from '@shared/fields';
import { ApiService } from '@app/core/api.service';
import { TreeDataSource } from '@app/form-creator/tree.datasource';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements OnInit {
  destroyed$ = new Subject();
  treeControl = new FlatTreeControl<any>(node => node.level, field => field.type === 113 || field.type === 114);
  sidebar: any[] = [];
  fieldsTree: any[];
  treeSource = new TreeDataSource();

  constructor(private fs: FieldService, private api: ApiService,private service: FormCreatorService, private cdr: ChangeDetectorRef) {
    this.api.getSidebarFields().subscribe((sidebar) => {
      this.sidebar = sidebar;
      this.fieldsTree = this.fs.toFlatTree(this.sidebar.slice());
      this.fieldsTree.reverse();
      this.treeSource.data = this.fieldsTree;
    })
  }

  ngOnInit() {
    // this.filter.valueChanges.subscribe((filter: string) => {
    //   if (filter && filter.length > 0) {
    //     this.treeSource.data = this.fieldsTree.filter(field => field.name.includes(filter));
    //   } else {
    //     this.treeSource.data = this.fieldsTree;
    //   }
    // });
    if (this.service.fields) {
      this.cdr.detectChanges();
    }
  }


  ngOnDestroy() {
    this.destroyed$.complete();
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.fieldsTree[i].level === node.level - 1) {
        return this.fieldsTree[i];
      }
    }
    return null;
  }
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
