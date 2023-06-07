import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';
import { FooterComponent } from './web-main/footer/footer.component';
import { ListadoComponent } from './asignatura/asignatura-main/listado/listado.component';
import { InscripcionComponent } from './asignatura/asignatura-main/inscripcion/inscripcion.component';
import { SolicitudesPendientesComponent } from './asignatura/solicitudes-pendientes/solicitudes-pendientes.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AsignaturaMainComponent } from './asignatura/asignatura-main/asignatura-main.component';
import { AsignaturaAnadirComponent } from './asignatura/asignatura-anadir/asignatura-anadir.component';

const routes: Routes = [

{
  path:'',
  component:FooterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'asignaturas',
  component:AsignaturaComponent,
  children: [
    {
      path:':id/listaSolicitudesPendientes',
      component:SolicitudesPendientesComponent
    },
    {
      path:'',
      component:AsignaturaMainComponent
    },
    {
      path:'añadir',
      component:AsignaturaAnadirComponent
    },
    {
      path:':id/editar',
      component:AsignaturaAnadirComponent
    }

  ]
},
{
  path:'inscripcion',
  component:InscripcionComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
