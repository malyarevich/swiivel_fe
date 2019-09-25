import { NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { FormCreatorService } from '../form-creator.service';
import { FieldService } from '@app/core/field.service';
import { TreeDataSource } from '../tree.datasource';




@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements OnInit {
  treeControl = new NestedTreeControl<any>(node => node.fields);
  sidebar: any[] = [];
  fieldsTree: any[];
  treeSource = new TreeDataSource();
  filter: FormControl = new FormControl();

  constructor(private fs: FieldService, private api: ApiService) {
    this.api.getSidebarFields().subscribe((sidebar) => {
      this.sidebar = sidebar;
      this.fs.sidebar = sidebar;
      // this.fieldsTree.reverse();
      // this.treeSource.data = this.fieldsTree;
    })
  }

  ngOnInit() {
    this.fs.sidebar.subscribe(v => {
      console.log('sidebar value', v);
      this.treeSource.data = v;
    });
    // this.filter.valueChanges.subscribe((filter: string) => {
    //   if (filter && filter.length > 0) {
    //     this.treeSource.data = this.fieldsTree.filter(field => field.name.includes(filter));
    //   } else {
    //     this.treeSource.data = this.fieldsTree;
    //   }
    // });
  }

  hasChild = (_: number, node: any) => !!node.fields && node.fields.length > 0;

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  onChange(event) {
    console.log(event);
    this.fs.sidebar = this.treeSource.data;
  }

}
