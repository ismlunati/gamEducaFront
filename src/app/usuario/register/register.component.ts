import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        // Aquí puedes manejar la respuesta si es necesario.
        console.log('Registrado con éxito y token almacenado.');
      },
      error: (error) => {
        // Aquí puedes manejar los errores si es necesario.
        console.log('Error en el registro:', error);
      },
    });
  }
}
