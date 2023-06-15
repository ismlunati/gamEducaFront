import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Reto } from 'src/app/clasesGeneral/Reto';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-listado-retos',
  templateUrl: './listado-retos.component.html'
})
export class ListadoRetosComponent implements OnInit {

  id!: number;
  retos: Reto[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

 

    this.asignaturaService.getRetosPorAsignatura(this.id).subscribe(retos => {
      this.retos = retos;
      console.log("Retos",this.retos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'retos',id,'editar']);
  }


  borrarReto(idReto: number): void {
    this.asignaturaService.borrarReto(idReto, this.id).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.retos = this.retos.filter(reto => reto.id !== idReto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {
      return true;
    } else {

      return false;
    }
  }

}
