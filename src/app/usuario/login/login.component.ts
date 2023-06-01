import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario:Usuario= new Usuario();

  constructor( private servicio:UsuarioService, private router:Router) { }

   ngOnInit(): void {

    if(this.servicio.token){
      Swal.fire("Aviso","Ya estas autenticado!","info");
      this.router.navigate([''])
    }

  }

  login():void{

    this.servicio.login(this.usuario).subscribe(
      resp => {
                console.log("esto responde:",resp.access_token);

                this.servicio.guardarToken(resp.access_token);

                this.servicio.guardarUsuario(resp.access_token);

                Swal.fire('Login',`Hola ${this.usuario.username}, ha iniciado sesión con exito`,'success');

                this.router.navigate(['']);

              },
      error=>{
              console.log("error:",error);

              Swal.fire('Error Login',`error: ${error.status}`,'error');
      }

    )

   }

}
