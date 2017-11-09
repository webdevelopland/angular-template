import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@/routes/home/home.component';
import { SecondPageComponent } from '@/routes/second/second.component';
import { Error404PageComponent } from '@/routes/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: '**', component: Error404PageComponent }
];

var RouteComponents = [];
for (let route of appRoutes) {
  RouteComponents.push(route.component);
}

export var Router = RouterModule.forRoot(appRoutes, { useHash: false });
export { RouteComponents };