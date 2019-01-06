import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Product }		from './product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  /**
   * Structure example: {"quantity": 3, {item:Product}}
   * @type {Object}
   */
  items: Object = {};
  /**
   * Number of items added
   * @type {number}
   */
  shoppingItems: number = null;

	// Observable boolean sources
  private addShoppingItemSrc = new Subject<Product>();
  private removeShoppingItemSrc = new Subject<Product>();
  private shoppingCartUpdatedSrc = new Subject<Product>();
  private shoppingCartNumberUpdatedSrc = new Subject<Number>();

  // Observable boolean streams
  addShoppingItem$ = this.addShoppingItemSrc.asObservable();
  removeShoppingItem$ = this.removeShoppingItemSrc.asObservable();
  shoppingCartUpdated$ = this.shoppingCartUpdatedSrc.asObservable();
  shoppingCartNumberUpdated$ = this.shoppingCartNumberUpdatedSrc.asObservable();

  
  /**
   * Service message commands
   * Sums +1 to shoppingItems and increase quantity +1 in items object
   * In case the item does not exist in items object then add a new obj
   * @param {Product} item item added
   */ 
  addShoppingItem(item: Product) {
    this.addShoppingItemSrc.next(item);
    if (this.items[item.id]) {
      this.items[item.id].quantity++;
    } else {
      this.items[item.id] = {"quantity": 1, item};
    }
    this.shoppingItems++;
    this.shoppingCartUpdatedSrc.next(item);
    this.shoppingCartNumberUpdatedSrc.next(this.shoppingItems);
  }

  /**
   * Service message commands
   * Subs -1 to shoppingItems if gt 1 and decrease quantity -1 in items object
   * In case the item is the last then the item is removed
   * @param {Product} item item removed
   */
  removeShoppingItem(item: Product) {
    this.removeShoppingItemSrc.next(item);
    if (this.items[item.id]) {
      if (this.shoppingItems <= 1) {
        this.shoppingItems = null;
        this.items = {};
      } else {
        this.shoppingItems--;
        if (this.items[item.id].quantity > 1) {
          this.items[item.id].quantity--;
        } else if (this.items[item.id].quantity = 1) {
          delete this.items[item.id];
        }
      }
      this.shoppingCartUpdatedSrc.next(item);
      this.shoppingCartNumberUpdatedSrc.next(this.shoppingItems);
    }
  }

  /**
   * Remove all occurrences from the item passed
   * @param {Product} item item/s to be removed
   */
  removeAllShoppingItemByItem(item: Product) {
    if (this.items[item.id]) {
      if (this.shoppingItems === this.items[item.id].quantity) {
        this.shoppingItems = null;
      } else {
        this.shoppingItems -= this.items[item.id].quantity;
      }
      delete this.items[item.id];
    }

    this.shoppingCartUpdatedSrc.next(item);
    this.shoppingCartNumberUpdatedSrc.next(this.shoppingItems);
  }

  getShoppingItems(): Object {
    return this.items;
  }

  constructor() { 
  }
}
