import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
import { IMeet } from '../interfaces/meet';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  constructor() { }

  encrypt(value): string {
    return Base64.encode(JSON.stringify(value));
  }

  decrypt(value): string {
    return Base64.decode(value);
  }
}
