import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-test-resultados',
  templateUrl: './test-resultados.component.html'
})
export class TestResultadosComponent implements OnInit {

  resultados: any;  // Declaras la propiedad 'resultados' aquí

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    const idAsignatura = 1; // Obtén esto de alguna manera, quizás de la URL
    const idTest = 2; // Igual que idAsignatura
  
    this.testService.getTestResultados(idAsignatura, idTest).subscribe(
      data => {
        this.resultados = data; // 'resultados' es una variable de la clase donde almacenas el objeto PreguntaElegibleDTO
      },
      error => {
        console.error('Ha ocurrido un error al obtener los resultados: ', error);
      }
    );
  }
  

}
