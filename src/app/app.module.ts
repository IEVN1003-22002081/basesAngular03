import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
   // HeroesComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
