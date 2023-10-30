import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../estadisticas.service';
import { ActivatedRoute } from '@angular/router';
import { EstadisticasPreguntasPorTemasDTO } from 'src/app/clasesGeneral/EstadisticasPreguntasPorTemasDTO';

@Component({
  selector: 'app-preguntas-por-tema',
  templateUrl: './preguntas-por-tema.component.html'
})
export class PreguntasPorTemaComponent implements OnInit {

  id!:number;

  temasUsuario!:EstadisticasPreguntasPorTemasDTO[];


  constructor(private estadisticaService: EstadisticasService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;


    this.estadisticaService.getEstadisticas(this.id).subscribe(estadisticas=> {
      
      console.log(estadisticas); 
       
       this.temasUsuario= estadisticas;
       
     });
  }

}
