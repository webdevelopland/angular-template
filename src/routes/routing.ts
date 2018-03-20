import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home/home.component';
import { Error404PageComponent } from './error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: Error404PageComponent }
];

export var Router = RouterModule.forRoot(appRoutes, { useHash: false });
export { HomePageComponent, Error404PageComponent };
