import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from './estadisticas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html'
  
})
export class EstadisticasComponent implements OnInit {


  id!:number;


  constructor(private estadisticaService: EstadisticasService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;




  }

}
