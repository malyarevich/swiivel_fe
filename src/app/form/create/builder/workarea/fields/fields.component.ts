import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, AfterViewChecked, ContentChildren, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { FieldService } from '@app/core/field.service';
import { ApiService } from '@app/core/api.service';
import { CHILDREN_SYMBOL, TreeDataSource } from '@app/form/create/tree.datasource';
import { FormService } from '@app/form/form.service';
import { Subject, Subscription } from 'rxjs';
import { CdkDragDrop, CdkDropList, DragDrop } from '@angular/cdk/drag-drop';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { visitValue } from '@angular/compiler/src/util';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { notDeepEqual } from 'assert';
import { FieldType } from '@app/shared/fields.enum';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];
@Component({
  selector: 'sw-form-creator-workarea-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaFieldsComponent implements AfterViewInit, AfterViewChecked, OnInit, OnDestroy {
  @ViewChild('root', {read: ElementRef, static: true}) rootEl;
  @ViewChildren('rootList', {read: CdkDropList}) lists: QueryList<CdkDropList>;
  options = {
    idField: 'mongo_id',
    childrenField: 'fields',
    displayField: 'name',
    useCheckbox: true,
    allowDrop: true,
    allowDrag: true
  };
  sizeOptions = [
    {value: 0, title: '1 quarter'},
    {value: 1, title: 'Half'},
    {value: 2, title: '3 quarters'},
    {value: 3, title: 'Full width'},
  ]
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  trControl = new NestedTreeControl<FoodNode>(node => node.children);
  treeData = new ArrayDataSource(TREE_DATA);
  data = [];
  fields: any[] = [];
  destroyed$ = new Subject();
  fieldsTree: any[];
  treeSource = new TreeDataSource('Workarea');
  treeControl = new NestedTreeControl<any>(node => {
    let fields = node.get('fields');
    if (fields) {
      return (fields as FormArray).controls
    }
    return null;
  });


  


  form: FormArray = new FormArray([]);
  formSubscription: Subscription;
  constructor(private service: FormService, private api: ApiService, private cdr: ChangeDetectorRef, private fb: FormBuilder,
    private dd: DragDrop) {
  }

  ngOnInit() {
    this.service.form$.subscribe(form => {
      if (this.formSubscription) this.formSubscription.unsubscribe();
      this.formSubscription = form.valueChanges.subscribe((value) => {
        if (value && value['fields']) {
          this.form = form.get('fields') as FormArray;
          this.treeSource.nodes = this.form.controls;// (form.get('fields') as FormArray).controls;
        } else {
          this.treeSource.nodes = [];
        }
        this.cdr.markForCheck();
      });
      
      if (form.get('fields')) {
        this.form = form.get('fields') as FormArray;
        this.treeSource.nodes = this.form.controls;
        // let dl = this.dd.createDropList(this.rootEl);
        console.log(this.getListsIds());
        // dl.connectedTo(this.getListsIds());
        this.cdr.markForCheck();
        this.cdr.detectChanges()

        // this.rootEl._changeDetectorRef.detectChanges();
        // let list = (this.rootEl as CdkDropList);
        // console.log(list)
      }
    });
    
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges()
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.lists.changes.subscribe(lists => {
      this.cdr.detectChanges()
      // lists.forEach((list: CdkDropList) => {
        // console.log(list._dropListRef.withDirection)
        // console.log(list._dropListRef.withItems())
      // })
    })
  }

  setParent(node, key, value) {
    // if (value === false) {
    //   let changed = [];
    //   let parent = node.parent.parent;
    //   while (parent !== node.root) {
    //     if (parent && parent.value.type !== 114) {
    //       let control = parent.get(['options', key]) as FormControl;
    //       if (control && control.value === true) {
    //         changed.push(control)
    //         // control.setValue(false, {onlySelf: true, emitEvent: false, emitViewToModelChange: false, emitModelToViewChange: false});
    //         // changed = true;
    //         parent = parent.parent.parent;
    //       // } else if (!control) {
    //       //   parent.get('options').registerControl(key, new FormControl(false));
    //       } else {
    //         parent = node.root;
    //       }
    //     } else {
    //       console.log('l')
    //       parent = node.root;
    //     }
    //   }
    //   if (changed.length > 0) {
    //     changed.reverse();
    //     changed.forEach((control) => {
    //       control.setValue(false, {onlySelf: true, emitEvent: false, emitViewToModelChange: false, emitModelToViewChange: false});
    //     });
    //     (node.root as FormGroup).updateValueAndValidity();
    //     // this.cdr.markForCheck();
    //     // this.cdr.detectChanges();
    //   }
    // }
  }

  

  getList(node) {
    console.log(node)
    return node.children;
  }

  hasChildren(_, node) {
    // console.log(_, node)
    return !!node.children && node.children.length > 0;
  }



  getListsIds(node?) {
    if (node) {

      let listIds = this.service.getListsIds();
      
      // let filterType = node.get('type').value;
      let nodeId = this.getListId(node);
      
      // if (filterType === 113) {
      //   listIds = listIds.filter((id) => id.endsWith('113') || id.endsWith('114'));
      // } else if (filterType === 114) {
      //   listIds = listIds.filter((id) => id.endsWith('114'));
      // }
      // listIds.push('sidebar-list')
      return listIds//.filter(id => id !== nodeId);
    } else {
      // return this.service.getListsIds();
      return ['cdk-drop-list-root', ...this.service.getListsIds()];

      // let all =  new Array(this.service.getListLength() + 1).fill('cdk-drop-list-');
      // let result = all.map((v, idx) => {
      //   return v + (idx+1);
      // });
      // return result;
    }
  }
  getListId(node) {
    // console.log(node)
    if (node && node.value) {
      let listId = [...this.service.getParentPaths(node), node.get('name').value, node.get('type').value].join('');
      return listId;
    } else {
      return 'cdk-drop-list-root';
    }
  }
  hasChild = (_: number, node: any) => {
    return !!node.get('fields')
  }
  mayEnterRoot(drag, list) {
    let dragType = drag.data.type ? drag.data.type : drag.data.value.type;
    if (dragType === 114) return true;
    else if (dragType === 113) return list.data.value.length === 0;
    else return false;
  }
  mayEnter(drag, list) {
    let dragType = drag.data.type ? drag.data.type : drag.data.value.type;
    if (dragType < 113) {
      return list.id.endsWith('113');
    } else if (dragType === 113) {
      if (list.id === 'cdk-drop-list-0') {
        return list.data.value.length === 0;
      } else {
        return (list.id.endsWith('113') || list.id.endsWith('114'));
      }
    } else if (dragType === 114) {
      return list.id === 'cdk-drop-list-0';
    } else {
      console.log(dragType)
    }
  }

  isSection(drag, list) {
    console.log(drag, list)
    return drag.type === 114;
  }

  getListData(node?) {
    if (!node && this.form) return this.form;
    return node.get('fields');
  }

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }


  getParentNode(node: any) {
    const nodeIndex = this.fieldsTree.indexOf(node);
  }

  getHint(node: any) {
    console.log('Node Hint', node);
    return 'Group type';
  }

  drop(event) {
    if (event.container.id === 'root-list') {
      return false;
    } else {

      console.log('field drop', event)
    }

  }


  settingsToggle(node: any) {
    if (node) {
      let showSettingsControl = node.get('showSettings');
      if (!showSettingsControl) {
        (node as FormGroup).addControl('showSettings', this.fb.control(true));
        return true
      }
      showSettingsControl.setValue(!showSettingsControl.value);
      this.cdr.markForCheck();
      return showSettingsControl.value;
      // node.showSettings = !node.showSettings;
    }
  }

  toggleExpanded(node) {
    if (node.get('isExpanded') === null) {
      (node as FormGroup).addControl('isExpanded', this.fb.control(true));
    } else {
      node.get('isExpanded').setValue(!node.value.isExpanded, {onlySelf: false, emitEvent: true});
      
    }
    if (node.value.isExpanded) {
      this.treeControl.expandDescendants(node);
    } else {
      this.treeControl.collapseDescendants(node);
    }
    this.cdr.markForCheck();
    // this.cdr.detectChanges()
  }

  closeNode(node: any): void {
    this.service.removeField(node);
    this.cdr.markForCheck();
  }
}
