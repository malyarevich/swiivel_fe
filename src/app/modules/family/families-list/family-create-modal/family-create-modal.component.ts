import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FamilyService} from "../../services/family.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-family-create-modal',
  templateUrl: './family-create-modal.component.html',
  styleUrls: ['./family-create-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FamilyCreateModalComponent implements OnInit {

  familyName: string;

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
  }

  save() {
    this.familyService.add(this.familyName);
    // this.router.navigate([`/family/profile/${this.family._id}`]);
  }

  dismiss() {
    this.familyName = '';
  }
}
