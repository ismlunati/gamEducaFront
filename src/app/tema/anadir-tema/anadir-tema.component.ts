import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/asignatura/asignatura';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Tema } from 'src/app/clasesGeneral/Tema';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-anadir-tema',
  templateUrl: './anadir-tema.component.html'
})
export class AnadirTemaComponent implements OnInit {

  temaForm: FormGroup;

  idAsignatura:number | null = null;

  idTema:number | null = null;

  tema!: Tema;
  asignatura!: Asignatura;

  constructor(private fb: FormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute, private authService:AuthService) {

    this.temaForm = this.fb.group({
      nombre: '',
      descripcion: ''
      // puedes agregar más controles de formularios aquí
    });
   }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

      this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

      this.idTema= +this.route.snapshot?.paramMap.get('id')!;
      console.log("Este es el id", this.idAsignatura);

      console.log("Este es el id del tema", this.idTema);
      
      if (this.idAsignatura) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);

        this.asignaturaService.getTemaPorId(this.idAsignatura,this.idTema).subscribe(tema => {
          this.tema = tema;
  
          console.log("Procedo a imprimir los alumnos");
          console.log("Procedo a imprimir idAsignatura");
          console.log(tema);
          console.log(this.idAsignatura);

          this.temaForm.patchValue({
            nombre: this.tema.nombre,
            descripcion: this.tema.descripcion
          });
        });


      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /save');
      }



  }

  metodoActualizarCrear():void{
    if(this.idAsignatura!==0){
      console.log("actualizar")
      this.actualizarTema();

    }else {

      this.crearTema()
      console.log("crearAsignatura")
    }
  }


  crearTema(): void {
    this.asignaturaService.crearTema(this.temaForm.value,this.idAsignatura!)
      .subscribe((asignaturaCreada: Tema) => {
        console.log('Asignatura creada', asignaturaCreada);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  actualizarTema(): void {

    Object.assign(this.tema, this.temaForm.value);


    this.asignaturaService.actualizarTema(this.tema, this.idAsignatura!)
      .subscribe((temaCreado: Tema) => {
        console.log('Tema actualizado', temaCreado);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {
      console.log(this.authService.getUserFromLocalStorage()?.roles[0].rolNombre)
      return true;
    } else {

      return false;
    }
  }

}
