import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// En tu componente
import { TestService } from './test.service';
import { Pregunta } from './pregunta.model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  testForm!: FormGroup;
  elegiblePreguntas: any[] = [];
  selectedPreguntas: Pregunta[] = [];
  numeroPreguntas!: number;  


// En el constructor
constructor(private fb: FormBuilder, private testService: TestService) { }
  ngOnInit(): void {
    console.log("Test.Component: ngOnInit");
    this.testForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      numeroPreguntas: ['', Validators.required],
      listaTemas: [''],
      visible: [false],
      preguntasElegibles: [false],
      fechaInicio: [''],
      fechaFin: ['']
    });
    this.testForm.get('numeroPreguntas')?.valueChanges.subscribe(value => {
      this.numeroPreguntas = value;
    });
  }

  // En tu método onSubmit
  onSubmit(event: Event): void {
    console.log("Test.Component: onSubmit");

    event.preventDefault();
    if (this.testForm.valid) {
      const selectedPreguntaIds = this.selectedPreguntas.map(pregunta => pregunta.id).join(',');
      this.testService.createTest(this.testForm.value, selectedPreguntaIds).subscribe(
        response => {
          console.log('Test creado exitosamente', response);
          // Puedes añadir más lógica aquí, como redirigir a otra página o mostrar un mensaje de éxito
        },
        error => {
          console.error('Hubo un error al crear el test', error);
          // Puedes manejar los errores aquí, como mostrar un mensaje de error al usuario
        }
      );
    }
  }

  onCheckboxChange() {
    console.log("Test.Component: onCheckboxChange");

    if (this.testForm.get('preguntasElegibles')?.value) {
      const listaTemas = this.testForm.get('listaTemas')?.value;
  
      this.testService.getElegiblePreguntas(listaTemas).subscribe(
        (preguntasElegibles: any) => {
          // Llena la variable con las preguntas elegibles
          this.elegiblePreguntas = preguntasElegibles;
        },
        (error) => {
          // Maneja el error
          console.error('Error al obtener preguntas elegibles:', error);
        }
      );
    } else {
      // Limpia la lista si el checkbox se desmarca
      this.elegiblePreguntas = [];
    }
  }

  toggleSelection(pregunta: Pregunta) {
    console.log("Test.Component: toggleSelection");
    const index = this.selectedPreguntas.indexOf(pregunta);
  
    // Si la pregunta no está en el array y no hemos alcanzado el límite
    if (index === -1 && this.selectedPreguntas.length < this.numeroPreguntas) {
      this.selectedPreguntas.push(pregunta);
    } 
    // Si la pregunta ya está en el array, la retiramos
    else if (index !== -1) {
      this.selectedPreguntas.splice(index, 1);
    }
  }
  
  
  shouldDisableCheckbox(pregunta : Pregunta) {
    console.log("Test.Component: shouldDisableCheckbox");

    if (this.selectedPreguntas.length >= this.numeroPreguntas) {
      return !this.selectedPreguntas.includes(pregunta);
    }
    return false;
  }

  isPreguntaSelected(pregunta : Pregunta): boolean {
    console.log("Test.Component: isPreguntaSelected");

    return this.selectedPreguntas.includes(pregunta);
  }
  

  fetchElegiblePreguntas() {
    console.log("Test.Component: fetchElegiblePreguntas");

    if (this.testForm?.get('preguntasElegibles')?.value) {
      const listaTemasValue = this.testForm.get('listaTemas')?.value;
      this.testService.getElegiblePreguntas(listaTemasValue).subscribe(data => {
        this.elegiblePreguntas = data;
      });
    } else {
      this.elegiblePreguntas = [];
    }
  }
}

