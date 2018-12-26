import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService }		 						from '../sidenav.service';
import { MatSidenav }        						from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	@ViewChild('drawer') 
	public sidenav: MatSidenav;

  constructor(private sidenavservice: SidenavService) { }

  ngOnInit() {  	
  	this.sidenavservice.setSidenav(this.sidenav);
  }
}
