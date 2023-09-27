import { CreateTestComponent } from './preguntas/testCreate.component/createTest.component';
import { TestResultadosComponent } from './preguntas/testResultado.component/test-resultados.component';
import { TestPreguntaComponent } from './preguntas/testPregunta.component/test-pregunta.component';
import { TestListComponent } from './preguntas/testList.component/test-list.component';
import { AnadirArtefactosComponent } from './artefactos/anadir-artefactos/anadir-artefactos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { FooterComponent } from './web-main/footer/footer.component';
import { InscripcionComponent } from './asignatura/asignatura-main/inscripcion/inscripcion.component';
import { SolicitudesPendientesComponent } from './asignatura/solicitudes-pendientes/solicitudes-pendientes.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AsignaturaMainComponent } from './asignatura/asignatura-main/asignatura-main.component';
import { AsignaturaAnadirComponent } from './asignatura/asignatura-anadir/asignatura-anadir.component';
import { AsignaturaNavigateComponent } from './asignatura/asignatura-navigate/asignatura-navigate.component';
import { RetosComponent } from './retos/retos.component';
import { TemasComponent } from './tema/temas.component';
import { ListadoTemasComponent } from './tema/listado-temas/listado-temas.component';
import { AnadirTemaComponent } from './tema/anadir-tema/anadir-tema.component';
import { ArtefactosComponent } from './artefactos/artefactos.component';
import { ListadoArtefactosComponent } from './artefactos/listado-artefactos/listado-artefactos.component';
import { LogrosComponent } from './logros/logros.component';
import { ListadoLogrosComponent } from './logros/listado-logros/listado-logros.component';
import { AnadirLogrosComponent } from './logros/anadir-logros/anadir-logros.component';
import { ListadoRetosComponent } from './retos/listado-retos/listado-retos.component';
import { AnadirRetosComponent } from './retos/anadir-retos/anadir-retos.component';
import { TestViewComponent } from './preguntas/test-view.component';


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
        children: [
          {
            path: 'listado',
            component: ListadoTemasComponent
          },
          {
            path: 'añadir',
            component: AnadirTemaComponent
          },
          {
            path: ':id/editar',
            component: AnadirTemaComponent
          },
        ]
      },
      {
        path: ':id/retos',
        component: RetosComponent,
        children: [
          {
            path: 'listado',
            component: ListadoRetosComponent
          },
          {
            path: 'añadir',
            component: AnadirRetosComponent
          },
          {
            path: ':id/editar',
            component: AnadirRetosComponent
          },
        ]
      },
      {
        path: ':id/artefactos',
        component: ArtefactosComponent,
        children: [


          {
            path: 'listado',
            component: ListadoArtefactosComponent
          },

          {
            path: 'añadir',
            component: AnadirArtefactosComponent
          },
          {
            path: ':id/editar',
            component: AnadirArtefactosComponent
          }



        ]
      },
      {
        path: ':id/logros',
        component: LogrosComponent,
        children: [


          {
            path: 'listado',
            component: ListadoLogrosComponent
          },

          {
            path: 'añadir',
            component: AnadirLogrosComponent
          },
          {
            path: ':id/editar',
            component: AnadirLogrosComponent
          }



        ]
      },
      {
        path: ':id/test',
        component: TestViewComponent,
        children: [


          {
            path: 'listado',
            component: TestListComponent
          },

          {
            path: 'añadir',
            component: CreateTestComponent
          },
          {
            path: ':id/editar',
            component: AnadirLogrosComponent
          }
          ,
          {
            path: 'test-pregunta/:idTest',
            component: TestPreguntaComponent
          }


        ]
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
