import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { WebMainModule } from './web-main/web-main.module';
import { JwtInterceptor } from './usuario/JwtInterceptor';
import { ListadoComponent } from './asignatura/asignatura-main/listado/listado.component';
import { InscripcionComponent } from './asignatura/asignatura-main/inscripcion/inscripcion.component';
import { AsignaturaModule } from './asignatura/asignatura.module';


@NgModule({
  declarations: [
    AppComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    HttpClientModule,
    WebMainModule,
    AsignaturaModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
