import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  total;
  totalamount;

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].price) {
        total += this.items[i].price;
        this.totalamount = total;
      }
    }
    console.log(total);
    return total;
  }
}
