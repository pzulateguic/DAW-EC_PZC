import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeCompComponent } from './home-comp/home-comp.component';

import { ListaContactosCompComponent } from './lista-contactos-comp/lista-contactos-comp.component';
import { ContactosCompComponent } from './contactos-comp/contactos-comp.component';



@NgModule({
  declarations: [
    AppComponent,

    HomeCompComponent,

     ListaContactosCompComponent,
     ContactosCompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
