import { NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule, JsonpModule } from "@angular/http";

// —————————————————————— Material ——————————————————————
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import "hammerjs";

// —————————————————————— Components ——————————————————————
import { BootstrapComponent } from "@/bootstrap/bootstrap.component";
import { AngularComponent } from "@/components/angular/angular.component";
import { NavComponent } from "@/components/nav/nav.component";

// —————————————————————— Routes ——————————————————————
import { HomePageComponent } from "@/routes/home/home.component";
import { SecondPageComponent } from "@/routes/second/second.component";
import { Error404PageComponent } from "@/routes/error404/error404.component";

const appRoutes: Routes = [
  { path: "",         component: HomePageComponent },
  { path: "second",   component: SecondPageComponent },
  { path: "**",       component: Error404PageComponent }
];

// —————————————————————— Servies ——————————————————————
import { SampleService } from "@/services/sample.service";

// ———————————————————————————————— NgModule ————————————————————————————————
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,

    // Angular Material:
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,

    // Router:
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  declarations: [
    // Components
    AngularComponent,
    BootstrapComponent,
    NavComponent,

    // Routes:
    HomePageComponent,
    SecondPageComponent,
    Error404PageComponent
  ],
  providers: [ 
    Title,
    SampleService
  ],
  bootstrap: [ AngularComponent ]
})
export class AngularModule {}