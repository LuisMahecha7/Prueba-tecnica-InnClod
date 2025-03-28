import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule] // Importamos HttpClientModule
})
export class LoginComponent {
  loginForm: FormGroup;
  private http = inject(HttpClient); // Inyección de HttpClient
  private router = inject(Router); // Inyeccón el Router
  message: string | undefined;
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/login', this.loginForm.value)
        .subscribe({
          next: (response: any) => {
            this.isSuccess = true;
            this.message = response.message;
            localStorage.setItem('usuario', JSON.stringify(response.user));
            setTimeout(() => {
              this.router.navigate(['/order-new']);
            }, 2000);
          },
          error: (error) => {
            this.isSuccess = false;
            console.error('Error en el inicio de sesión:', error);
  
            // Mostrar el mensaje de error
            this.message = 'Error. Verifique sus credenciales.';
  
            // Limpiar el mensaje después de 3 segundos
            setTimeout(() => {
              this.message = undefined;
            }, 3000);
          }
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
