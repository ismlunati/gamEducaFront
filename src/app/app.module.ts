import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientModule } from '@angular/common/http';

import { WebMainModule } from './web-main/web-main.module';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    HttpClientModule,
    WebMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
