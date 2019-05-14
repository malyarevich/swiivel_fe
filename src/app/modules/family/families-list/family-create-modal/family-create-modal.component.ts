import {Component, OnDestroy, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {v4 as uuid} from 'uuid';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Family, initFamily} from "../../../../models/family/family.model";
import {FamilyService} from "../../../../services/family/family.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-family-create-modal',
  templateUrl: './family-create-modal.component.html',
  styleUrls: ['./family-create-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FamilyCreateModalComponent implements OnInit {

  family: Family;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private familyService: FamilyService,
              private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
    this.initNewFamily();
  }

  initNewFamily() {
    this.family = cloneDeep(initFamily);
    this.family._id = uuid();
  }

  save() {
    this.familyService.createFamily(this.family).subscribe((res) => {
      console.log(res);
      this.router.navigate([`/family/profile/${this.family._id}`]);
    })
  }

  dismiss() {
    this.family = null;
  }
}
