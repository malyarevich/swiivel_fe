import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-payer-account',
  templateUrl: 'create-payer-account.component.html',
  styleUrls: ['./create-payer-account.component.scss']
})
export class CreatePayerAccountComponent implements OnInit {
  companies: any[] = [];
  companiesNames = ['Miškas', 'Žalias', 'Flexigen', 'Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7'];
  types: any[] = [];
  typesNames = ['Payer', 'Buyer'];
  showModal = true;

  constructor() { }

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

  onCloseModal() {
    this.showModal = false;
  }

}
