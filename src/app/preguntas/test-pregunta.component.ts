import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Pregunta } from './pregunta.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-pregunta',
  templateUrl: './test-pregunta.component.html'
})
export class TestPreguntaComponent implements OnInit {
  
  pregunta!: Pregunta;
  selectedRespuesta!: number; // Para almacenar la respuesta seleccionada

  constructor(private router: Router, private testService: TestService) {}

  ngOnInit(): void {
    // Ahora puedes obtener la pregunta directamente del servicio sin hacer una nueva llamada al backend
    this.pregunta = this.testService.preguntaActual;
  }
  

  continuar(): void {
    console.log("Test-Pregunta.Component: continuar");
    const idAsignatura = 1; // Puedes definirlo como más te convenga
    const idTest = 2; // Puedes definirlo como más te convenga
    const inicio = false; // Puedes definirlo como más te convenga

    this.testService.realizarTest(this.selectedRespuesta, idAsignatura, idTest, inicio).subscribe(
      data => {
        this.pregunta = data;
        if (this.pregunta.id === -1) {
          console.log("FIIIIIIIIIIIIIIIIIIIN");
          this.router.navigate(['/test-resultados', idAsignatura, idTest]);
        }
      }
    );
  }
}

