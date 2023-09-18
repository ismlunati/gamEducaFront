import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Router } from '@angular/router';
import { Pregunta } from './pregunta.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html'
})
export class TestListComponent implements OnInit {

  tests: any[] = [];
  pregunta!: Pregunta;


  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    console.log("Test-List.Component: ngOnInit");
    this.testService.getTests().subscribe(data => {
      this.tests = data;
    });
  }

  realizarTest(testId: number) {
    console.log("Test-List.Component: realizarTest");
    this.testService.realizarTest(0, 1, testId, true).subscribe(
      response => {
        this.pregunta = this.testService.preguntaActual;
        if (this.pregunta.id === -1) {
          console.log("FIIIIIIIIIIIIIIIIIIIN");
        } else {
          console.log("Test-List.Component: respuesta -> Ir a test-pregunta");
          this.router.navigate(['/test-pregunta', 1, testId]);   
        }
      },
      error => {
        console.error("Ha ocurrido un error", error);
      }
    );
  }
}
