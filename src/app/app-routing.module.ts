import { NgModule } 						 				 from '@angular/core';
import { Router, Routes, RouterModule }  from '@angular/router';
import { SearchResultComponent } 				 from './search-result/search-result.component';

const routes: Routes = [
	{ path: '', component: SearchResultComponent },
	{ path: 'categories/:id', component: SearchResultComponent }
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
