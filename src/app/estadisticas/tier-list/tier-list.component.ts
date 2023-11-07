import { TierList } from './../../clasesGeneral/TierList';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EstadisticasService } from '../estadisticas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['../styles.css']
})
export class TierListComponent {
  tierListForm: FormGroup;
  
  id!:number;

  constructor(private fb: FormBuilder, private estadisticaService: EstadisticasService, private route: ActivatedRoute) {
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

    this.tierListForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tiers: this.fb.array([])
    });
  }

  get tiers() {
    return this.tierListForm.get('tiers') as FormArray; // Cast to FormArray
  }

  addTier() {
    const tierGroup = this.fb.group({
      nombre: ['', Validators.required],
      color: ['#FFFFFF', Validators.required]  // Default color white
    });

    this.tiers.push(tierGroup);
  }

  removeTier(index: number) {
    this.tiers.removeAt(index); // Use removeAt instead of splice for FormArray
  }

  submit() {

    if (this.tierListForm.valid) {
      const tierListData = this.tierListForm.value;
      // We need to type tier explicitly
      tierListData.tiers.forEach((tier: { nombre: string; color: string; alumnos: any[] }) => {
        tier.alumnos = [];  // Ensure alumnos array is empty
      });

      console.log('Tier List to send:', tierListData);

      this.estadisticaService.postTierList(this.id, this.tierListForm.value).subscribe((response:TierList) => {

        console.log("Post exitoso", response);


      })

      // Aquí llamarías a tu servicio para enviar los datos a tu backend
    }
  }
}
