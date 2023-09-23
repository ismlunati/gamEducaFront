import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { AlumnoRetoDTO } from 'src/app/clasesGeneral/AlumnoRetoDTO';
import { Artefacto } from 'src/app/clasesGeneral/Artefacto';
import { ArtefactoCompraDTO } from 'src/app/clasesGeneral/ArtefactoCompraDTO';
import { EstadoCompra } from 'src/app/clasesGeneral/EstadoCompra';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-listado-artefactos-alumnos',
  templateUrl: './listado-artefactos-alumnos.component.html'

})
export class ListadoArtefactosAlumnosComponent implements OnInit {









  @Input() artefactoCompras?: ArtefactoCompraDTO[];

  id!: number;
  artefactos: Artefacto[] = [];
  artefactosFiltrados: Artefacto[] = [];
  artefactosAlumno: ArtefactoCompraDTO[] = [];


  estadoSeleccionado:EstadoCompra= EstadoCompra.COMPRADO;




  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;



  }






  canjearArtefacto(idArtefacto: number): void {
    this.asignaturaService.borrarArtefacto( this.id,idArtefacto).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.artefactos = this.artefactos.filter(tema => tema.id !== idArtefacto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }


  aceptarCanjeo(idArtefacto: number): void {
    this.asignaturaService.borrarArtefacto( this.id,idArtefacto).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.artefactos = this.artefactos.filter(tema => tema.id !== idArtefacto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }

  denegarCanjeo(idArtefacto: number): void {
    this.asignaturaService.borrarArtefacto( this.id,idArtefacto).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.artefactos = this.artefactos.filter(tema => tema.id !== idArtefacto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }



  
  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'artefactos',id,'editar']);
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}