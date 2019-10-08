import {Component, OnInit} from '@angular/core';
import {FamilyService} from "../../../services/family/family.service";
import {Observable} from "rxjs";
import {Family} from "../../../models/family/family.model";
import {LoaderService} from "../../../services/loader/loader.service";
import {FamilyRoles} from "../../../enums/family-roles";
import {DataTableColumn} from "../../../models/data-table/data-table-column.model";
import {FormSearchParams} from "../../../models/form-search-params";

@Component({
  selector: 'app-families-list',
  templateUrl: './families-list.component.html',
  styleUrls: ['./families-list.component.css']
})
export class FamiliesListComponent implements OnInit {

  showModal: boolean = false;
  public familyList$: Observable<Family[]>;
  public loader$: Observable<boolean>;

  familyRoles = FamilyRoles;

  params: FormSearchParams = {
    limit: 200,
    page: 1,
    search: {},
    sort: {
      order: '',
      field: '',
    }
  };

  cols: DataTableColumn[] = [
    {
      id: 'name',
      type: 'text',
      title: 'FAMILY NAME',
      sort: true,
      search: true,
      width: '20%'
    },
    {
      id: 'parents',
      type: 'text',
      title: 'PARENTS',
      sort: false,
      search: false,
      width: '20%'
    },

    {
      id: 'students',
      type: 'text',
      title: 'STUDENTS',
      sort: false,
      search: false,
      width: '20%'
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
    },
  ];

  constructor(private familyService: FamilyService, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loader$ = this.loaderService.loader;
    this.getFamilyList();
  }

  getFamilyList() {
    this.familyList$ = this.familyService.familyList;
    this.familyService.getAll();
  }

  deleteFamily(familyId) {
    this.familyService.delete(familyId);
  }

  showFamilyAddModal() {
    this.showModal = true;
  }

  onCloseFamilyAddModal() {
    this.showModal = false;
  }

  onSearchQuery(event) {
    const {field, order, value} = event;
    this.params.sort = {field, order};
    this.params.search[field] = value;
    this.familyService.getAll(this.params);
  }

}
