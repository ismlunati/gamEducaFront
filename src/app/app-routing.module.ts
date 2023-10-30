import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefactosComponent } from './artefactos/artefactos.component';
import { AsignaturaAnadirComponent } from './asignatura/asignatura-anadir/asignatura-anadir.component';
import { AsignaturaMainComponent } from './asignatura/asignatura-main/asignatura-main.component';
import { InscripcionComponent } from './asignatura/asignatura-main/inscripcion/inscripcion.component';
import { AsignaturaNavigateComponent } from './asignatura/asignatura-navigate/asignatura-navigate.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { SolicitudesPendientesComponent } from './asignatura/solicitudes-pendientes/solicitudes-pendientes.component';
import { LogrosComponent } from './logros/logros.component';
import { TestViewComponent } from './preguntas/test-view.component';
import { TestResultadosComponent } from './preguntas/testResultado.component/test-resultados.component';
import { RetosComponent } from './retos/retos.component';
import { TemasComponent } from './tema/temas.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { FooterComponent } from './web-main/footer/footer.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


const routes: Routes = [

  {
    path: '',
    component: FooterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'asignaturas',
    component: AsignaturaComponent,
    children: [
      {
        path: ':id/listaSolicitudesPendientes',
        component: SolicitudesPendientesComponent
      },
      {
        path: '',
        component: AsignaturaMainComponent
      },
      {
        path: 'añadir',
        component: AsignaturaAnadirComponent
      },
      {
        path: ':id/editar',
        component: AsignaturaAnadirComponent
      },
      {
        path: ':id',
        component: AsignaturaNavigateComponent
      },
      {
        path: ':id/temas',
        component: TemasComponent,
        loadChildren: () => import('./tema/tema.module').then(m => m.TemaModule)
      },
      {
        path: ':id/retos',
        component: RetosComponent,
        loadChildren: () => import('./retos/reto.module').then(m => m.RetoModule)

      },
      {
        path: ':id/artefactos',
        component: ArtefactosComponent,
        loadChildren: () => import('./artefactos/artefactos.module').then(m => m.ArtefactosModule)

      },
      {
        path: ':id/logros',
        component: LogrosComponent,
        loadChildren: () => import('./logros/logros.module').then(m => m.LogrosModule)

      },
      {
        path: ':id/test',
        component: TestViewComponent,
        loadChildren: () => import('./preguntas/test.module').then(m => m.TestModule)

      },      
      {
        path: 'estadisticas',
        loadChildren: () => import('./estadisticas/estadisticas.module').then(m => m.EstadisticasModule)
      },


    ]
  },


  {
    path: 'inscripcion',
    component: InscripcionComponent
  },

  {
    path: 'test-resultados/:idAsignatura/:idTest',
    component: TestResultadosComponent
  }, // Añadir esta línea para la ruta de Test


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
