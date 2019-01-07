import { Component, OnInit, OnDestroy }    from '@angular/core';
import { SidenavService }                  from '../sidenav.service';
import { ShoppingCartService }             from '../shopping-cart.service';
import { Subscription }                    from 'rxjs';
import { Product }                         from '../product';
import { ChangeDetectorRef }               from '@angular/core';

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

  constructor(private sidenav: SidenavService, private shoppingCartService: ShoppingCartService, private cdRef:ChangeDetectorRef) { 
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
   * Update shopping cart value
   * @param {Product} item item added
   */
  updateShoppingCartNumber(amount) {
    this.shoppingItems = amount;
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
