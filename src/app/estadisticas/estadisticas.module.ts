import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { estadisticasRoutes } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';
import { PreguntasPorTemaComponent } from './preguntas-por-tema/preguntas-por-tema.component';



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
    RouterModule.forChild(estadisticasRoutes),
    
    
  ],
  exports:[
    PreguntasPorTemaComponent,
    EstadisticasComponent  ]
})
export class EstadisticasModule { }
