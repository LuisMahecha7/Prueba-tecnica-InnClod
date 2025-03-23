import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomePrivateComponent } from './components/home-private/home-private.component';
import { OrderNewComponent } from './components/order-new/order-new.component';
import { CreateProductComponent } from './components/create-product/create-product.component';


export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, // Ruta login
  { path: 'home', component: HomeComponent},
  { path: 'home-private', component: HomePrivateComponent},
  { path: 'order-new', component: OrderNewComponent},
  {path: 'create-product', component: CreateProductComponent}
];
