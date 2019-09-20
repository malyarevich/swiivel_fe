import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ApiService } from '@core/api.service';
import { TreeComponent } from 'angular-tree-component';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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


}
