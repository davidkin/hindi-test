import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getDataFromStorage(key): string {
    return localStorage.getItem(key);
  }

  addDataToStorage(key, value): boolean {
    localStorage.setItem(key, value);

    return !!localStorage.getItem(key);
  }

  hasStoreData(key): boolean {
    return !!localStorage.getItem(key);
  }
}
