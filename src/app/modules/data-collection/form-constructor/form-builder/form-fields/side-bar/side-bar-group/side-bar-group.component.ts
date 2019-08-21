import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '@modules/data-collection/model/field.model';
import { SideBarService } from '../../side-bar/side-bar.service';

@Component({
  selector: 'app-side-bar-group',
  templateUrl: './side-bar-group.component.html',
  styleUrls: ['./side-bar-group.component.scss']
})

export class SideBarGroupComponent implements OnInit {

  @Input() nestedLevel: number;
  @Input() group: any;
  @Input() idSectionForDragDrop: string[];

  @Output() fieldToggle: EventEmitter<void> = new EventEmitter<void>();

  public showNested = true;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {
  }

  onGroupToggle(event) {
    const value = event.target.checked;
    console.log(value);
    this.sideBarService.changeExistGroupFields(this.group, value);
    this.fieldToggle.emit();
  }

  onFieldToggle() {
    this.group.exist = this.group.fields.some((field: Field) => field.exist);
    this.fieldToggle.emit();
  }
}
