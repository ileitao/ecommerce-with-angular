import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }                       from '@angular/router';
import { FilterService }                from '../filter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

	filterByAvailability: boolean = false;
  sortByAvailability: boolean = false;
  sortByPrice: boolean = false;
  sortByAmount: boolean = false;
  filterByPriceMin: number;
  filterByPriceMax: number;
  filterByStockAmount: number;

  constructor(private filterService: FilterService) { 
  }
  
  ngOnInit() {
    /*this.router.events.subscribe(val => {
      this.resetFilters();
    });*/
  }

  filterByAvailabilityCmd() {
    this.filterService.filterByAvailability(!this.filterByAvailability);
  }

  filterByPriceMinCmd() {
    this.filterService.filterByPriceMin(this.filterByPriceMin);
  }

  filterByPriceMaxCmd() {
    this.filterService.filterByPriceMax(this.filterByPriceMax);
  }

  filterByStockAmountCmd() {
    this.filterService.filterByStockAmount(this.filterByStockAmount);
  }
}
