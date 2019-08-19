import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { isEmpty } from 'lodash';
import { Form } from 'src/app/models/data-collection/form.model';
import { SideBarService } from '../side-bar.service';

@Component({
  selector: 'app-fields-side-bar',
  templateUrl: './fields-side-bar.component.html',
  styleUrls: ['./fields-side-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FieldsSideBarComponent implements OnInit, OnDestroy {

  @Input() sideBar;
  @Input() form: Form;
  @Input() idSectionForDragDrop: string[];

  public isTree = true;
  public sectionDetailed;
  public searchText: string;

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit(): void {
    this.sideBarService.sectionSubject.subscribe(data => {
      this.sectionDetailed = data;
      this.isTree = isEmpty(this.sectionDetailed);
    });
  }

  ngOnDestroy(): void {
    this.isTree = true;
  }

}
