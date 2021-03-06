import { Component, OnInit }    from '@angular/core';
import { ShoppingCartService }  from '../shopping-cart.service';
import { Product }              from '../product';
import { Subscription }                 from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  /**
   * Structure example: [{"quantity": 3, {item:Product}},{"quantity": 2, {item:Product}}]
   * @type {Object[]}
   */
  items: Object[] = [];
	displayedColumns: string[] = ['quantity', 'name', 'price', 'remove-all'];
  subscription: Subscription;
  
  constructor(private shoppingCartService: ShoppingCartService) { 
  	this.subscription = shoppingCartService.shoppingCartUpdated$.subscribe(() => {
      return this.updateShoppingCart();
    });
  }

  ngOnInit() {
  	this.updateShoppingCart();
  }

  getTotalPricePerItem(element) {
  	return Number(element.item.price.replace(/[^0-9.-]+/g,"")) * element.quantity;
  }

  removeAllShoppingItemByItem(element): void {
  	this.shoppingCartService.removeAllShoppingItemByItem(element.item)
  }

  private updateShoppingCart() {
  	let obj: Object =  this.shoppingCartService.getShoppingItems();
  	this.items = Object.keys(obj).map(function(key) {
		  return obj[key];
		});
  }

  removeFromCart(element): void {  	
  	this.shoppingCartService.removeShoppingItem(element.item);
  }

  addToCart(element): void {
  	this.shoppingCartService.addShoppingItem(element.item);
  }

  getFinalPrice(): number {
  	let obj: Object =  this.shoppingCartService.getShoppingItems();
  	let price = 0;
  	Object.keys(obj).map(function(key) {
		  return price += Number(obj[key].item.price.replace(/[^0-9.-]+/g,"")) * obj[key].quantity;
		});

		return price;
  }
}
