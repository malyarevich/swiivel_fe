import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export const StorybookImports = [RouterModule.forRoot([], { useHash: true })];

export const StorybookProviders = [[{ provide: APP_BASE_HREF, useValue: '/' }]];