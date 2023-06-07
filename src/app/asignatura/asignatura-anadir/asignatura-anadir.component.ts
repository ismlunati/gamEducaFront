import { Profesor } from './../../clasesGeneral/Profesor';
import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../asignatura.service';
import { Asignatura } from '../asignatura';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignatura-anadir',
  templateUrl: './asignatura-anadir.component.html'})
export class AsignaturaAnadirComponent implements OnInit {

  asignaturaForm: FormGroup;

  idAsignatura:number | null = null;

  asignatura!: Asignatura;

  constructor(private fb: FormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute) {

    this.asignaturaForm = this.fb.group({
      nombre: '',
      descripcion: '',
      curso: ''
      // puedes agregar más controles de formularios aquí
    });
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idAsignatura = Number(params.get('id'));
      if (this.idAsignatura) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);

        this.asignaturaService.getAsignaturaPorId(this.idAsignatura).subscribe(asignatura => {
          this.asignatura = asignatura;
  
          console.log("Procedo a imprimir los alumnos");
          console.log("Procedo a imprimir idAsignatura");
          console.log(asignatura);
          console.log(this.idAsignatura);

          this.asignaturaForm.patchValue({
            nombre: this.asignatura.nombre,
            descripcion: this.asignatura.descripcion,
            curso: this.asignatura.curso
          });
        });


      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /save');
      }
    });


  }

  crearAsignatura(): void {
    this.asignaturaService.crearAsignatura(this.asignaturaForm.value)
      .subscribe((asignaturaCreada: Asignatura) => {
        console.log('Asignatura creada', asignaturaCreada);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


}
