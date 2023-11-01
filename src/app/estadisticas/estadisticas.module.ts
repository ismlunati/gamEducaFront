import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { estadisticasRoutes } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';
import { PreguntasPorTemaComponent } from './preguntas-por-tema/preguntas-por-tema.component';
import { PreguntasPorAlumnosComponent } from './preguntas-por-alumnos/preguntas-por-alumnos.component';
import { TestPorAlumnosComponent } from './test-por-alumnos/test-por-alumnos.component';
import { TestPorTestComponent } from './test-por-test/test-por-test.component';
import { ReportesAlumnosComponent } from './reportes-alumnos/reportes-alumnos.component';
import { PreguntasReportadasComponent } from './preguntas-reportadas/preguntas-reportadas.component';



@NgModule({
  declarations: [
    PreguntasPorTemaComponent,
    EstadisticasComponent,
    PreguntasPorAlumnosComponent,
    TestPorAlumnosComponent,
    TestPorTestComponent,
    ReportesAlumnosComponent,
    PreguntasReportadasComponent
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
