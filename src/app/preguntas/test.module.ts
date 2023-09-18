import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestPreguntaComponent } from './test-pregunta.component';  // Importa tu componente de pregunta de test
import { TestResultadosComponent } from './test-resultados.component';  // Importa tu componente de pregunta de test



@NgModule({
  declarations: [
    TestComponent,
    TestPreguntaComponent,
    TestResultadosComponent  // Declara tu componente de pregunta de test
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TestComponent,
    TestPreguntaComponent,
    TestResultadosComponent  // Exporta tu componente de pregunta de test si es necesario
  ]
})
export class TestModule { }
