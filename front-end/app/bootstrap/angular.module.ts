import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// —————————————————————— Components ——————————————————————
import { AngularComponent } from '@/components/angular/angular.component';
import { NavComponent } from '@/components/nav/nav.component';

// —————————————————————— Routes ——————————————————————
import { HomePageComponent } from '@/routes/home/home.component';
import { SecondPageComponent } from '@/routes/second/second.component';
import { Error404PageComponent } from '@/routes/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: '**', component: Error404PageComponent }
];

// —————————————————————— Servies ——————————————————————
import { SampleService } from '@/services/sample.service';

// ———————————————————————————————— NgModule ————————————————————————————————
@NgModule({
  declarations: [
    // Components
    AngularComponent,
    NavComponent,

    // Routes:
    HomePageComponent,
    SecondPageComponent,
    Error404PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    FormsModule, ReactiveFormsModule,

    // Router:
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    Title,
    SampleService
  ],
  bootstrap: [AngularComponent]
})
export class AngularModule {}
