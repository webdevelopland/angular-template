import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent },
];

export const PageComponents = [
  HomePageComponent,
  NotFoundPageComponent,
];

export const Router = RouterModule.forRoot(appRoutes, { useHash: false });
