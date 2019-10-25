import { Component,  OnInit , Input} from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Log } from '@models/form-history/form-history.model';

@Component({
  selector: 'sw-form-history',
  templateUrl: './form-history.component.html',
  styleUrls: ['./form-history.component.scss'],
})
export class FormHistoryComponent implements OnInit {
  @Input() logList: Log[];

  formSearch: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.formSearch = this.fb.group({
      search: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.initSearch()
  }

  initSearch() {
    this.formSearch
      .get('search').valueChanges
      .subscribe((data) =>  {
        const search = (data.replace(/^\s+/g, ''));
        console.log(`search: ${search}`);
      });
  }
}
