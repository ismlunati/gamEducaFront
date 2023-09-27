import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { ListadoTemasComponent } from './listado-temas/listado-temas.component';
import { AnadirTemaComponent } from './anadir-tema/anadir-tema.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';





@NgModule({
  declarations: [
    TemasComponent,
    ListadoTemasComponent,
    AnadirTemaComponent,
    CrearPreguntaComponent


  ],
  exports:[
  ListadoTemasComponent,
  AnadirTemaComponent,
  TemasComponent,

    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TemaModule { }
