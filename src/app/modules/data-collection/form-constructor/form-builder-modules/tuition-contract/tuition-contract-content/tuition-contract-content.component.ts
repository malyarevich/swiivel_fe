import { Component, OnInit, Input } from '@angular/core';
import { TuitionStateService } from '../services/tuition-state.service';
import { TuitionContract } from 'src/app/models/data-collection/form-constructor/form-builder/tuition-contract.model';

@Component({
  selector: 'app-tuition-contract-content',
  templateUrl: './tuition-contract-content.component.html',
  styleUrls: ['./tuition-contract-content.component.scss']
})
export class TuitionContractContentComponent implements OnInit {
  tuitionContract: TuitionContract;

  constructor(public tuitionStateService: TuitionStateService) { }

  ngOnInit() {
    this.tuitionContract = this.tuitionStateService.tuitionContract
  }

}
