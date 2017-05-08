import { NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./angular/app.component";
import { HomePageComponent } from "./routes/home/home.component";
import { Error404PageComponent } from "./routes/error404/error404.component";

const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "**", component: Error404PageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    Error404PageComponent
  ],
  providers: [ 
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}