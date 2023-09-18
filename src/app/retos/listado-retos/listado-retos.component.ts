import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { EstadoReto } from 'src/app/clasesGeneral/EstadoReto';
import { Reto } from 'src/app/clasesGeneral/Reto';
import { AuthService } from 'src/app/usuario/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-retos',
  templateUrl: './listado-retos.component.html'
})
export class ListadoRetosComponent implements OnInit {

  id!: number;
  retos: Reto[] = [];
  retosUsuario: Reto[] = [];

  retosFiltrados: Reto[] = [];
  estadoSeleccionado: EstadoReto= EstadoReto.EN_CURSO;

  listas: string[] = ['Lista retos', 'Retos inscritos'];  // Opciones para el select
  listaSeleccionada: string = 'Lista retos';

  public estados = Object.values(EstadoReto);


  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

 

    this.asignaturaService.getRetosPorAsignatura(this.id).subscribe(retos => {
      this.retos = retos;
      this.retosFiltrados= retos;
      console.log("Retos",this.retos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


    this.asignaturaService.getRetosPorAsignaturaUsuario(this.id).subscribe(retos => {
      this.retosUsuario = retos;
      console.log("Retos",this.retosUsuario);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

  onSelectChange() {
    if (this.listaSeleccionada === 'Lista retos') {
      this.retosFiltrados= this.retos;
    } else {
      this.retosFiltrados= this.retosUsuario;
    }
  }



  filtrarPorEstado(): void {
    
    this.retosFiltrados = this.retosUsuario.filter(reto => reto.alumnoRetos[0].estado === this.estadoSeleccionado);
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


  unirseReto(idReto: number, nombreReto:String): void {
    this.asignaturaService.unirseReto(idReto, this.id).subscribe(
      res => {
        console.log('Unido a reto exitosamente');
        Swal.fire('Inscripcion',`Se ha realizado la inscripción al reto ${nombreReto} con exito`,'success');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Inscripcion',`No se ha podido realizar la inscripción al reto ${nombreReto} con exito`,'error');
        console.error('Error uniendose a reto', err);
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
