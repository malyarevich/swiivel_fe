import {Component, Input, OnInit} from '@angular/core';
import {Family} from "../../../../../models/family/family.model";
import {FamilyService} from "../../../../../services/family/family.service";
import {DataTableColumn} from "../../../../../models/data-table/data-table-column.model";

@Component({
  selector: 'app-family-view-documents',
  templateUrl: './family-view-documents.component.html',
  styleUrls: ['./family-view-documents.component.css']
})
export class FamilyViewDocumentsComponent implements OnInit {
  @Input() familyId: string;
  familyName: string;

  cols: DataTableColumn[] = [
    {
      id: 'title',
      type: 'text',
      title: 'TITLE',
      sort: true,
      search: true,
    },
    {
      id: 'type',
      type: 'text',
      title: 'TYPE',
      sort: true,
      search: true,
    },
    {
      id: 'format',
      type: 'text',
      title: 'FORMAT',
      sort: true,
      search: true,
    },

    {
      id: 'uploaded_date',
      type: 'date',
      title: 'UPLOADED DATE',
      sort: true,
      search: true,
    },
    {
      id: 'student',
      type: 'text',
      title: 'STUDENT',
      sort: true,
      search: true,
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
      width: '250px'
    },
  ];

  constructor(private familyService: FamilyService) {
  }

  ngOnInit() {
    this.getFamilyName();
  }

  getFamilyName() {
    this.familyService.family.subscribe((res: Family) => {
      this.familyName = res.name;
    })
  }

  onSearchQuery(event) {
    console.log(event);
  }

}
