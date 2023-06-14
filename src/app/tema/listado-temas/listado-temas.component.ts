import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Tema } from 'src/app/clasesGeneral/Tema';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-listado-temas',
  templateUrl: './listado-temas.component.html'
})
export class ListadoTemasComponent implements OnInit {

  id!: number;
  temas: Tema[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

 

    this.asignaturaService.getTemasPorAsignatura(this.id).subscribe(temas => {
      this.temas = temas;
      console.log("procedo a imprimir las asignaturas",this.temas);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'temas',id,'editar']);
  }


  borrarTema(idTema: number): void {
    this.asignaturaService.borrarTema(idTema, this.id).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.temas = this.temas.filter(tema => tema.id !== idTema);
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
