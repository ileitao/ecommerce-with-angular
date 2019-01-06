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

  constructor(private sidenav: SidenavService, private shoppingCartService: ShoppingCartService) { 
    this.subscription = shoppingCartService.shoppingCartNumberUpdated$.subscribe(amount => {
      return this.updateShoppingCartNumber(amount);
    });
  }

  ngOnInit() {
    
  }

  public toggleSidenav(): void { 
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }

  /**
   * Sums +1 to shoppingItems 
   * @param {Product} item item added
   */
  updateShoppingCartNumber(amount) {
    this.shoppingItems = amount;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
