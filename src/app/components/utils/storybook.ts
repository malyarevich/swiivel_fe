import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {InterceptorsModule} from '@app/utils';

export const StorybookImports = [
    RouterModule.forRoot([], { useHash: true }),
    // InterceptorsModule.forRoot(),
];

export const StorybookProviders = [[{ provide: APP_BASE_HREF, useValue: '/' }]];