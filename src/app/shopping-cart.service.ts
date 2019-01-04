import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Product }		from './product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

	// Observable boolean sources
  private addShoppingItemSrc = new Subject<Product>();
  private removeShoppingItemSrc = new Subject<Product>();

  // Observable boolean streams
  addShoppingItem$ = this.addShoppingItemSrc.asObservable();
  removeShoppingItem$ = this.removeShoppingItemSrc.asObservable();

    // Service message commands
  addShoppingItem(item: Product) {
    this.addShoppingItemSrc.next(item);
  }

  removeShoppingItem(item: Product) {
    this.removeShoppingItemSrc.next(item);
  }

  constructor() { }
}
