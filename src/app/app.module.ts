// ---------------------- Angular ----------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ---------------------- Components ----------------------
import { AppComponent } from './app.component';
import { Router, PageComponents } from './app-routing';
import { HelloComponent } from './';

// ---------------------- Servies ----------------------
import { SampleService } from './';

// ---------------------- NgModule ----------------------
@NgModule({
  declarations: [
    AppComponent,
    ...PageComponents,
    HelloComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    Router,
  ],

  providers: [
    SampleService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
