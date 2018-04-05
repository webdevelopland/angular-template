// ---------------------- Angular ----------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    Router
  ],

  providers: [
    ...Services
  ],

  bootstrap: [AngularComponent]
})
export class AngularModule { }
