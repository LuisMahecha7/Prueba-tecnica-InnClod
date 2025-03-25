import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from "../create-product/create-product.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.css'
})
export class OrderNewComponent {
  registerForm: FormGroup;
  users: any[] = [];
  products: any[] = [];
  products2: any[] = [];
  showForm: boolean = false; // se oculta el form de register usuario
  showForm2: boolean = false; // lo mismo con el otro form
  selectedProducts: any[] = []; // Almacena los productos seleccionados
  selectedUser: any = null//para solo perm, selecc.. un usuario
  selectProduct: any[] = [];//productos seleccioados para denegarle al usuario
  usuarioName: any;
  selectPnOrder: any[] = [];//Nueva orde xra un user cuamquiera
  users2: any[] = [];//generar orden con otro usuario.
  selectedUser2: any = null//para solo perm, selecc.. 1 usuario, Para generar la orden

  ngOnInit() {
    this.usuarioName = JSON.parse(localStorage.getItem('usuario') || 'null')//se recupera usuario guardado en el login de localstorage
  }

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private cd: ChangeDetectorRef) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  //funcion seleccionar otro usuario para orden
  togUserSelectionOrder(usr: any, event: any) {
    if (event.target.checked) {
      this.selectedUser2 = usr;
    }else{
      this.selectedUser2 = null;
    }
    console.log('user-selected', this.selectedUser2);
    console.log('user-id-selected :', this.selectedUser2.id);
    console.log('user-name-selected: ', this.selectedUser2.name);
  }

  //Peticion para obtener productos para asignar permisos
  fetchProductsPermisions() {
    console.log('fetchProductsPermisions() se está ejecutando');

    this.http.get<any[]>('http://127.0.0.1:8000/api/products')
    .subscribe(
      data => {
        this.products2 = data;
        console.log('Productos obtenidos:', data);
      },
      error => console.error('Error al obtener productos', error)
    );
  }

  //Peticion para ver productos disponibles
  fetchProducts() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/products')
    .subscribe(
      data => {
        this.products = data;
        console.log('Productos obtenidos:', data);
        console.log('product', data);
      },
      error => console.error('Error al obtener productos', error),
    );
  }

  //Peticion, para Orden con otro usuario
  fetchUsersOrder() {
    this.http.get<any[]>('http://localhost:8000/api/users')
    .subscribe(
      data => {
        this.users2 = data;
        console.log('Usuarios new order:', data);
      },
      error => console.error('Error al obtener usuarios', error)
    )
  };
  //Validar Cantidad('stock) de productos seleccionados por user.
  validateQuantity(product: any){
    if (product.quantity > product.stock) {
      console.error(`No puedes agregar mas de ${product.stock}, ${product.name}`)
      product.quantity = product.stock;
    }
    if (product.quantity < 1 || !product.quantity) {
      product.quantity = 1;
    }
  }

  //para registrar un producto endpoint y ..
  toggleProductForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar y ocultar el formulario de guardar productos
  }

  //Registro de productos
  registerproduct() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/products', this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso:', response);
            this.registerForm.reset();//xra borrar los input del form.
          },
          error: (error) => console.error('Error en el registro:', error)
        });
    } else {
      console.log('Formulario inválido');
    }
  }

  toggleProductPermisions() {
    this.showForm2 = !this.showForm2; // Igual quel anterior, pero para el form de permisos
  }

  //Peticion para cancelar productos a usuarios
  cancelproduct() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/clientProduct', this.registerForm.value)
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

   //Petición para obtener usuarios
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

  //funcion para seleccionar solo un usuario, para restringir productos.
  userSelection(user: any, event: any){
    if(event.target.checked) {
      this.selectedUser = user;
    }else{
      this.selectedUser = null;
    }
    console.log('usurio seleccionado', this.selectedUser);
    console.log('usurioo', this.selectedUser.id);
  }
  //fucnion para seleccionar productos
  toggleProductSelectionPermsions(productt: any, event: any){
    if (event.target.checked) {
      this.selectProduct.push(productt);
    }else{
      // Elimina el producto si se desmarca
      this.selectProduct = this.selectProduct.filter(p => p.id !== productt.id);
    }
    console.log('productt seleccionados', this.selectProduct)
    console.log('productt', productt.id)
  };

  toggleProductSelection(product: any, event: any) {
    if (event.target.checked) {
      this.selectedProducts.push(product); // Agrega si está marcado
    } else {
      this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id); // Quita si se desmarca
    }
  }

  //Guardar cambios en peticion de restriccion de productos a un usuario especifico.
  saveChanges(){
    if(!this.selectedUser){
      console.error('Debe seleccionar un usuario');
      return;
    }

    if (this.selectProduct.length == 0 ) {
      console.error('seleccione minimo 1 producto.');
      return;
    }

    const datachange = {
      user_id: this.selectedUser.id,
      product_id: this.selectProduct.map(p => p.id),
    };
    console.log('user_id', this.selectedUser.id)
    console.log('thisjiji', this.selectProduct.map(p => p.id))
    console.log('data restriccion a enviar', datachange);

    this.http.post('http://127.0.0.1:8000/api/clientProduct', datachange)
    .subscribe({
      next: (response) => console.log('this-response', response),
      error: (error) => console.log('this-error', error)
    });
  }

}
