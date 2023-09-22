import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { AlumnoRetoDTO } from 'src/app/clasesGeneral/AlumnoRetoDTO';
import { EstadoReto } from 'src/app/clasesGeneral/EstadoReto';
import { Reto } from 'src/app/clasesGeneral/Reto';
import { AuthService } from 'src/app/usuario/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estados-profesor',
  templateUrl: './lista-estados-profesor.component.html'
})
export class ListaEstadosProfesorComponent implements OnInit {

  
  @Input() retosAsignados?: AlumnoRetoDTO[];

  @Input() estadoSeleccionado?: EstadoReto;


  public tablaData: any[] = [];





  id!: number;
  retos: Reto[] = [];
  retosUsuario: Reto[] = [];

  retosFiltrados: Reto[] = [];

  listas: string[] = ['Lista retos', 'Retos inscritos'];  // Opciones para el select
  listaSeleccionada: string = 'Lista retos';

  public estados = Object.values(EstadoReto);


  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;


    this.retosAsignados!.forEach((alumnoReto) => {
      const alumno = alumnoReto.alumno;
      alumnoReto.retoConEstado.forEach((retoConEstado) => {
        const reto = retoConEstado.reto;
        const estado = retoConEstado.estado;
        this.tablaData.push({
          alumno: alumno, // Suponiendo que el alumno tiene un campo nombre
          ...reto, // Suponiendo que reto es un objeto con varios campos
          estado // Suponiendo que quieres mostrar el estado también
        });
      });
    });


    console.log("Retos asignador", this.retosAsignados)
    console.log("Retos tabla",this.tablaData)
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

  aceptarReto(idReto: number): void {
    this.asignaturaService.aceptarReto(idReto, this.id).subscribe(
      res => {
        console.log('reto aceptado');
        //this.retos = this.retos.filter(reto => reto.id !== idReto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error aceptando reto', err);
      }
    );
  }

  rechazarReto(idReto: number): void {
    this.asignaturaService.rechazarReto(idReto, this.id).subscribe(
      res => {
        console.log('reto rechazado');
        //this.retos = this.retos.filter(reto => reto.id !== idReto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error rechazando reto', err);
      }
    );
  }

  unirseReto(idReto: number, nombreReto:String): void {
    this.asignaturaService.unirseReto( this.id, idReto).subscribe(
      res => {
        console.log('Unido a reto exitosamente');
        Swal.fire('Inscripcion',`Se ha realizado la inscripción al reto ${nombreReto} con exito`,'success');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Inscripcion',`No se ha podido realizar la inscripción al reto "${nombreReto}" con exito`,'error');
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
