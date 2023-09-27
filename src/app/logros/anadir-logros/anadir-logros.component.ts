import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/asignatura/asignatura';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { Artefacto } from 'src/app/clasesGeneral/Artefacto';
import { ArtefactoLogro } from 'src/app/clasesGeneral/ArtefactoLogro';
import { Logro } from 'src/app/clasesGeneral/Logro';
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-anadir-logros',
  templateUrl: './anadir-logros.component.html'
})
export class AnadirLogrosComponent implements OnInit {

  logroForm: FormGroup;

  idAsignatura: number | null = null;

  idLogro: number | null = null;

  logro!: Logro;



  artefactosAsignatura!: Artefacto[];

  constructor(private fb: FormBuilder, private asignaturaService: AsignaturaService,
    private route: ActivatedRoute, private authService: AuthService, private router: Router) {

    this.logroForm = this.fb.group({
      nombre: '',
      descripcion: '',
      artefactoLogros: this.fb.group({
        desbloquear: [{ value: false, disabled: true }],
        obtener: [{ value: false, disabled: true }],
        artefacto: ''
      }),
    });


    // Asegurando a TypeScript que logroForm no es null utilizando un operador de aserción.
    (this.logroForm.get('artefactoLogros.artefacto') as FormControl).valueChanges.subscribe((artefacto) => {
      // También asegurando que los controles no son null.
      const desbloquearControl = this.logroForm.get('artefactoLogros.desbloquear') as FormControl;
      const obtenerControl = this.logroForm.get('artefactoLogros.obtener') as FormControl;
      if (artefacto) {
        desbloquearControl.enable();
        obtenerControl.enable();
      } else {
        desbloquearControl.disable();
        obtenerControl.disable();
      }
    });

  }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.idLogro = +this.route.snapshot?.paramMap.get('id')!;
    console.log("Este es el id", this.idAsignatura);

    console.log("Este es el id del logro", this.idLogro);

    if (this.idLogro !== 0) {
      // Aquí va la lógica si existe id
      console.log(`El id es ${this.idAsignatura}`);

      this.asignaturaService.getLogroPorId(this.idAsignatura, this.idLogro).subscribe(logro => {
        this.logro = logro;


        console.log("este es el logro", logro);
        console.log("este es el nombre artefacto", this.logro.artefactoLogros?.artefacto.nombre);




        this.logroForm.patchValue({
          nombre: this.logro.nombre,
          descripcion: this.logro.descripcion,
          artefactoLogros: this.fb.group({
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




  metodoActualizarCrear(): void {
    if (this.idLogro !== 0) {
      console.log("actualizar")
      this.actualizarLogro();

    } else {
      console.log("crearLogro", this.logroForm.value)
      this.crearLogro()

    }

    this.router.navigate(['/asignaturas', this.idAsignatura, 'logros', 'listado']);
  }


  crearLogro(): void {

    const formValues = this.logroForm.value;
    //console.log("artefactoDI", formValues.artefactoLogro.artefacto);
    console.log("artefactoIDBD", this.artefactosAsignatura[0].id);
    const selectedArtefacto = this.artefactosAsignatura.find(artefacto => artefacto.id === +formValues.artefactoLogros.artefacto);

    console.log("selected artefacto",  selectedArtefacto);
    console.log("this.artefactosAsignatura",  this.artefactosAsignatura);
    console.log("formValues", this.logroForm.value);
    console.log("formValues", formValues);
    console.log("formValues ID", formValues.artefactoLogros.artefacto);

    let artefactoLogros: ArtefactoLogro | null = null; // asigna null como valor por defecto

 
    if (selectedArtefacto !== undefined) {
      artefactoLogros = {
        ...formValues.artefactoLogro // Esto copia los valores de desbloquear y obtener del formulario
      }
      artefactoLogros!.artefacto = selectedArtefacto;


      console.log("artefacto logros", artefactoLogros);
    }



    console.log("Este es el artefacto que se postea", selectedArtefacto);
    console.log("artefactoLogros que se postea", artefactoLogros);
    const logroPost: Logro = {
      ...formValues,  // Esto copia los valores de nombre, descripcion, etc. del formulario
      artefactoLogros: artefactoLogros
    };


    console.log("Logro posteado", logroPost)

    //en vez de mandar this.logroForm.value voy a mandar logro
    this.asignaturaService.crearLogro(logroPost, this.idAsignatura!)
      .subscribe((logro: Logro) => {
        console.log('logro creada', logro);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  // crearLogro1(): void {

  //   const formValues = this.logroForm.value;
  //   console.log("artefactoIDBD", this.artefactosAsignatura[0].id);
  //   const selectedArtefacto = this.artefactosAsignatura.find(artefacto => artefacto.id === formValues.artefactoLogros.artefacto);
  
  //   console.log("Artefacts", this.artefactosAsignatura);
  //   console.log("Form Values", formValues.artefactoLogros.artefacto);
  //   console.log("Selected artefacto", selectedArtefacto);

  //   let artefactoLogros: ArtefactoLogro | null = null; // asigna null como valor por defecto
  
  //   if (selectedArtefacto !== undefined) {
  //     artefactoLogros = {
  //       ...formValues.artefactoLogro // Esto copia los valores de desbloquear y obtener del formulario
  //     }
  //     artefactoLogros!.artefacto = selectedArtefacto;


  //     console.log("artefacto logros", artefactoLogros);
  //   }
  
  //   console.log("selectedArtefacto", selectedArtefacto);
    
  
  //   const logroPost: Logro = {
  //     ...formValues, // Esto copia los valores de nombre, descripcion, etc. del formulario
  //     artefactoLogros: artefactoLogros // este será null si selectedArtefacto es undefined
  //   };
  
  //   console.log("Logro posteado", logroPost);
  
  //   this.asignaturaService.crearLogro(logroPost, this.idAsignatura!)
  //     .subscribe((logro: Logro) => {
  //       console.log('logro creada', logro);
  //       // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
  //     });
  // }
  

  actualizarLogro(): void {
    console.log("actualizando");
    Object.assign(this.logro, this.logroForm.value);


    this.asignaturaService.actualizarLogro(this.logro, this.idAsignatura!)
      .subscribe((logroCreado: Logro) => {
        console.log('Logro actualizado', logroCreado);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }

  esProfesor(): boolean {

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre == 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}
