import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreguntasPorTemaComponent } from './preguntas-por-tema/preguntas-por-tema.component';
import { EstadisticasComponent } from './estadisticas.component';
import { EstadisticasRoutingModule, estadisticasRoutes } from './estadisticas-routing.module';



@NgModule({
  declarations: [
    PreguntasPorTemaComponent,
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(estadisticasRoutes)
    
  ],
  exports:[
    PreguntasPorTemaComponent,
    EstadisticasComponent
  ]
})
export class EstadisticasModule { }
