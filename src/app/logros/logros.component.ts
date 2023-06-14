import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../asignatura/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { Logro } from '../clasesGeneral/Logro';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html'
})
export class LogrosComponent implements OnInit {

  id!: number;
  logros: Logro[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // El signo más convierte el id a número
    });


    this.asignaturaService.getLogrosPorAsignatura(this.id).subscribe(logros => {
      this.logros = logros;
      console.log("procedo a imprimir las asignaturas",this.logros);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

}
