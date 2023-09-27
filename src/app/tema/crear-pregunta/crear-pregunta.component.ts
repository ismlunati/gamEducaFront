import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/preguntas/test.service';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
})
export class CrearPreguntaComponent implements OnInit {
  preguntaForm!: FormGroup;
  idAsignatura!: number;
  idTema!: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private testService: TestService) {}

  ngOnInit(): void {
    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;
    this.idTema = +this.route.snapshot.paramMap.get('id')!;

    this.preguntaForm = this.fb.group({
      pregunta: this.fb.group({
        enunciado: ['']
      }),
      numRespuestas: [0],
      respuestas: this.fb.array([]),
      respuestaCorrecta: [''],
    });
  }

  get respuestas() {
    // Retorna el FormArray
    return (this.preguntaForm.get('respuestas') as FormArray);
  }
  
  crearRespuestas() {
    const numRespuestas = this.preguntaForm.get('numRespuestas')?.value;
    this.respuestas.clear(); // Llamada correcta a clear
    for (let i = 0; i < numRespuestas; i++) {
      this.respuestas.push(this.fb.control('')); // Llamada correcta a push
    }
  }


  toFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }


  onSubmit(){

    this.testService.crearPregunta(this.idAsignatura, this.idTema, this.preguntaForm.value).subscribe(
      response => {
        console.log('Pregunta creado exitosamente', response);
        // Puedes añadir más lógica aquí, como redirigir a otra página o mostrar un mensaje de éxito
      },
      error => {
        console.error('Hubo un error al crear la Pregunta', error);
        // Puedes manejar los errores aquí, como mostrar un mensaje de error al usuario
      }
    );


    console.log(this.preguntaForm.value)
    console.log(this.preguntaForm.value.respuestas.join(','));

  }
}
