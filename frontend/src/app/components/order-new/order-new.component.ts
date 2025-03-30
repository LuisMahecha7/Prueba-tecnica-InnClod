import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  message: string = ''; //Mensaje succes / danger
  isSuccess: boolean = false;
  product: any  = null;//valida producto seleccionado para guardar la orden.
  value: any ;
  //order_id: any;
  ngOnInit() {
    this.usuarioName = JSON.parse(localStorage.getItem('usuario') || 'null');//se recupera usuario guardado en el login de localstorage
    this.copyuserName = this.usuarioName;
    this.fetchProducts();
    this.fetchUsersOrder();
  }
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private cd: ChangeDetectorRef) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  // Forma para validar + 1 formularios
  userFormValidate = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  //Se inicialliza valiable para la peticion entender, como cambia variable: "productsGenerateOrden" con nrModel
  productsGenerateOrden = {
    quantity: 1,  // Inicializamos con un valor por defecto
    stock: 100, // NO sirvio Boorrar
    name: 'Producto A'//vALIDAR para borrar
  };
  //Peticion para obtener productos, para asignar permisos("** Validar como Reutilizar la data, de una sola petición**")
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
        console.log('Productos obtenidos y disponibles:', data);
        console.log('this.products', this.products);
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
  //para registrar un producto endpoint y ..
  toggleProductForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar y ocultar el formulario de guardar productos
  }
  //Registro de productos
  registerproduct() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:8000/api/products', this.registerForm.value)
        .subscribe({
          next: (response: any) => {
            console.log('Registro exitoso:', response);
            this.registerForm.reset();//xra borrar los input del form.
            this.message = response.message;
            setTimeout(()=> this.message = '', 2000);
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
  //Xra-Registrar usuarios cuando ya esta autenticado.
  onSubmitUsr() {
    if (this.userFormValidate.valid) {
      this.http.post('http://127.0.0.1:8000/api/users', this.userFormValidate.value)
        .subscribe({
          next: (response: any) => {
            console.log('Registro exitoso:', response);
            this.message = response.message;
            setTimeout(() => this.message = '', 2000);
            this.userFormValidate.reset();
            console.log('this.userFormValidate.valid',this.userFormValidate.valid);
            console.log('response',response);
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
          next: (response: any) => {
            console.log('Registro exitoso:', response);
            this.message = response.message;
            setTimeout(() => this.message = '', 2000);
          },
          error: (error) => console.error('Error en el registro:', error)
        });
    } else {
      console.log('Formulario inválido');
      return
    }
  }
  //Petici0n para obtener usuarios
  fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
    .subscribe(
      data => {
        this.users = data;
      },
      error => console.error('Error al obtener usuarios', error)
    );
  };
  //funcion para seleccionar solo un usuario, para restringir productos.
  userSelection(user: any, event: any){
    if(event.target.checked) {
      this.selectedUser = user;
    }else{
      this.selectedUser = null;
    }
  }
  //Validar Cantidad('stock) productos seleccionados por user, peticion Orden.
  validateQuantity(product: any) {
    console.log('Valor seleccionado por el usuario:', product.quantity);//contiene totl seleccinado x user a nivel de cantida del stock.
    if (product.quantity < 1) {
      console.error('La cantidad no puede ser menor que 1.');
      console.log('this.value', this.value);
      this.message = 'Seleccione una cantidad valida.';
      setTimeout(() => this.message = '', 2000)
      product.quantity = '';
      return;
    }
    if (product.quantity > product.stock) {
      product.quantity = 1;
      return;
    }
    if (product.quantity == this.value){
      this.message = 'Seleccione una cantidad para el producto.';
      setTimeout(() => this.message = '', 2000)
      product.quantity = this.value;
      return;
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
      console.log('this.ProductsSelctOrderrarray, en validacion',this.ProductsSelctOrderr);
    } else {
      this.ProductsSelctOrderr = this.ProductsSelctOrderr.filter(p => p.id !== productSelectedNewOrder.id);
    }
  }
  /** Validacion xra Guardar orden*/
  saveOrder() {
    if (!this.userSelectedOrder) {
      this.message = 'Seleccione un usuario para asignar la orden';
      setTimeout(() => this.message = '', 3000);
      console.log('this.userSelectedOrder', this.userSelectedOrder)
      return;
    }
    if (this.ProductsSelctOrderr.length < 1) {
      console.error('Seleccione al menos 1 producto, para generar la orden.');
      this.message = 'Seleccione al menos 1 producto, para generar la orden.';
      setTimeout(() => this.message = '', 3000)
      return;
    }
    //Validación de la cantidad de cada producto seleccionado
    for (let p of this.ProductsSelctOrderr) {
      if (!p.quantity || p.quantity < 1) {
        this.message = `La cantidad para ${p.name} debe ser minimo 1.`;
        setTimeout(() => this.message = '', 3000);
        return;
      }
      if (p.quantity > p.stock) {
        this.message = `La cantidad paa ${p.name} supera el stock disponible (${p.stock}).`;
        setTimeout(() => this.message = '', 3000);
        return;
      }
    }
    //Peticion xra registrar orden
    const dataOrder = {
      user_id: this.userSelectedOrder.id
    };
    this.http.post('http://localhost:8000/api/orders', dataOrder)
    .subscribe({
      next: (response: any) => {
       // this.order_id = response.order_id;
        this.message = response.message;
        setTimeout(() => this.message = '', 2000);
        const dataDetailOrder = {
          order_id: response.order_id,
          product_id: this.ProductsSelctOrderr.map(p => p.id),
          quantity: this.ProductsSelctOrderr.map(p => p.quantity || 1)
        };
        this.http.post('http://127.0.0.1:8000/api/OrderDetail', dataDetailOrder)
        .subscribe({
          next: (response: any) => {
            console.log('Detalles guardados:', response);
            this.message = response.message;
            setTimeout(() => this.message = '', 3000);
            const updateStock ={
              id: dataDetailOrder.product_id,
              stock: dataDetailOrder.quantity,
            };
            console.log('updateStock-Esto-estoy-enviando-a validar', updateStock);
            this.http.post('http://127.0.0.1:8000/api/products', updateStock)
            .subscribe({
              next: (response: any) =>{
              this.message = response.message;
              setTimeout(() => this.message = '', 2000)
              },
              error: (error) => {
                console.error('Error al Actualizar stock:', error);
                this.message = error.error.message || 'Ocurrió un error, al actualizar stock'
                setTimeout(() => this.message = '', 2000);
              }
            });
          },
          error: (error) => {
            console.error('Error al guardar detalles:', error);
            this.message = error.error.message || 'Ocurrió un error';
            setTimeout(() => this.message = '', 2003);
          }
        });
      },////////Falta acr¿tualizar stock en el back-->
      error: (error) => {
        console.error('Error al guardar la orden:', error);
        this.message = error.error.message || 'Ocurrió un error'
        setTimeout(() => this.message = '', 2000);
      }
    });
  }
  //Guardar cambios peticion de restriccion de productos a un usuario especifico.
  saveChanges(){
    if(!this.selectedUser){
      console.error('');
      this.message = ' seleccione, un usuario para la solicitud.';
      setTimeout(() => this.message = '', 2000);
      return;
    }
    if (this.ProductsChekedPermissions.length == 0 ) {
      this.message = 'Debe seleccionar, almenos 1. producto.';
      setTimeout(() => this.message = '', 2000);
      return;
    }
    const datachange = {
      user_id: this.selectedUser.id,
      product_id: this.ProductsChekedPermissions.map(p => p.id),
    };
    this.http.post('http://127.0.0.1:8000/api/clientProduct', datachange)
    .subscribe({
      next: (response : any) => {
        this.message = response.message;
            setTimeout(() => this.message = '', 2000);
      },
      error: (error) => console.log('this-error', error)
    });
  }
}
