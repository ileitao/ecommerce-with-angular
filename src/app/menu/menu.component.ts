import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	categories: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getCategories().subscribe(data => {
  		this.categories = data;
  	})
  }
}
