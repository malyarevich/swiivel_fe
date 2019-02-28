import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
})
export class LayoutComponent {
    public isMenuOpen = false;

    constructor(
    ) {}

    toggleMenu (): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

}
