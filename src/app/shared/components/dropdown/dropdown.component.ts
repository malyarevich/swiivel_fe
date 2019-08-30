import {
  AfterContentInit,
  Component,
  Input, OnDestroy,
  OnInit, ViewChild,
} from '@angular/core';

import {Subject} from 'rxjs';

@Component({
  selector: 'sw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit, OnDestroy {

  @Input() dropdownList: any;
  @Input() nested = false;
  @ViewChild('droplist', { static: false }) droplist;

  private dropdownActive = false;

  public componentDestroyed: Subject<boolean> = new Subject<boolean>();

  // @ContentChild('valueRef', {static: false}) valueRef: ElementRef;
  // @ViewChild('valueRef'stack) valueRef: ElementRef;

  // selectedItem: any;

  constructor(
  ) {

  }

  ngOnInit(): void {
    // this.overlayService.open(this.droplist);
  }

  ngOnDestroy(): void {
    if (this.componentDestroyed) {
      this.componentDestroyed.unsubscribe();
    }
  }

}



