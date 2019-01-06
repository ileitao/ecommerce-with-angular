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

  removeAllShoppingItemByItem(element) {
  	this.shoppingCartService.removeAllShoppingItemByItem(element.item)
  }

  private updateShoppingCart() {
  	let obj: Object =  this.shoppingCartService.getShoppingItems();
  	this.items = Object.keys(obj).map(function(key) {
		  return obj[key];
		});
  }
}
