import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  constructor() { }

  encrypt(value: string): string {
    return window.btoa(JSON.stringify(value));
  }
}
