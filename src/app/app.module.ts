import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtefactosModule } from './artefactos/artefactos.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { LogrosModule } from './logros/logros.module';
import { TestModule } from './preguntas/test.module';
import { RetoModule } from './retos/reto.module';
import { TemaModule } from './tema/tema.module';
import { JwtInterceptor } from './usuario/JwtInterceptor';
import { UsuarioModule } from './usuario/usuario.module';
import { WebMainModule } from './web-main/web-main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent  ],
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
    LogrosModule,
    TestModule,
    EstadisticasModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
