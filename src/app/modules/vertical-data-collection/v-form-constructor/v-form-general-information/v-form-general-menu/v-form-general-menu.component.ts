import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-v-form-general-menu',
  templateUrl: './v-form-general-menu.component.html',
  styleUrls: ['./v-form-general-menu.component.scss']
})
export class VFormGeneralMenuComponent implements OnInit {

  // @ViewChild('generalInfoMenu') menuElement: ElementRef;
  @Output() scrollToEmitter = new EventEmitter<string>();
  @Output() activeSectionEmitter = new EventEmitter<string>();
  objectKeys = Object.keys;
  sticky: boolean = false;
  elementPosition: any;
  activeItem: number = 1;
  @Input() menu: any;
  // menuItems = [
  //   {title: 'Basic Form Information', target: 1},
  //   {title: 'Period', target: 2},
  //   {title: 'Form Dates', target: 3},
  //   {title: 'Eligible Accounts', target: 4},
  // ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.menu);
  }

  ngAfterViewInit() {
      // this.elementPosition = this.menuElement.nativeElement.offsetParent.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    console.log('dasdasd');
      const windowScroll = window.pageYOffset;
      this.sticky = (windowScroll >= this.elementPosition);
  }

  // onScrollTo(target) {
  //     this.activeItem = target;
  //     this.scrollToEmitter.emit(target);
  // }

  onSetSection(value) {
    if(!value.isActive) return;
    this.activeItem = value.target;
    this.activeSectionEmitter.emit(value);
  }


}
