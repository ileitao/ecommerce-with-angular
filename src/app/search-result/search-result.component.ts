import { Component, OnInit, OnDestroy }  from '@angular/core';
import { ActivatedRoute }                from '@angular/router';
import { DataService }                   from '../data.service';
import { FilterService }                 from '../filter.service';
import { ShoppingCartService }           from '../shopping-cart.service';
import { Product }                       from '../product';
import { Subscription }                  from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy  {
  /**
   * Original fetched list
   * @type {Product[]}
   */
	products: Product[] = [];
  /**
   * Copy of original fetched list but filtered
   * @type {Product[]}
   */
  filteredProducts: Product[] = [];
  isAvailabilityValueFiltered: boolean = false;
  isMinValueFiltered: boolean = false;
  isMaxValueFiltered: boolean = false;
  isOnStockAmountFiltered: boolean = false;
  subscription: Subscription;
	
  constructor(private route: ActivatedRoute, private data: DataService, private filterService: FilterService, private shoppingCartService: ShoppingCartService)  {
    // Filters
    this.subscription = filterService.availabilityFilter$.subscribe(value => {
      return this.onFilterByAvailability(value)
    });
    this.subscription = filterService.priceMinFilter$.subscribe(value => {
      return this.onFilterByPriceMin(value)
    });
    this.subscription = filterService.priceMaxFilter$.subscribe(value => {
      return this.onFilterByPriceMax(value)
    });
    this.subscription = filterService.stockAmountFilter$.subscribe(value => {
      return this.onFilterByStockAmount(value)
    });
    // Sorters
    this.subscription = filterService.availabilitySorter$.subscribe(value => {
      return this.onSortByAvailability(value)
    });
    this.subscription = filterService.priceSorter$.subscribe(value => {
      return this.onSortByPrice(value)
    });
    this.subscription = filterService.stockAmountSorter$.subscribe(value => {
      return this.onSortByStockAmount(value)
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // Reset filters after a new search result
    this.filterService.resetFilters();
    if (id === 0) {
      this.data.getProducts().subscribe(data => {
        let productsArray = data["products"];
        for(let obj of productsArray) { 
          this.products.push(new Product(obj["quantity"], obj["price"], obj["available"], obj["sublevel_id"], obj["name"], obj["id"]));
          this.assignCopy();
        }
      });
    } else {
      this.data.getProductsById(id).subscribe(data => {
        for(let obj of data) { 
          this.products.push(new Product(obj["quantity"], obj["price"], obj["available"], obj["sublevel_id"], obj["name"], obj["id"]));
          this.assignCopy();
        }
      });
    }
  }

  // FILTERS
  onFilterByAvailability(value: boolean) {
    if (value === true) {
      this.filteredProducts = Object.assign([], this.filteredProducts).filter(item => {
        return item.available !== false;
      })
    } else if (value === false) {
      this.filteredProducts = Object.assign([], this.products);
    }
  }

  onFilterByPriceMin(value: number) {
    if (value > 0) {
      this.filteredProducts = Object.assign([], this.filteredProducts).filter(item => {
        return Number(item.price.replace(/[^0-9.-]+/g,"")) > value;
      })
    }
  }

  onFilterByPriceMax(value: number) {
    if (value > 0) {      
      this.filteredProducts = Object.assign([], this.filteredProducts).filter(item => {
        return Number(item.price.replace(/[^0-9.-]+/g,"")) < value;
      })
    }
  }

  onFilterByStockAmount(value: number) {
    if (value > 0) {
      this.filteredProducts = Object.assign([], this.filteredProducts).filter(item => {
        return item.quantity > value;
      })
    }
  }

  // SORTERS
  onSortByAvailability(value: boolean) {
    this.filteredProducts = Object.assign([], this.filteredProducts.sort((a, b) => a.available === value ? 1 : -1));
    console.log(this.filteredProducts)
  }

  onSortByPrice(value: boolean) {
    if (value) {
      this.filteredProducts = Object.assign([], this.filteredProducts.sort((a, b) => Number(a.price.replace(/[^0-9.-]+/g,"")) - Number(b.price.replace(/[^0-9.-]+/g,""))));
      console.log(this.filteredProducts)
    } else {
      this.filteredProducts = Object.assign([], this.filteredProducts.sort((a, b) => Number(b.price.replace(/[^0-9.-]+/g,"")) - Number(a.price.replace(/[^0-9.-]+/g,""))));
          console.log(this.filteredProducts)
    }
  }

  onSortByStockAmount(value: boolean) {
    if (value) {
      this.filteredProducts = Object.assign([], this.filteredProducts.sort((a, b) => a.quantity - b.quantity));
      console.log(this.filteredProducts)
    } else {
      this.filteredProducts = Object.assign([], this.filteredProducts.sort((a, b) => b.quantity - a.quantity));
      console.log(this.filteredProducts)
    }
  }

  private assignCopy(): void {
    this.filteredProducts = Object.assign([], this.products);
  }

  addToCart(product: Product) {
    this.shoppingCartService.addShoppingItem(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeShoppingItem(product);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
