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


  artefactosAsignatura!:Artefacto[];

  constructor(private fb: FormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute, private authService:AuthService) {

      this.logroForm = this.fb.group({
        nombre: '',
        descripcion: '',
        artefactoLogro: this.fb.group({
          desbloquear: [false],
          obtener: [false],
          artefacto: ''
        }),
      });
      

   }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

      this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

      this.idLogro= +this.route.snapshot?.paramMap.get('id')!;
      console.log("Este es el id", this.idAsignatura);

      console.log("Este es el id del logro", this.idLogro);
      
      if ( this.idLogro!==0) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);

        this.asignaturaService.getLogroPorId(this.idAsignatura,this.idLogro).subscribe(logro => {
          this.logro = logro;
  

          console.log("este es el logro",logro);
          console.log("este es el nombre artefacto",this.logro.artefactoLogros?.artefacto.nombre);


          

          this.logroForm.patchValue({
            nombre: this.logro.nombre,
            descripcion: this.logro.descripcion,
            artefactoLogro: this.fb.group({
              desbloquear: this.logro?.artefactoLogros?.desbloquear,
              obtener: this.logro?.artefactoLogros?.obtener,
              artefacto: this.logro.artefactoLogros?.artefacto.id
            })



          });
        });


      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /saveNueevo');
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
      console.log("crearLogro",this.logroForm.value )
      this.crearLogro()
      
    }
  }


  crearLogro(): void {

    const formValues = this.logroForm.value;
    console.log("artefactoDI", formValues.artefactoLogro.artefacto);
    console.log("artefactoIDBD", this.artefactosAsignatura[0].id);
    const selectedArtefacto = this.artefactosAsignatura.find(artefacto => artefacto.id === formValues.artefactoLogro.artefacto);
    

  console.log("Este es el artefacto que se postea", selectedArtefacto);
    const logroPost: Logro = {
      ...formValues,  // Esto copia los valores de nombre, descripcion, etc. del formulario
      artefactoLogros: {
          ...formValues.artefactoLogro,  // Esto copia los valores de desbloquear y obtener del formulario
          artefacto: this.artefactosAsignatura[0]  // Esto reemplaza el id de artefacto con el objeto completo de Artefacto
      }
  };
  console.log("Logro posteado", logroPost)

  //en vez de mandar this.logroForm.value voy a mandar logro
    this.asignaturaService.crearLogro(logroPost,this.idAsignatura!)
      .subscribe((logro: Logro) => {
        console.log('logro creada', logro);
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
