import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute }      from '@angular/router';
import { DataService }         from '../data.service';
import { EventBrokerService }  from '../EventBrokerService';
import { Product }             from '../product';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
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

  private filterEventListener: IEventListener;
	
  constructor(private route: ActivatedRoute, private data: DataService, private eventBroker: EventBrokerService)  {
    // EventListener
    this.filterEventListener = this.eventBroker.listen<boolean>('filterByAvailabilityEvent', (value: boolean) => {
      this.onFilterByAvailability(value);
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
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

  onFilterByAvailability(value: boolean) {
    if (value) {
      this.filteredProducts = Object.assign([], this.filteredProducts).filter(item => {
        return item.available !== false;
      })

      console.log(this.filteredProducts);
    }
  }

  private assignCopy(): void {
    this.filteredProducts = Object.assign([], this.products);
  }
}
