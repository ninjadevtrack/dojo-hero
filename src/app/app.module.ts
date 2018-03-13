import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from '../routes/routes';

//Components

import { LayoutComponent } from './layout/layout.component'
import { HeroesComponent } from './heroes/heroes.component'
import { LandingComponent } from './landing/landing.component'

//Services
import { HeroService } from '../services/hero.service';
import { HeroFactoryService } from '../services/hero-factory.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [
    HeroService,
    HeroFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }