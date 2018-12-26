import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

	products: Object;
	
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getProducts().subscribe(data => {
  		this.products = data;
  		console.log(data);
  	})
  }

}
