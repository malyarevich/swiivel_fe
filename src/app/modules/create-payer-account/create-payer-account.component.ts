import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {
//   FormBuilder, FormGroup, Validators
// } from '@angular/forms';

@Component({
  selector: 'app-create-payer-account',
  templateUrl: 'create-payer-account.component.html',
  styleUrls: ['./create-payer-account.component.scss']
})
export class CreatePayerAccountComponent implements OnInit {
  @Output() closeCreatePayerAccount: EventEmitter<any> = new EventEmitter<any>();

  // private form: FormGroup;

  companies: any[] = [];
  companiesNames = ['Miškas', 'Žalias', 'Flexigen', 'Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7'];
  types: any[] = [];
  typesNames = ['Payer', 'Other'];

  constructor() {
    // this.form = fb.group({
    //   'name': [null, Validators.required],
    // });
  }

  ngOnInit() {
    this.companiesNames.forEach((c, i) => {
      this.companies.push({
        id: i,
        name: c,
        // avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2',
      });
    });

    this.typesNames.forEach((c, i) => {
      this.types.push({
        value: i,
        label: c,
      });
    });
  }

  onCreatePayerAccount(param) {
    console.log(param);
  }

  onCloseCreatePayerAccount() {
    this.closeCreatePayerAccount.emit(true);
  }
}
