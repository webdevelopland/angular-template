import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@/routes/home/home.component';
import { Error404PageComponent } from '@/routes/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: Error404PageComponent }
];

export var Router = RouterModule.forRoot(appRoutes, { useHash: false });
export { HomePageComponent, Error404PageComponent };
