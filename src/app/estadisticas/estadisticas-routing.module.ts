import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { EstadisticasComponent } from "./estadisticas.component";
import { PreguntasPorTemaComponent } from "./preguntas-por-tema/preguntas-por-tema.component";


export const estadisticasRoutes: Routes = [
    {
        path: '',
        component: EstadisticasComponent,
        children: [


            { path: 'listado', component: PreguntasPorTemaComponent },
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
  