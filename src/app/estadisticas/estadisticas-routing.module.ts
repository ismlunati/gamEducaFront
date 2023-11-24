import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { EstadisticasComponent } from "./estadisticas.component";
import { PreguntasPorTemaComponent } from "./preguntas-por-tema/preguntas-por-tema.component";
import { PreguntasPorAlumnosComponent } from "./preguntas-por-alumnos/preguntas-por-alumnos.component";
import { TestPorTestComponent } from "./test-por-test/test-por-test.component";
import { TestPorAlumnosComponent } from "./test-por-alumnos/test-por-alumnos.component";
import { ReportesAlumnosComponent } from "./reportes-alumnos/reportes-alumnos.component";
import { PreguntasReportadasComponent } from "./preguntas-reportadas/preguntas-reportadas.component";
import { TierListComponent } from "./tier-list/tier-list.component";
import { TierListEditorComponent } from "./tier-list-editor/tier-list-editor.component";


export const estadisticasRoutes: Routes = [
    {
        path: '',
        component: EstadisticasComponent,
        children: [


            { path: 'preguntasPorTemas',         component: PreguntasPorTemaComponent },
            { path: 'preguntasPorAlumnos',       component: PreguntasPorAlumnosComponent },
            { path: 'testPorTest',               component: TestPorTestComponent },
            { path: 'testPorAlumnos',            component: TestPorAlumnosComponent },
            { path: 'reportesRealizados',        component: ReportesAlumnosComponent },
            { path: 'preguntasReportadas',       component: PreguntasReportadasComponent },
            { path: 'crearTierList',             component: TierListComponent },
            { path: 'configurarTierList',             component: TierListEditorComponent },
            // { path: 'añadir', component: AnadirLogrosComponent },
            // { path: ':id/editar', component: AnadirLogrosComponent }

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(estadisticasRoutes)],
    exports: [RouterModule]
  })

  export class EstadisticasRoutingModule { }
  