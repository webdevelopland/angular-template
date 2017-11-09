// —————————————————————— Angular ——————————————————————
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// —————————————————————— Router ——————————————————————
import { Router, RouteComponents } from "./routing";

// —————————————————————— Components ——————————————————————
import { AngularComponent } from '@/components/angular/angular.component';
import { NavComponent } from '@/components/nav/nav.component';

// —————————————————————— Servies ——————————————————————
import { SampleService } from '@/services/sample.service';

// —————————————————————— NgModule ——————————————————————
@NgModule({
  declarations: [
    AngularComponent,
    NavComponent
  ]
    .concat(RouteComponents),

  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    FormsModule, ReactiveFormsModule,
    Router
  ],

  providers: [
    Title,
    SampleService
  ],

  bootstrap: [AngularComponent]
})
export class AngularModule {}