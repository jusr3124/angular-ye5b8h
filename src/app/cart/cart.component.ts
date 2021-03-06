import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm: FormGroup;
  totalPrice: Number;
  name: FormControl;
  address: FormControl;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      address: formBuilder.control('', [Validators.required])
    })

  }

  register() {
    console.log(this.checkoutForm.value);
    window.alert('Purchased!');
  }

  onSubmit(customerData) {
    //process checout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getPriceItems() {
    this.totalPrice = this.cartService.getTotal();
  }
}
