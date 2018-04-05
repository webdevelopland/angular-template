// ---------------------- Angular ----------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ---------------------- Routing ----------------------
import { Router, PageComponents } from '@/routes/routing';

// ---------------------- Components ----------------------
import { AngularComponent } from '@/components';
import { Components } from '@/components/index.components.ts';

// ---------------------- Servies ----------------------
import { Services } from '@/services/index.services';

// ---------------------- NgModule ----------------------
@NgModule({
  declarations: [
    ...Components,
    ...PageComponents
  ],

  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    FormsModule, ReactiveFormsModule,

    Router
  ],

  providers: [...Services],

  bootstrap: [AngularComponent]
})
export class AngularModule { }
