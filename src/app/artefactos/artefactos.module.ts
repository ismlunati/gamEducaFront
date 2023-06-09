import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtefactosComponent } from './artefactos.component';
import { ListadoArtefactosComponent } from './listado-artefactos/listado-artefactos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnadirArtefactosComponent } from './anadir-artefactos/anadir-artefactos.component';



@NgModule({
  declarations: [
  ArtefactosComponent,
  ListadoArtefactosComponent,
  AnadirArtefactosComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], 
  exports:[
    ArtefactosComponent,
    ListadoArtefactosComponent,
    ArtefactosComponent


  ]
})
export class ArtefactosModule { }
