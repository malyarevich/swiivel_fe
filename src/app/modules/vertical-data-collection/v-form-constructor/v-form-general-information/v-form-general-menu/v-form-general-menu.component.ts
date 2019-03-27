import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-v-form-general-menu',
    templateUrl: './v-form-general-menu.component.html',
    styleUrls: ['./v-form-general-menu.component.css']
})
export class VFormGeneralMenuComponent implements OnInit, AfterViewInit {

    @ViewChild('generalInfoMenu') menuElement: ElementRef;
    @Output() scrollToEmitter = new EventEmitter<string>();

    sticky: boolean = false;
    elementPosition: any;
    activeItem: string;

    menuItems = [
        {title: 'Basic Form Information', target: 'basicInfo'},
        {title: 'Period', target: 'period'},
        {title: 'Form Dates', target: 'formDates'},
        {title: 'Eligible Accounts', target: 'eligibleAccounts'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.elementPosition = this.menuElement.nativeElement.offsetParent.offsetTop;
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        const windowScroll = window.pageYOffset;
        this.sticky = (windowScroll >= this.elementPosition);
    }

    onScrollTo(target) {
        this.activeItem = target;
        this.scrollToEmitter.emit(target);
    }
}
