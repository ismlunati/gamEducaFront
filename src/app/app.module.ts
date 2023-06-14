import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebMainModule } from './web-main/web-main.module';
import { JwtInterceptor } from './usuario/JwtInterceptor';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { RetoModule } from './retos/reto.module';
import { TemaModule } from './tema/tema.module';
import { ArtefactosModule } from './artefactos/artefactos.module';
import { LogrosModule } from './logros/logros.module';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    HttpClientModule,
    WebMainModule,
    AsignaturaModule,
    TemaModule,
    RetoModule,
    ArtefactosModule,
    LogrosModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
