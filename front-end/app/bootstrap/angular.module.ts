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
import { AngularComponent } from "@/components/angular/angular.component";

// —————————————————————— Routes ——————————————————————
import { HomePageComponent } from "@/routes/home/home.component";
import { Error404PageComponent } from "@/routes/error404/error404.component";

const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "**", component: Error404PageComponent }
];

// —————————————————————— Servies ——————————————————————
import { SampleService } from "@/service/sample.service";

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

    // Routes:
    HomePageComponent,
    Error404PageComponent
  ],
  providers: [ 
    Title
  ],
  bootstrap: [ AngularComponent ]
})
export class AngularModule {}