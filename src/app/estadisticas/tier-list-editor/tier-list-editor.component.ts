import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstadisticasService } from '../estadisticas.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { ListaAlumnosAndTierListDTO } from 'src/app/clasesGeneral/ListaAlumnosAndTierListDTO';
import { Alumno } from 'src/app/clasesGeneral/Alumno';
import { ChangeDetectorRef } from '@angular/core';
import { AlumnosAndTiersDTO } from 'src/app/clasesGeneral/AlumnosAndTiersDTO';


@Component({
  selector: 'app-tier-list-editor',
  templateUrl: './tier-list-editor.component.html',
  styleUrls: ['../styles.css']
})
export class TierListEditorComponent implements OnInit {
  tierListForm!: FormGroup;
  tierListId!: number;
  alumnos: any[] = []; // Cambia esto por tu tipo de alumnos
  alumnoTiers!: ListaAlumnosAndTierListDTO ; // Cambia esto por tu tipo de tiers

  constructor(
    private estadisticaService: EstadisticasService,

  ) { }

  ngOnInit(): void {
    //this.tierListId = this.route.snapshot.params['id'];
    this.tierListId=3;
    console.log("Hola mundo");
    this.loadTierList(this.tierListId);
  }

  loadTierList(id: number): void {

    this.estadisticaService.getTier(1,this.tierListId ).subscribe(response => {

      this.alumnoTiers= response;

      console.log(this.alumnoTiers);

    })
    // Obtén los datos de la TierList y llena el formulario y los tiers
  }

  onDrop(event: CdkDragDrop<Alumno[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  onSave() {
    const alumnosAndTiers: AlumnosAndTiersDTO = {
      tiers: {}
    };

    this.alumnoTiers.tierList.tiers.forEach(tier => {
      alumnosAndTiers.tiers[tier.id.toString()] = tier.alumnos.map(alumno => alumno.id);
    });

    // Aquí debes llamar a tu servicio para enviar los datos al backend
    // this.miServicio.enviarAlumnosAndTiers(alumnosAndTiers).subscribe(/* ... */);
  }
}
