import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroeFilterPipe } from './heroes/heroe-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';
@NgModule({
  declarations: [
    AppComponent,
   // HeroesComponent,
  //  HeroesListComponent,
   HeroeFilterPipe,
   OperasBasComponent,
   CinepolisComponent,
   ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

