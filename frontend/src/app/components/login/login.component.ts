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
          next: (response) => {
            console.log('Inicio de sesión exitoso:', response);
            ;this.router.navigate(['/home-private']);
          },
          error: (error) => console.error('Error en el inicio de sesión:', error)
          
        })
    } else {
      console.log('Formulario inválido');
    }
  }
}
