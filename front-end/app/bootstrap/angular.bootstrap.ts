import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
enableProdMode();

import { AngularModule } from "./angular.module";

platformBrowserDynamic().bootstrapModule( AngularModule );