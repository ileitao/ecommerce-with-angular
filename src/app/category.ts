export class Category {
	constructor(public id: number,
    					public name: string,
    					public sublevels: Category[]) { 
  	this.sublevels = this.getSubLevels(sublevels);
  }

  public getSubLevels(sl:Category[]): any {
  	let slArray: Category[] = [];
  	if (sl.length > 0) {  	
	    for(let obj of sl) {  
        let ssl = obj["sublevels"] || [];
	      slArray.push(new Category(obj["id"], obj["name"], ssl));
	    }
  	}

    return slArray;
  }
}