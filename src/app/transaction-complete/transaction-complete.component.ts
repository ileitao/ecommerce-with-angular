import { Component, OnInit }    from '@angular/core';
import { LocalStorageService }  from '../local-storage.service';
import { ShoppingCartService }  from '../shopping-cart.service';

@Component({
  selector: 'app-transaction-complete',
  templateUrl: './transaction-complete.component.html',
  styleUrls: ['./transaction-complete.component.scss']
})
export class TransactionCompleteComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
  	// This service replace a real transaction when a buy is done and cart gets empty
  	this.localStorageService.clearStorage();
  	this.shoppingCartService.cleanShoppingCart();
  }

}
