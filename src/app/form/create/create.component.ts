import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sw-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  isFormHasId$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.isFormHasId$ = this.formService.isFormHasIdSubject;
  }

}
