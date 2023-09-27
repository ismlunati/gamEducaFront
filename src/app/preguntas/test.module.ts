import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestListComponent } from './testList.component/test-list.component';
import { TestPreguntaComponent } from './testPregunta.component/test-pregunta.component';
import { TestResultadosComponent } from './testResultado.component/test-resultados.component';
import { CreateTestComponent } from './testCreate.component/createTest.component';
import { TestViewComponent } from './test-view.component';



@NgModule({
  declarations: [
    CreateTestComponent,
    TestPreguntaComponent,
    TestResultadosComponent,
    TestListComponent,
    TestViewComponent // Declara tu componente de pregunta de test
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CreateTestComponent,
    TestPreguntaComponent,
    TestResultadosComponent  // Exporta tu componente de pregunta de test si es necesario
  ]
})
export class TestModule { }
