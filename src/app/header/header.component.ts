import { Component, OnInit, OnDestroy }    from '@angular/core';
import { SidenavService }                  from '../sidenav.service';
import { ShoppingCartService }             from '../shopping-cart.service';
import { Subscription }                    from 'rxjs';
import { Product }                         from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	appTitle: string = 'El Baratón';
  toggleActive: boolean = false;
  shoppingItems: number = null;
  subscription: Subscription;
  /**
   * Structure example: {"quantity": 3, {item:Product}}
   * @type {Object}
   */
  items: Object = {};

  constructor(private sidenav: SidenavService, private shoppingCartService: ShoppingCartService) { 
    this.subscription = shoppingCartService.addShoppingItem$.subscribe(item => {
      return this.addItem(item);
    });
    this.subscription = shoppingCartService.removeShoppingItem$.subscribe(item => {
      return this.removeItem(item);
    });
  }

  ngOnInit() {
  }

  public toggleSidenav(): void { 
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }

  /**
   * Sums +1 to shoppingItems and increase quantity +1 in items object
   * In case the item does not exist in items object then add a new obj
   * @param {Product} item item added
   */
  addItem(item: Product) {
    this.shoppingItems++;
    if (this.items[item.id]) {
      this.items[item.id].quantity++;
    } else {
      this.items[item.id] = {"quantity": 1, item};
    }
  }

  /**
   * Subs -1 to shoppingItems if gt 1 and decrease quantity -1 in items object
   * In case the item is the last then the item is removed
   * @param {Product} item item removed
   */
  removeItem(item: Product) {
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
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
