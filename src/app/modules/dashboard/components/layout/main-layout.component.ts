import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Go } from '../../shared/utils/store/router-store';

@Component({
    selector: 'app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
    public isMenuOpen = false;

    constructor(
        private readonly store: Store<any>
    ) {}

    toggleMenu (): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    openPage (path: string): void {
        this.toggleMenu();
        setTimeout(() => {
            // this.store.dispatch(new Go([path]));
        }, 400);
    }
}
