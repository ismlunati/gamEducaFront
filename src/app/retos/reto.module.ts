import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RetosComponent } from './retos.component';
import { ListadoRetosComponent } from './listado-retos/listado-retos.component';
import { AnadirRetosComponent } from './anadir-retos/anadir-retos.component';





@NgModule({
  declarations: [
    RetosComponent,
    ListadoRetosComponent,
    AnadirRetosComponent

  ],
  exports:[
    RetosComponent,
    ListadoRetosComponent,
    AnadirRetosComponent
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class RetoModule { }
