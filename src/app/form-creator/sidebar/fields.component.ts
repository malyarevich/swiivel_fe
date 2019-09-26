import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { IActionMapping, TreeComponent } from 'angular-tree-component';
import { FormCreatorService } from '../form-creator.service';




@Component({
  selector: 'sw-form-creator-sidebar-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFieldsComponent implements AfterViewInit {
  options = {
    idField: 'mongo_id',
    childrenField: 'fields',
    displayField: 'name',
    useCheckbox: true,
    allowDrop: false,
    allowDrag: true,
    actionMapping: {
      mouse: {
       checkboxClick: (tree, node, $event) => {
         console.log($event, tree);
         if (node.data.isActive) {
           this.service.addField(node);
         }
       }
      }
   }
  };
  fields: any[] = [];
  filter: FormControl = new FormControl();

  // @Output() activate = new EventEmitter<any>();
  @ViewChild(TreeComponent, {static: true})
  private tree: TreeComponent;
  constructor(private api: ApiService, private service: FormCreatorService) {
  }

  ngAfterViewInit() {
    // this.tree.treeModel.expandAll();
    console.log(this.tree.treeModel);
    // this.tree.treeModel.subscribe('nodeActivate', (e) => {
    //   console.log(e)
    // });
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


}
