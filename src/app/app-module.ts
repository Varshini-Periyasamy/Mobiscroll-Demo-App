import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

@NgModule({
  declarations: [
    App,
    Home,
    About
  ],
  imports: [
    BrowserModule,
    MbscModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    CustomRouteReuseStrategy,
        {
            provide: RouteReuseStrategy,
            useExisting: CustomRouteReuseStrategy
        },
  ],
  bootstrap: [App]
})
export class AppModule { }
