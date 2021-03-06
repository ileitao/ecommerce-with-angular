import { NgModule } 						 				 from '@angular/core';
import { Router, Routes, RouterModule }  from '@angular/router';
import { SearchResultComponent } 				 from './search-result/search-result.component';
import { ShoppingCartComponent } 				 from './shopping-cart/shopping-cart.component';
import { TransactionCompleteComponent }  from './transaction-complete/transaction-complete.component';

const routes: Routes = [
	{ path: '', component: SearchResultComponent },
	{ path: 'categories/:id', component: SearchResultComponent },
	{ path: 'shopping-cart', component: ShoppingCartComponent },
	{ path: 'transaction-complete', component: TransactionCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}
}
