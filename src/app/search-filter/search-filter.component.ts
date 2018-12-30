import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

	filterByAvailability: boolean = false;

	filterByPrice: boolean = false;

	filterByPriceMin: number;

	filterByPriceMax: number;

	filterByStockAmount: number;

  sortByAvailability: boolean = false;

  sortByPrice: boolean = false;

  sortByAmount: boolean = false;

  /*constructor(private router: Router) {}*/
  constructor() { }
  
  ngOnInit() {
    /*this.router.events.subscribe(val => {
      this.resetFilters();
    });*/
  }

  /*public resetFilters(): void {
    this.filterByAvailability = false;
    this.filterByPrice = false;
    this.filterByPriceMin = 0;
    this.filterByPriceMax = 0;
    this.filterByStockAmount = 0;
    this.sortByAvailability = false;
    this.sortByPrice = false;
    this.sortByAmount = false;
  }*/
}
