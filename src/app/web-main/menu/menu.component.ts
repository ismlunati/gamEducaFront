import { Usuario } from './../../usuario/clases/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/usuario/auth.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  user_name!:string;

  usuario$: Observable<Usuario | null>= of(null);


  constructor(public service:UsuarioService, private router:Router, private authService: AuthService) { }


  cerrarSesion():void{
    this.user_name = this.service.usuario.nombreUsuario;

    this.authService.logout();
    Swal.fire('Logout',`${this.user_name}, has cerrado sesión con éxito`,'success');

    this.router.navigate(['/login']);

  }

  ngOnInit(): void {

    this.user_name= this.service.usuario.nombreUsuario;
    this.usuario$ = this.authService.usuario$;
  }

}
