import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/asignatura/asignatura';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Artefacto } from 'src/app/clasesGeneral/Artefacto';
import { Logro } from 'src/app/clasesGeneral/Logro';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-anadir-logros',
  templateUrl: './anadir-logros.component.html'
})
export class AnadirLogrosComponent implements OnInit {

  logroForm: FormGroup;

  idAsignatura:number | null = null;

  idLogro:number | null = null;

  logro!: Logro;
  asignatura!: Asignatura;

  artefactosAsignatura!:Artefacto[];

  constructor(private fb: FormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute, private authService:AuthService) {

    this.logroForm = this.fb.group({
      nombre: '',
      descripcion: '',
      artefacto:''
      // puedes agregar más controles de formularios aquí
    });
   }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

      this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

      this.idLogro= +this.route.snapshot?.paramMap.get('id')!;
      console.log("Este es el id", this.idAsignatura);

      console.log("Este es el id del logro", this.idLogro);
      
      if (this.idAsignatura) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);

        this.asignaturaService.getLogroPorId(this.idAsignatura,this.idLogro).subscribe(logro => {
          this.logro = logro;
  
          console.log("Procedo a imprimir los alumnos");
          console.log("Procedo a imprimir idAsignatura");
          console.log(logro);
          console.log(this.idAsignatura);

          this.logroForm.patchValue({
            nombre: this.logro.nombre,
            descripcion: this.logro.descripcion
          });
        });


      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /save');
      }



      this.asignaturaService.getArtefactosPorAsignatura(this.idAsignatura).subscribe(artefactos => {
        this.artefactosAsignatura = artefactos;

        console.log("Procedo a imprimir los artefactos disponibles", artefactos);



      });

  }

  metodoActualizarCrear():void{
    if(this.idLogro!==0){
      console.log("actualizar")
      this.actualizarLogro();

    }else {

      this.crearLogro()
      console.log("crearAsignatura")
    }
  }


  crearLogro(): void {
    this.asignaturaService.crearLogro(this.logroForm.value,this.idAsignatura!)
      .subscribe((asignaturaCreada: Logro) => {
        console.log('Asignatura creada', asignaturaCreada);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  actualizarLogro(): void {
console.log("actualizando");
    Object.assign(this.logro, this.logroForm.value);


    this.asignaturaService.actualizarLogro(this.logro, this.idAsignatura!)
      .subscribe((logroCreado: Logro) => {
        console.log('Logro actualizado', logroCreado);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}
