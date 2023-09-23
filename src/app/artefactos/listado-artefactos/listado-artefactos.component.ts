import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Artefacto } from 'src/app/clasesGeneral/Artefacto';
import { ArtefactoCompraDTO } from 'src/app/clasesGeneral/ArtefactoCompraDTO';
import { EstadoCompra } from 'src/app/clasesGeneral/EstadoCompra';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-listado-artefactos',
  templateUrl: './listado-artefactos.component.html',
  providers: [DatePipe]
})
export class ListadoArtefactosComponent implements OnInit {

  id!: number;
  artefactos: Artefacto[] = [];
  artefactosFiltrados: Artefacto[] = [];
  artefactosAlumno: ArtefactoCompraDTO[] = [];


  estadoSeleccionado:EstadoCompra= EstadoCompra.COMPRADO;


  listas: string[] = ['Tienda', 'Mis artefactos'];  // Opciones para el select
  listaSeleccionada: string = 'Tienda';


  public estados = Object.values(EstadoCompra);




  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

 

    this.asignaturaService.getArtefactosPorAsignatura(this.id).subscribe(artefactos => {
      this.artefactos = artefactos;
      this.artefactosFiltrados=artefactos;
      console.log("procedo a imprimir las artefactos",this.artefactos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


    this.asignaturaService.getArtefactosPorAlumno(this.id).subscribe(artefactos => {
      this.artefactosAlumno = artefactos;
      console.log("procedo a imprimir las artefactos",this.artefactos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


    if(this.esProfesor()){
      this.listas= ['Tienda', 'Peticiones de uso'];
    }

  }


  filtrarPorEstado():void{

    this.artefactosAlumno= this.artefactosAlumno.filter(artefacto=> artefacto.estadoDeLaCompra===this.estadoSeleccionado);

  }


  borrarArtefacto(idArtefacto: number): void {
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


  comprarArtefacto(idArtefacto: number): void {
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