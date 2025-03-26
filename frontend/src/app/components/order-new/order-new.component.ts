import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  GetproductsPermissions: any[] = [];
  showForm: boolean = false; // se oculta el form de register usuario.
  showForm2: boolean = false; // lo mismo con el otro form
  showForm3: boolean = false; // oculta y muestra form register user
  ProductsSelctOrderr: any[] = []; // Almacena los productos seleccionados.
  selectedUser: any = null//para solo permitir, seleccionar.. un usuario.
  ProductsChekedPermissions: any[] = [];//productos seleccionados para denegar a usuario.
  usuarioName: any;
  copyuserName: any;
  selectPnOrder: any[] = [];//Nueva orde xra un user cuamquiera.
  usersGetRequestOrder: any[] = [];//generar orden con otro usuario.
  userSelectedOrder: any = null//para solo perm, selecc.. 1 usuario, Para generar una orden.
  message: string = ''; //Mensaje exito
  ngOnInit() {
    this.usuarioName = JSON.parse(localStorage.getItem('usuario') || 'null')//se recupera usuario guardado en el login de localstorage
    this.copyuserName = this.usuarioName
  }
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private cd: ChangeDetectorRef) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  //Peticion para obtener productos, para asignar permisos("** Validar como Reutilizar data de una sola petición")
  fetchProductsPermisions() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/products')
    .subscribe(
      data => {
        this.GetproductsPermissions = data;
      },
      error => console.error('Error al obtener productos', error)
    );
  }
  //cerrar sesión
  logout(){
    this.router.navigate(['/register']);
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
  //Peticion, para optener usuarios xra genrar una ORDEN con otro usuario.
  fetchUsersOrder() {
    this.http.get<any[]>('http://localhost:8000/api/users')
    .subscribe(
      data => {
        this.usersGetRequestOrder = data;
      },
      error => console.error('Error al obtener usuarios', error)
    )
  };
  //funcion seleccionar otro usuario para orden
  togUserSelectionOrder(usr: any, event: any) {//contiene el objeto.
    if (event.target.checked) {
      this.userSelectedOrder = usr;
      this.usuarioName = usr;
      console.log('usuario seleccionado para realizar la orden -if-id', this.userSelectedOrder.id);
    }else{
      this.userSelectedOrder = this.copyuserName;
      this.usuarioName  = this.copyuserName;
      console.log('usuario seleccionado para realizar la orden -else-id', this.userSelectedOrder.id);
    }
  }
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
  //Intercambia el formulario de registro user desde view principal
  toggleUserReegisterInView() {
    this.showForm3 = !this.showForm3; // Igual quel anterior, pero para el form de permisos
  }
  //Registrar usuarios cuando ya esta autenticado.
  onSubmitUsr() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/users', this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso:', response);
            this.registerForm.reset();
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
      return
    }
  }
   //Petición para obtener usuarios
   fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
    .subscribe(
      data => {
        this.users = data;
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
  }
  //función para seleccionar productos y asignar Permisos. productsSelectedPermissions
  toggleProductSelectionPermsions(productSelectedPermissions: any, event: any){//contiene los datos del producto que se seleccio
    if (event.target.checked) {
      this.ProductsChekedPermissions.push(productSelectedPermissions);
    }else{
      // Elimina el producto si se desmarca
      this.ProductsChekedPermissions = this.ProductsChekedPermissions.filter(p => p.id !== productSelectedPermissions.id);
    }
  };
  /*Checkbox de Producto a seleccionar para la orden*/
  toggleProductSelection(productSelectedNewOrder: any, event: any) {
    if (event.target.checked) {
      this.ProductsSelctOrderr.push(productSelectedNewOrder);
    } else {
      this.ProductsSelctOrderr = this.ProductsSelctOrderr.filter(p => p.id !== productSelectedNewOrder.id);
    }
  }
  /** Petición Guardar orden*/
  saveOrder() {
    if (!this.userSelectedOrder) {
      console.error('debe seleccionar un usuario, para asignar la orden');
      this.message = 'Seleccione un usuario para asignar la orden';
      setTimeout(() => this.message = '', 3000);
      return;
    }
    if (this.ProductsSelctOrderr.length < 1) {
      console.error('Seleccione al menos 1 producto, para generar la orden.');
      this.message = 'Seleccione mínimo 1 producto';
      setTimeout(() => this.message = '', 3000);
      return;
    }

    const dataOrder = {
      user_id: this.userSelectedOrder.id
    };

    this.http.post('http://localhost:8000/api/orders', dataOrder)
    .subscribe({
      next: (response: any) => {
          console.log('this-response', response);
          this.message = response.message;
          setTimeout(() => this.message = '', 3000);
      },
      error: (error) => {
          console.log('this-error', error);
          this.message = error.error.message || 'Ocurrió un error';
          setTimeout(() => this.message = '', 3000);
      }
    });
  }
  //Guardar cambios peticion de restriccion de productos a un usuario especifico.
  saveChanges(){
    if(!this.selectedUser){
      console.error('Debe seleccionar un usuario');
      return;
    }
    if (this.ProductsChekedPermissions.length == 0 ) {
      console.error('seleccione minimo 1 producto.');
      return;
    }
    const datachange = {
      user_id: this.selectedUser.id,
      product_id: this.ProductsChekedPermissions.map(p => p.id),
    };
    this.http.post('http://127.0.0.1:8000/api/clientProduct', datachange)
    .subscribe({
      next: (response) => console.log('this-response', response),
      error: (error) => console.log('this-error', error)
    });
  }
}
