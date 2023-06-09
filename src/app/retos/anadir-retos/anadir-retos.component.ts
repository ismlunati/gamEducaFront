import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/asignatura/asignatura.service';
import { AuthService } from 'src/app/usuario/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Reto } from 'src/app/clasesGeneral/Reto';
import { Asignatura } from 'src/app/asignatura/asignatura';
import { Logro } from 'src/app/clasesGeneral/Logro';

@Component({
  selector: 'app-anadir-retos',
  templateUrl: './anadir-retos.component.html'
})
export class AnadirRetosComponent implements OnInit {

  retoForm!: FormGroup;

  logrosAsignatura!:Logro[];
  idAsignatura:number | null = null;

  idReto:number | null = null;

  reto!: Reto;
  asignatura!: Asignatura;

  constructor(private fb: FormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute, private authService:AuthService) {

      // this.retoForm = this.fb.group({
      //   nombre: [''],
      //   descripcion: [''],
      //   puntosOtorgados: [''],
      //   temporal: [false],
      //   fechaInicio: [{value: '', disabled: true}],
      //   fechaFin: [{value: '', disabled: true}],
      //   logro: ['']
      // });
      // puedes agregar más controles de formularios aquí
   }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

    this.retoForm = this.fb.group({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      puntosOtorgados: new FormControl(''),
      temporal: new FormControl(false),
      fechaInicio: new FormControl({ value: '', disabled: true }),
      fechaFin: new FormControl({ value: '', disabled: true }),
      logro: new FormControl('')
    });

      this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

      this.idReto= +this.route.snapshot?.paramMap.get('id')!;
      console.log("Este es el id", this.idAsignatura);

      console.log("Este es el id del reto", this.idReto);
      
      if (this.idReto!==0) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);

        this.asignaturaService.getRetoPorId(this.idAsignatura,this.idReto).subscribe(reto => {
          this.reto = reto;
  

          console.log("ESTE ES EL RETO",reto);
          console.log(this.idAsignatura);

          this.retoForm.patchValue({
            nombre: this.reto.nombre,
            descripcion: this.reto.descripcion
          });
        });

        


      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /save');
      }

      this.asignaturaService.getLogrosPorAsignatura(this.idAsignatura).subscribe(logros => {
        this.logrosAsignatura = logros;

      });



      this.retoForm.get('temporal')?.valueChanges.subscribe(temporal => {
        if (temporal) {
          this.retoForm.get('fechaInicio')?.enable();
          this.retoForm.get('fechaFin')?.enable();
        } else {
          this.retoForm.get('fechaInicio')?.disable();
          this.retoForm.get('fechaFin')?.disable();
        }
      });

  }

  metodoActualizarCrear():void{
    if(this.idReto!==0){
      console.log("actualizar")
      this.actualizarReto();

    }else {

      this.crearReto()
      console.log("crearAsignatura")
    }
  }


  crearReto(): void {
    this.asignaturaService.crearReto(this.retoForm.value,this.idAsignatura!)
      .subscribe((asignaturaCreada: Reto) => {
        console.log('Asignatura creada', asignaturaCreada);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  actualizarReto(): void {
console.log("actualizando");
    Object.assign(this.reto, this.retoForm.value);


    this.asignaturaService.actualizarReto(this.reto, this.idAsignatura!)
      .subscribe((retoCreado: Reto) => {
        console.log('Reto actualizado', retoCreado);
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
