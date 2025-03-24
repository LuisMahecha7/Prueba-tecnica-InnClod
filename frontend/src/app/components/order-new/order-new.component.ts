import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from "../create-product/create-product.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-new',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.css'
})
export class OrderNewComponent {
  registerForm: FormGroup;
  users: any[] = [];
  products: any[] = [];
  showForm: boolean = false; // se oculta el form de register usuario
  showForm2: boolean = false; // lo mismo con el otro form
  selectedProducts: any[] = []; // Almacena los productos seleccionados

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

toggleProductSelection(product: any, event: any) {
  if (event.target.checked) {
    this.selectedProducts.push(product); // Agrega si está marcado
  } else {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id); // Quita si se desmarca
  }
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
  toggleProductPermisions() {
    this.showForm2 = !this.showForm2; // Igual quel anterior
  }
  registerproduct() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/products', this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso:', response);
          },
          error: (error) => console.error('Error en el registro:', error)
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
