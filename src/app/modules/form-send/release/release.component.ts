import { Component, OnInit, ChangeDetectorRef, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ReleaseDataSource } from './release.datasource';
import { DataCollectionService } from '@app/modules/data-collection/forms-dashboard/data-collection.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  filter: FormControl = new FormControl([]);
  dataSource: ReleaseDataSource = new ReleaseDataSource(this.api);
  chosenPeriods: any[] = [];
  roundsArr: any[] = [];
  showForm: boolean = true;
  mailingOptions = ['Use Mailing House', 'Self-mail'];
  selectOptions = Array.from({ length: 30 }).map((_, i) => i);
  download: {
    url: SafeResourceUrl;
    filename: string;
  } = {
    url: null,
    filename: null
  };
  accountsSource;

  form: FormGroup;

  id: string;

  @ViewChild('link', { static: false }) link: ElementRef;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private dataCollectionService: DataCollectionService,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        this.dataSource.filter(filterValue.toLowerCase())
      } else {
        this.dataSource.filter('');
      }
    });
    this.form = this.fb.group({
      name: [''],
      startDate: [''],
      endDate: [],
      email: this.fb.group({
        selected: [false],
        subject: [''],
        body: ['']
      }),
      mailing: this.fb.group({
        selected: [false],
        delay_days: [''],
        is_self_mail: [false],
        is_delay_days: [false],
        mailing_house_id: ['']
      })
    });
    this.dataSource.accoutSubject.subscribe(v => {
      if (v) {
        console.log('set val ', v)
        this.accountsSource = v;
      }
    })
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.hasOwnProperty('id') ? params.id : '';
      this.initPage();
    });
    // this.dataSource.rounds.subscribe(r => {
    //   if (r) {
    //     this.roundsArr = r;
    //   }
    // });
  }

  sort(col: string) {
    
  }

  initPage(): void {
    if (this.id) {
      this.dataSource.loadList(this.id);
      this.dataSource.getAccounts();
    }
  }

  // hasChild = (_: number, node: any) => {
  //   console.log('hasChild', node);
  //   return !!node.data && node.data.length > 0
  // };

  getIcon(expanded: boolean): string {
    return expanded ? 'fa-caret-up' : 'fa-caret-down';
  }

  getSplits(item: any) {
    let res: string = '';
    if (item.splits && item.splits.length > 0) {
      item.splits.forEach((s, index) => {
        res += `${s.name}`;
        if (index < item.splits.length - 1) { res += ', '; }
      });
    }
    return res;
  }

  getPeriodsLength() {
    return `(${this.dataSource.getLength()})`;
  }

  checkboxAction(item, e) {
    if (e === true) {
      this.chosenPeriods.push(item);
    } else if (e === false) {
      this.chosenPeriods.splice(this.chosenPeriods.findIndex(i => (i.id === item.id)), 1);
    }
    this.cdr.markForCheck();
  }

  isChecked(id) {
    return this.chosenPeriods.findIndex(i => (i.id === id)) >= 0 ? true : false;
  }

  addRound() {
    this.showForm = true;
  }

  cancelRound() {
    this.showForm = false;
  }

  saveRound() {
    console.log('ROUND', this.form.value);
  }

  onExportZIP(mongoIds?: string) {
    this.dataCollectionService
      .exportPDFFormZIP(this.id)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `forms.zip`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click()
        // this.clearLink(url);
      });
  }

}
