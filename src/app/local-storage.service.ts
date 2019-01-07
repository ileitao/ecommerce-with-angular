import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

	private strg = window.localStorage;

  constructor() { }

  getStorage() {
  	return this.strg;
  }

  clearStorage() {
  	this.strg.clear();
  }

  saveToStorage(name: string, obj: Object) {
  	this.strg.setItem(name, JSON.stringify(obj));
  }

  getFromLocalStorage(name: string): Object {
  	if (this.strg.getItem(name)) {
  		try {
			  var obj = JSON.parse(this.strg.getItem(name));
			  return obj;
			} catch (ex) {
			  console.error(ex);
			}
  	}
  	
  	return {};
  }

  storageAvailable(type) {
    try {
      var storage = window[type],
          x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }
	}
}
