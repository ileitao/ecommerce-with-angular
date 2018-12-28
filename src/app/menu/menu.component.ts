import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { Category }          from '../category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	categories: Category[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getCategories().subscribe(data => {
      let categoriesArray = data["categories"];
      for(let obj of categoriesArray) { 
        let sl = obj["sublevels"] || [];
        this.categories.push(new Category(obj["id"], obj["name"], sl));
      }
  	})
  }
}
