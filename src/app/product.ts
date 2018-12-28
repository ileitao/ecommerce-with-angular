export class Product {
	constructor(public quantity: number,
    					public price: string,
              public available: boolean,
              public sublevel_id: number,
              public name: string,
              public id: string) { }

  public isAvailable(): boolean {
    return this.available;
  }

  public getSublevelId(): number {
    return this.sublevel_id;
  }
}