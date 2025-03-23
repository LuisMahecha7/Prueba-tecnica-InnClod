import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from "../create-product/create-product.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-new',
  imports: [ReactiveFormsModule, CommonModule, CreateProductComponent],
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.css'
})
export class OrderNewComponent {
  registerForm: FormGroup;
  users: any[] = [];
  products: any[] = [];
  showForm: boolean = false; // Inicialmente oculto

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      product: ['', [Validators.required]],
    })
  }

  fetchProducts() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/products')
    .subscribe(
      data => {
        this.products = data;
        console.log('Productos obtenidos:', data);
        console.log('product', data);
      },
      error => console.error('Error al obtener productos', error)
    );
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
    .subscribe(
      data => {
        this.users = data;
        console.log('Usuarios obtenidos:', data);
      },
      error => console.error('Error al obtener usuarios', error)
    );
  }

  confirmSelection() {
    console.log('Selección confirmada:', {
      selectedUsers: this.users,
      selectedProducts: this.products
    });
  }
  toggleProductForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar y ocultar el formulario
  }
  registerproduct() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/users', this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso:', response);
            this.router.navigate(['/login']);
          },
          error: (error) => console.error('Error en el registro:', error)
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
