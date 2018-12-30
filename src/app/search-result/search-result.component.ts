import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { DataService }       from '../data.service';
import { Product }           from '../product';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

	products: Product[] = [];
	
  constructor(private route: ActivatedRoute, private data: DataService)  {  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.data.getProducts().subscribe(data => {
        let productsArray = data["products"];
        for(let obj of productsArray) { 
          this.products.push(new Product(obj["quantity"], obj["price"], obj["available"], obj["sublevel_id"], obj["name"], obj["id"]));
        }
      });
    } else {
      this.data.getProductsById(id).subscribe(data => {
        for(let obj of data) { 
          this.products.push(new Product(obj["quantity"], obj["price"], obj["available"], obj["sublevel_id"], obj["name"], obj["id"]));
        }
      });
    }
  }
}
