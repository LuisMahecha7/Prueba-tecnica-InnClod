import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-private',
  imports: [],
  templateUrl: './home-private.component.html',
  styleUrl: './home-private.component.css'
})
export class HomePrivateComponent {
  constructor(private router: Router) {}

  goToNewOrder() {
    this.router.navigate(['/order-new']);
  }

  goToNewProduct() {
    this.router.navigate(['/create-product']);
  }
}
