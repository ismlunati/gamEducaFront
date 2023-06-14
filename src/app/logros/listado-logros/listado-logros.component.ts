import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Logro } from 'src/app/clasesGeneral/Logro';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-listado-logros',
  templateUrl: './listado-logros.component.html'
})
export class ListadoLogrosComponent implements OnInit {


  id!: number;
  logros: Logro[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

 

    this.asignaturaService.getLogrosPorAsignatura(this.id).subscribe(logros => {
      this.logros = logros;
      console.log("procedo a imprimir las asignaturas",this.logros);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'logros',id,'editar']);
  }


  borrarLogro(idLogro: number): void {
    this.asignaturaService.borrarLogro(idLogro, this.id).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.logros = this.logros.filter(logro => logro.id !== idLogro);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {
      console.log(this.authService.getUserFromLocalStorage()?.roles[0].rolNombre)
      return true;
    } else {

      return false;
    }
  }

}
