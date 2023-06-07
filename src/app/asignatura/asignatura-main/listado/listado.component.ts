import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from '../../asignatura';
import { AsignaturaService } from '../../asignatura.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  asignaturas: Asignatura[] = [];

  @Input() alumno!: boolean;

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe(asignaturas => {
      this.asignaturas = asignaturas;
      console.log("procedo a imprimir las asignaturas",this.asignaturas);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });
  }


  borrarAsignatura(idAsignatura: number): void {
    this.asignaturaService.borrarAsignatura(idAsignatura).subscribe(
      res => {
        console.log('Asignatura borrada exitosamente');
        this.asignaturas = this.asignaturas.filter(asignatura => asignatura.id !== idAsignatura);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }

}
