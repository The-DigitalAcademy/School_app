import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [

    {
path: '**',
component: ErrorComponent,

    },
];
