import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { ApiService } from '@core/api.service';
import { TreeComponent } from 'angular-tree-component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  }

  ngOnInit() {

    if (this.service.fields) {
      this.tree.treeModel.setState(this.service.fields);
      this.tree.treeModel.update();
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy() {
    this.service.fields = this.tree.treeModel.getState();
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    this.service.fieldChanges.pipe(takeUntil(this.destroyed$)).subscribe((change) => {
      if (change) {
        if (change.added) {
          this.tree.treeModel.nodes.push(change.field.data);
        } else {
          this.tree.treeModel.nodes.filter(node => node.data === change.field.data);
        }
        this.tree.treeModel.update();
        this.cdr.markForCheck();
      }
    });

  }

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
  }

  getHint(node: any) {
    console.log('Node Hint', node);
    return 'Group type';
  }


}
